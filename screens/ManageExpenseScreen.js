import { useContext } from "react";
import { ExpensesContext } from "../data/store";
import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/style";
import IconButton from "../components/ui/IconButton";
import Button from "../components/ui/Button";
import ExpenseForm from "../components/Expenses/ManageExpenses/ExpenseForm";

const ManageExpensesScreen = ({ navigation, route }) => {
    const expensesCtx = useContext(ExpensesContext);
    const isEditMode = !!route.params?.expenseId;
    const expenseId = route.params?.expenseId;

    const closeModal = () =>{
        navigation.goBack();
    };

    const handleAddExpense = () => { 
        if(isEditMode){
            expensesCtx.updateExpense(expenseId, {
                amount : 19.90,
                description : "Text value Update",
                date : new Date("2022-07-09")
            });
        }else{
            expensesCtx.addExpense({
                amount : 19.90,
                description : "Text value New",
                date : new Date("2022-03-08")
            })
        }
        closeModal();
    };

    const handleDelete = expenseId => {
        expensesCtx.deleteExpense(expenseId);
        closeModal();
    };

    return(
        <View style={styles.container}>
            <ExpenseForm />
            <View style={styles.DelAddBttsBk}>
                <Button title="Cancel" style="cancel" onPress={closeModal}/>
                <Button title="Save" style="confirm" onPress={handleAddExpense}/>
            </View>
            { isEditMode 
                && <View style={styles.trashButtonBk}>
                    <IconButton
                        iconName="trash"
                        color={GlobalStyles.colors.danger}
                        size={36}
                        onPress={handleDelete.bind(this, expenseId)}
                    />
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 24,
        backgroundColor : GlobalStyles.colors.secondary
    },
    DelAddBttsBk : {
        flexDirection : "row",
        justifyContent : "center"
    },
    trashButtonBk : {
        borderTopWidth : 2 ,
        borderColor : GlobalStyles.colors.primaryLight,
        marginTop : 4,
        paddingTop : 8,
        alignItems : "center"
    }
});

export default ManageExpensesScreen;