import { View, Text, StyleSheet } from "react-native";

const ManageExpenseScreen = props => {
    return(
        <View style={styles.container}>
            <Text>All Expenses Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
});

export default ManageExpenseScreen;