import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import {
	SafeAreaProvider,
	useSafeAreaInsets,
	initialWindowMetrics,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { styles } from "./Style";
import Task1 from "./screens/Task1";
import Task2 from "./screens/Task2";
import Task3 from "./screens/Task3";

const Stack = createNativeStackNavigator();

const Main = () => {
	const insets = useSafeAreaInsets();
	return (
		<NavigationContainer>
			<View
				style={{
					flex: 1,
					backgroundColor: "#fff",
				}}
			>
				<StatusBar style="auto" />

				<Stack.Navigator initialRouteName="Task1">
					<Stack.Screen name="Task1" component={Task1} />
					<Stack.Screen name="Task2" component={Task2} />
					<Stack.Screen name="Task3" component={Task3} />
				</Stack.Navigator>
				<Footer></Footer>
			</View>
		</NavigationContainer>
	);
};

export default function App() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<Main></Main>
		</SafeAreaProvider>
	);
}
