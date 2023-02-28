import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		backgroundColor: "#fff",
	},
	header: {
		alignItems: "center",
		justifyContent: "center",
		borderBottomWidth: 1,
		borderBottomColor: "black",
	},
	footer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		bottom: 0,
		marginBottom: 10,
		paddingTop: 10,
	},
	footer__elem: {
		justifyContent: "center",
		alignItems: "center",
	},
	footer__img: {
		resizeMode: "center",
		width: 30,
		height: 30,
	},
	textinput: {
		paddingLeft: 5,
		borderBottomColor: "black",
		borderBottomWidth: 2,
	},
});

export { styles };
