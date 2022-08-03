import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import { GlobalStyles } from "../../../constants/style";

const Input = ({ label, isValid, inputConfiguration }) => {

    const inputStyle = [styles.inputfield];
    if (inputConfiguration && inputConfiguration.multiline) inputStyle.push(styles.multiline);
    return (
        <View style={styles.container} >
            <Text style={[styles.label, !isValid && styles.inValidLabel]}>{label}</Text>
            <KeyboardAvoidingView behavior="position">
                <TextInput style={[inputStyle, !isValid && styles.inValidInput]} {...inputConfiguration} />
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 8
    },
    label: {
        color: GlobalStyles.colors.primaryLight,
        marginBottom: 2,
        fontSize: 18
    },
    inputfield: {
        color: GlobalStyles.colors.dark300,
        backgroundColor: GlobalStyles.colors.primaryLight,
        padding: 6,
        borderRadius: 4,
        fontWeight: "bold",
        color: GlobalStyles.colors.dark300
    },
    multiline: {
        minHeight: 80,
        textAlignVertical: "top"
    },
    inValidInput : {
        backgroundColor : GlobalStyles.colors.danger30
    },
    inValidLabel : {
        color : GlobalStyles.colors.danger
    }
});

export default Input;