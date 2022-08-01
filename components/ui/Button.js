import { View, Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/style";

const Button = ({style, title, onPress}) => {
    return(
        <View style={[styles.container, {
                backgroundColor: style=="confirm" 
                ? GlobalStyles.colors.primary
                : GlobalStyles.colors.danger
                }]}>
            <Pressable
                android_ripple={{color : "white"}}
                onPress={onPress}
                style={({pressed}) => pressed && styles.pressed}
            >
                <View style={styles.innerContainer} >
                    <Text style={styles.text}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        overflow : "hidden",
        borderRadius : 6,
        margin : 4,
        minWidth : 80
    },
    innerContainer : {
        padding : 8,
        alignItems : "center"
    },
    text : {
        color : "white",
        fontWeight : "bold",
        textAlign : "center"
    },
    pressed : {
        opacity : 0.5
    }
});

export default Button;