import "react"
import { View, Text } from "react-native"
import { styles } from "../Style";

export default function Header() {

    return (
        <View style={styles.header}>
            <Text> Лабораторна робота № 1</Text>
            <Text> Виконав студент групи КН-32 Кутрик Олег</Text>
        </View>
    )
}