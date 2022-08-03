import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
<<<<<<< HEAD
const IconButton = (color, size, iconName, onPress) => {
=======

const IconButton = ({color, size, iconName, onPress}) => {
>>>>>>> 40cab7b50c88cb33d4863a41991039520d9a9eca
    return(
        <Pressable
            onPress={onPress}
            style={({pressed}) => pressed && styles.pressed}
        >
            <View style={styles.innerContainer} >
                <Ionicons color={color} name={iconName} size={size} />
            </View>
        </Pressable>
        
    );
};

const styles = StyleSheet.create({
    container : {
        
    },
<<<<<<< HEAD
    pressed : {

=======
    innerContainer : {
        marginRight : 8
    },
    pressed : {
        opacity : 0.5
>>>>>>> 40cab7b50c88cb33d4863a41991039520d9a9eca
    }
});

export default IconButton;