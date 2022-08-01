import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyles } from "./constants/style";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/ui/IconButton";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import ManageExpenseScreen from "./screens/AllExpensesScreen";
import RecenteExpensesScreen from "./screens/RecenteExpensesScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ExpensesTabNavigator = () => {

	const toggleManageExpense = () => {
		console.log("pressed!");
	}

	return(
		<Tab.Navigator
			screenOptions={{
				headerStyle : { backgroundColor : GlobalStyles.colors.dark300},
				tabBarStyle : { backgroundColor : GlobalStyles.colors.dark300 },
				tabBarActiveTintColor : GlobalStyles.colors.ternary,
				headerTintColor : GlobalStyles.colors.gray,
				headerRight : ({tintColor}) => <IconButton
					onPress={toggleManageExpense}
					color={tintColor}
					size={24}
					name="add"
				/>
			}}
		>
			<Tab.Screen 
				name="AllExpences" 
				component={AllExpensesScreen}
				options={{
					title : "All Expenses",
					tabBarLabel : "Expenses",
					tabBarIcon : ({color, size}) => <Ionicons size={size} color={color} name="calendar" />
				}}
			/>
			<Tab.Screen 
				name="RecentExpenses" 
				component={RecenteExpensesScreen} 
				options={{
					title : "Recent Expenses",
					tabBarLabel : "Recent",
					tabBarIcon : ({color, size}) => <Ionicons size={size} color={color} name="hourglass" />
				}}
			/>
		</Tab.Navigator>
	);
};

const App = () => {
  return(
	<>
		<StatusBar style="light" />
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
					name="ExpencesOverView" 
					component={ExpensesTabNavigator}
					options={{headerShown : false}} 
				/>
				<Stack.Screen name="ManageExpences" component={ManageExpenseScreen}/>
			</Stack.Navigator>
		</NavigationContainer>
	</>
	
  );
};

export default App;