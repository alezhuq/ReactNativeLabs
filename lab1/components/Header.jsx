import "react"
import { View, Text } from "react-native"
import { styles } from "../Style";

export default function Header(props) {
    const {labNum} = props
    return (
        <View style={styles.header}>
            <Text> Лабораторна робота № {labNum}</Text>
            <Text> Виконав студент групи КН-32 Кутрик Олег</Text>
        </View>
    )
}