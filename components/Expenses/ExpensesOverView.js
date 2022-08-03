import { StyleSheet, View} from "react-native";
import { GlobalStyles } from "../../constants/style";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOverView = ({expenses, periodName}) => {
    return(
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={periodName} />
            <ExpensesList expenses={expenses} />
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : GlobalStyles.colors.secondary
    }
});

export default ExpensesOverView;