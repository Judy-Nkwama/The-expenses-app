import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/style";
import { formatDate } from "../../utilities/dateFormater";

const Expense = ({description, amount, date}) => {
    return(
        <Pressable style={styles.container}>
            <View style={styles.desDateBk}>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.date}>{formatDate(date)}</Text>
            </View>
            <View style={styles.amountBk}>
                <Text style={styles.amount}>${amount}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container : {
        padding : 12,
        borderRadius : 4,
        shadowColor : "black",
        shadowOffset : { width : 3, height : 2},
        shadowOpacity : 0.8,
        shadowRadius : 6,
        elevation : 6,
        flexDirection : "row",
        justifyContent : "space-between",
        marginVertical : 6,
        backgroundColor : GlobalStyles.colors.dark300
    },
    desDateBk : {
        flex: 1
    },
    amountBk : {
        backgroundColor : GlobalStyles.colors.primaryLight,
        padding : 8,
        borderRadius : 4,
        justifyContent : "center",
        alignItems : "center"
    },
    description : {
        color : GlobalStyles.colors.primaryLight,
        fontSize : 18
    },
    amount : {
        color : GlobalStyles.colors.secondary,
        fontSize : 17,
        fontWeight : "bold",
        minWidth : 70,
        textAlign : "center"
    },
    date : {
        color : GlobalStyles.colors.ternary
    }
});

export default Expense;