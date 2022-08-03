import { useContext } from "react";
import { ExpensesContext } from "../data/local/store";
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Alert} from "react-native";
import { GlobalStyles } from "../constants/style";
import IconButton from "../components/ui/IconButton";
import ExpenseForm from "../components/Expenses/ManageExpenses/ExpenseForm";
import { deleteExpense, postExpense, updateExpenseDb } from "../data/http/http";

const ManageExpensesScreen = ({ navigation, route }) => {
    const expensesCtx = useContext(ExpensesContext);
    const isEditMode = !!route.params?.expenseId;
    const expenseId = route.params?.expenseId;

    const closeModal = () => {
        navigation.goBack();
    };

    const handleAddExpense = async (expense) => {
        if (isEditMode) {
            await updateExpenseDb(expenseId, expense)
            expensesCtx.updateExpense(expenseId, expense);
        } else {
            let insertedId;
            try{
                insertedId = await postExpense(expense);
                expensesCtx.addExpense({...expense, id : insertedId});
            }catch(exeption){
                Alert.alert("Error!","An error occured please try again", [{text : "Okay", style : "cancel"}])
            }
        }
        closeModal();
    };

    const handleDelete = async (expenseId) => {
        await deleteExpense(expenseId);
        expensesCtx.deleteExpense(expenseId);
        closeModal();
    };

    return (
        <ScrollView style={{flex : 1}}>
            <KeyboardAvoidingView style={styles.container} behavior="position">
                <ExpenseForm onCncel={closeModal} onSubmit={handleAddExpense} expenseId={expenseId} />
                {isEditMode
                    && <View style={styles.trashButtonBk}>
                        <IconButton
                            iconName="trash"
                            color={GlobalStyles.colors.danger}
                            size={36}
                            onPress={handleDelete.bind(this, expenseId)}
                        />
                    </View>
                }
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.secondary
    },
    trashButtonBk: {
        borderTopWidth: 2,
        borderColor: GlobalStyles.colors.primaryLight,
        marginTop: 4,
        paddingTop: 8,
        alignItems: "center"
    }
});

export default ManageExpensesScreen;