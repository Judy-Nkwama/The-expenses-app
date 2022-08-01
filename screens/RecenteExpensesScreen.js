import { View, Text, StyleSheet } from "react-native";
import { DUMMY_EXPENSES } from "../data/DUMMY_EXPENSES";
import ExpensesOverView from "../components/Expenses/ExpensesOverView";

const RecenteExpensesScreen = props => {
    return(
        <ExpensesOverView expenses={DUMMY_EXPENSES} periodName="Last 7 days" />
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
});

export default RecenteExpensesScreen;