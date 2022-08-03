import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";

const ExpenseForm = props => {

    const hangeTextChange = () => {
        
    };

    return(
        <View style={styles.container}>
            <Input label="Amount" inputConfiguration={{
                placeceholder : "00.01",
                keyboardType : "decimal-pad",
                onChangeText : hangeTextChange
            }}/>
            <Input label="Date" inputConfiguration={{
                placeceholder : "YYYY-MM-DD",
                maxLength : 10,
                onChangeText : hangeTextChange
            }}/>
            <Input label="Description" inputConfiguration={{
                placeceholder : "Enter something related to the expense",
                multiline : true,
                onChangeText : hangeTextChange
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        //flex : 1
    }
});

export default ExpenseForm;