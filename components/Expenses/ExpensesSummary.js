import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";
const ExpensesSummary = ({expenses, periodName}) => {
    
    const total = expenses.reduce( (sum, expense) => {return sum + expense.amount}, 0 )
    
    return(
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${total.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor : GlobalStyles.colors.primaryLight,
        padding : 8,
        margin : 12,
        borderRadius : 8,
        flexDirection : "row",
        justifyContent : "space-between"
    },
    period : {
        color :GlobalStyles.colors.primaryDark,
        fontSize : 18
    },
    sum : {
        color :GlobalStyles.colors.ternaryLight,
        fontSize : 20,
        fontWeight : "bold"
    }

});

export default ExpensesSummary;