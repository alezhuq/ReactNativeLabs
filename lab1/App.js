import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import {
	SafeAreaProvider,
	useSafeAreaInsets,
	initialWindowMetrics,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HeaderTabNavigator from "./components/HeaderTabNavigator";

import { styles } from "./Style";

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
				<HeaderTabNavigator />
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
