import { useContext } from "react";
import { ExpensesContext } from "../data/store";
import { StyleSheet } from "react-native";
import ExpensesOverView from "../components/Expenses/ExpensesOverView";

const AllExpensesScreen = props => {
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