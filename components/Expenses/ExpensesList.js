import { Text, StyleSheet, FlatList} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Expense from "./Expense";

const ExpensesList = ({expenses}) => {

    const navigation = useNavigation();
    
    const handleExpenseEdit = id => {
        navigation.navigate("ManageExpence", {
            expenseId : id
        });
    };

    const renderExpense = (itemData) => {
        return <Expense 
            onPress={handleExpenseEdit.bind(this, itemData.item.id)}
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