import { Text, StyleSheet, FlatList} from "react-native";
import Expense from "./Expense";
const ExpensesList = ({expenses}) => {

    const renderExpense = (itemData) => {
        return <Expense 
            description={itemData.item.description}
            date={itemData.item.date}
            amount={itemData.item.amount}
        />;
    };

    return(
        <FlatList 
            data={expenses}
            style={styles.container}
            renderItem={renderExpense}
            keyExtractor={ expense => expense.id }
        />
    );
};

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 18
    }
});

export default ExpensesList;