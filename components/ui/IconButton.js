import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = (color, size, iconName, onPress) => {
    return(
        <Pressable
            onPress={onPress}
            style={({pressed}) => pressed && styles.pressed}
        >
            <View style={styles.container}>
                <Ionicons color={color} name={iconName} size={size} />
            </View>
        </Pressable>
        
    );
};

const styles = StyleSheet.create({
    container : {
        
    },
    pressed : {

    }
});

export default IconButton;