import { useContext, useEffect } from "react";
import { ExpensesContext } from "../data/local/store";
import { StyleSheet } from "react-native";
import { fetchExpense } from "../data/http/http";
import ExpensesOverView from "../components/Expenses/ExpensesOverView";

const AllExpensesScreen = props => {
    const expenseCxt = useContext(ExpensesContext);
    useEffect(()=>{
        const handleFetch = async () => expenseCxt.setExpenses(await fetchExpense());
        handleFetch();
    }, []);

    const expensesCtx = useContext(ExpensesContext);
    return(
        <ExpensesOverView expenses={expensesCtx.expenses} periodName="All Expenses" />
    );
};

const styles = StyleSheet.create({
    container : {
        
    }
});

export default AllExpensesScreen;