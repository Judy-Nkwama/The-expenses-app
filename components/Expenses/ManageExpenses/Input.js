import { View, Text, StyleSheet, TextInput } from "react-native";
import { GlobalStyles } from "../../../constants/style";

const Input = ({label, inputConfiguration}) => {

    const inputStyle = [styles.inputfield];
    if(inputConfiguration && inputConfiguration.multiLine) inputStyle.push(styles.multiLine);

    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyle} {...inputConfiguration} />
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        
    },
    label : {
        color : GlobalStyles.colors.primaryLight,
        marginBottom : 4

    },
    inputfield : {
        color : GlobalStyles.colors.primaryDark,
        backgroundColor : GlobalStyles.colors.primaryLight,
        padding : 6,
        borderRadius : 4
    },
    multiLine : {
        minHeight : 100,
        textAlignVertical : "top"
    }
});

export default Input;