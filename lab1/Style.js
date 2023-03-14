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
	button: {
		alignItems: "center",
		alignSelf: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		width: 180,
	},
	text: {
		fontSize: 20,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
	res: {
		alignSelf: "center",
		fontSize: 20,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "black",
		marginTop: 20,
	},
});

export { styles };
