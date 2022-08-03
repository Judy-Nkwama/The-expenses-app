import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ExpensesContext } from "../data/local/store";
import { dateMinusXdays } from "../utilities/dateFormater";
import ExpensesOverView from "../components/Expenses/ExpensesOverView";

const RecenteExpensesScreen = props => {

    const expensesCtx = useContext(ExpensesContext);
    const sevenDaysAgoDate = dateMinusXdays(new Date(), 7);
    const recentExpenses = expensesCtx.expenses.filter( expense => {
        return expense.date > sevenDaysAgoDate;
    });

    return(
        <ExpensesOverView expenses={recentExpenses} periodName="Last 7 days" />
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
});

export default RecenteExpensesScreen;