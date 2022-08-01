import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/style";
import IconButton from "../components/ui/IconButton";
import Button from "../components/ui/Button";

const ManageExpensesScreen = ({ navigation, route }) => {

    const isEditMode = !!route.params?.expenseId;

    const closeModal = () =>{
        navigation.goBack();
    };

    const handleAddExpense = () => { 
        closeModal();
    };

    const handleDelete = expenseId => {
        closeModal();
    };

    return(
        <View style={styles.container}>
            <View style={styles.DelAddBttsBk}>
                <Button title="Cancel" style="cancel" onPress={closeModal}/>
                <Button title="Save" style="confirm" onPress={handleAddExpense}/>
            </View>
            { isEditMode 
                && <View style={styles.trashButtonBk}>
                    <IconButton
                        iconName="trash"
                        color={GlobalStyles.colors.danger}
                        size={36}
                        onPress={handleDelete}
                    />
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 24,
        backgroundColor : GlobalStyles.colors.secondary
    },
    DelAddBttsBk : {
        flexDirection : "row",
        justifyContent : "center"
    },
    trashButtonBk : {
        borderTopWidth : 2 ,
        borderColor : GlobalStyles.colors.primaryLight,
        marginTop : 4,
        paddingTop : 8,
        alignItems : "center"
    }
});

export default ManageExpensesScreen;