import { useContext } from "react";
import { ExpensesContext } from "../data/store";
import { View, StyleSheet, KeyboardAvoidingView, ScrollView} from "react-native";
import { GlobalStyles } from "../constants/style";
import IconButton from "../components/ui/IconButton";
import ExpenseForm from "../components/Expenses/ManageExpenses/ExpenseForm";

const ManageExpensesScreen = ({ navigation, route }) => {
    const expensesCtx = useContext(ExpensesContext);
    const isEditMode = !!route.params?.expenseId;
    const expenseId = route.params?.expenseId;

    const closeModal = () => {
        navigation.goBack();
    };

    const handleAddExpense = (expense) => {
        if (isEditMode) {
            expensesCtx.updateExpense(expenseId, expense);
        } else {
            expensesCtx.addExpense(expense);
        }
        closeModal();
    };

    const handleDelete = expenseId => {
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