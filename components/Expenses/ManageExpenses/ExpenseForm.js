import { useState } from "react";
import { useContext } from "react";
import { ExpensesContext } from "../../../data/store";
import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import Button from "../../ui/Button";
import { GlobalStyles } from "../../../constants/style";


const ExpenseForm = ({onCncel, onSubmit, expenseId}) => {
    const expentContext = useContext(ExpensesContext);
    const currentExpense = !!expenseId && expentContext.expenses.find(
        expense => expense.id == expenseId
    );

    const [state, setState] = useState({
        amount : {
            value : currentExpense ? currentExpense.amount.toString() : "",
            isValid : true
        },
        description : {
            value : currentExpense ? currentExpense.description : "",
            isValid : true
        },
        date : {
            value :  currentExpense ? currentExpense.date.toISOString().slice(0, 10) : "",
            isValid : true
        }
    })
    const hangeTextChange = (inputIndentifier, value) => {
        setState( curentState => ({
            ...curentState,
            [inputIndentifier] : { isValid : true, value : value }
        }))
    };

    const submitHandler = () => {
        const expense = {
            amount : +state.amount.value,
            date : new Date(state.date.value),
            description : state.description.value
        };

        const IsValidAmount = !isNaN(expense.amount) && expense.amount > 0;
        const IsValidDate = expense.date.toString() != 'Invalid Date';
        const IsValidDescription = expense.description.length > 0;

        if(!IsValidAmount || !IsValidDate || !IsValidDescription) {
            Alert.alert('Invalid Input',"Recheck Your Inputs please ...", [{
                text : "okay", style : "cancel"
            }]);
            setState({
                amount : { value : state.amount.value, isValid : IsValidAmount },
                description : { value : state.description.value, isValid : IsValidDescription },
                date : { value : state.date.value, isValid : IsValidDate }
            })
            return;
        }

        onSubmit(expense);
    };

    const formIsValid = state.amount.isValid && state.date.isValid && state.description.isValid;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Expense Details</Text>
            <Input label="Amount" inputConfiguration={{
                placeceholder : "00.01",
                keyboardType : "decimal-pad",
                onChangeText : hangeTextChange.bind(this, "amount"),
                value : state.amount.value,
                isValid : state.amount.isValid
            }}/>
            <Input label="Date" inputConfiguration={{
                placeceholder : "YYYY-MM-DD",
                maxLength : 10,
                onChangeText : hangeTextChange.bind(this, "date"),
                value : state.date.value,
                isValid : state.date.isValid
            }}/>
            <Input label="Description" inputConfiguration={{
                placeceholder : "Enter something related to the expense",
                multiline : true,
                onChangeText : hangeTextChange.bind(this, "description"),
                value : state.description.value,
                isValid : state.description.isValid
            }}/>
            {!formIsValid && <Text style={styles.errMess}>The input values are incorrect please check your form</Text>}
            <View style={styles.DelAddBttsBk}>
                <Button title="Cancel" style="cancel" onPress={onCncel}/>
                <Button title="Save" style="confirm" onPress={submitHandler}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        marginTop : 8
    },
    title :{
        marginBottom : 8,
        fontSize : 20,
        fontWeight : "bold",
        textAlign : "center",
        color : "white"
    },
    DelAddBttsBk : {
        flexDirection : "row",
        justifyContent : "center"
    },
    errMess : {
        color : GlobalStyles.colors.danger
    }
});

export default ExpenseForm;