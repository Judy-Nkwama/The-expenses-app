import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/style";
import { formatDate } from "../../utilities/dateFormater";

const Expense = ({ description, amount, date, onPress }) => {

    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{color : "white"}}
                style={({ pressed }) => [styles.innerContainer, pressed && styles.pressed]}
                onPress={onPress}
            >
                <View style={styles.desDateBk}>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.date}>{formatDate(date)}</Text>
                </View>
                <View style={styles.amountBk}>
                    <Text style={styles.amount}>${amount}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        overflow : "hidden",
        shadowColor: "black",
        shadowOffset: { width: 3, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 2,
        borderRadius: 4,
        marginVertical: 6,
        marginHorizontal : 4,
        backgroundColor: GlobalStyles.colors.dark300
    },
    innerContainer: {
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    desDateBk: {
        flex: 1
    },
    amountBk: {
        backgroundColor: GlobalStyles.colors.primaryLight,
        padding: 8,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    description: {
        color: GlobalStyles.colors.primaryLight,
        fontSize: 18
    },
    amount: {
        color: GlobalStyles.colors.secondary,
        fontSize: 17,
        fontWeight: "bold",
        minWidth: 70,
        textAlign: "center"
    },
    date: {
        color: GlobalStyles.colors.ternary
    },
    pressed : { opacity: 0.5 }
});

export default Expense;