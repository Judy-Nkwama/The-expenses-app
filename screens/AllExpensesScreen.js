import { View, Text, StyleSheet } from "react-native";
import { DUMMY_EXPENSES } from "../data/DUMMY_EXPENSES";
import ExpensesOverView from "../components/Expenses/ExpensesOverView";

const AllExpensesScreen = props => {
    return(
        <ExpensesOverView expenses={DUMMY_EXPENSES} periodName="All Expenses" />
    );
};

const styles = StyleSheet.create({
    container : {
    }
});

export default AllExpensesScreen;