import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyles } from "./constants/style";
import { Ionicons } from "@expo/vector-icons";
import ExpenseContextProvider from "./data/store";
import IconButton from "./components/ui/IconButton";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import RecenteExpensesScreen from "./screens/RecenteExpensesScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ExpensesTabNavigator = () => {

	return (
		<Tab.Navigator
			screenOptions={({ navigation }) => ({
				headerStyle: { backgroundColor: GlobalStyles.colors.dark300 },
				tabBarStyle: { backgroundColor: GlobalStyles.colors.dark300 },
				tabBarActiveTintColor: GlobalStyles.colors.ternary,
				headerTintColor: GlobalStyles.colors.gray,
				headerRight: ({ tintColor }) => <IconButton
					iconName="add"
					color={tintColor}
					size={28}
					onPress={() => { navigation.navigate("ManageExpence") }}
				/>
			})}
		>
			<Tab.Screen
				name="AllExpences"
				component={AllExpensesScreen}
				options={{
					title: "All Expenses",
					tabBarLabel: "Expenses",
					tabBarIcon: ({ color, size }) => <Ionicons size={size} color={color} name="calendar" />
				}}
			/>
			<Tab.Screen
				name="RecentExpenses"
				component={RecenteExpensesScreen}
				options={{
					title: "Recent Expenses",
					tabBarLabel: "Recent",
					tabBarIcon: ({ color, size }) => <Ionicons size={size} color={color} name="hourglass" />
				}}

			/>
		</Tab.Navigator>
	);
};

const App = () => {

	const toggleManageExpense = () => {
		console.log("pressed!");
	}

	return (
		<>
			<StatusBar style="light" />
			<ExpenseContextProvider>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="ExpencesOverView"
							component={ExpensesTabNavigator}
							options={{
								headerShown: false,
								headerRight: () => <Ionicons size={24} color={"white"} name="hourglass" />
							}}
						/>
						<Stack.Screen
							name="ManageExpence"
							component={ManageExpenseScreen}
							options={({ route }) => ({
								title: route.params?.expenseId ? `Edit Expense` : "New Expense",
								headerStyle: { backgroundColor: GlobalStyles.colors.dark300 },
								headerTintColor: GlobalStyles.colors.gray,
								presentation: "modal",
								contentStyle : {
									backgroundColor : GlobalStyles.colors.secondary
								}
							})

							}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</ExpenseContextProvider>
		</>

	);
};

export default App;