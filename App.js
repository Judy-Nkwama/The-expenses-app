import { View, Text, StyleSheet } from "react-native";

const App = props => {
  return(
    <View style={styles.container}>
      	<Text>Hello!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
	container : {
		flex : 1
	}
});

export default App;