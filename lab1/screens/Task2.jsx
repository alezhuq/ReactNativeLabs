import React, {useState} from "react"; 
import { TextInput, View, Button, Text, ScrollView} from "react-native"
import { styles } from "../Style";
import Header from "../components/Header"



export default function Task2() {
    const [input1, onChangeInput1] = useState(1)
    const [input2, onChangeInput2] = useState(1)
    const [result, onChangeResult] = useState(0)
    function evaluate(){
        let res = 0
        for (let i = parseInt(input1); i < parseInt(input2); i++){
            if (i%15===0 && i%7 === 5){res += i}
                
        }
        return onChangeResult(res)
    }     
  
    return (
        <>
        <Header></Header>
        <ScrollView>
            <Text>Task 2 : На заданому
            проміжку чисел [a,b]
            знайти суму всіх, які
            кратні 15 та при
            діленні на 7 дають в
            остачі 5.</Text>
            <View style={styles.textinput}>
                <Text> First value :</Text>
                <TextInput 
                    onChangeText={onChangeInput1} 
                    value = {input1} 
                    placeholder="val1"
                />
            </View>

            <View style={styles.textinput}>
                <Text> Second value :</Text>
                <TextInput
                    onChangeText={onChangeInput2} value = {input2}
                    placeholder="val2"
                    
                />
            </View>
            <Text>result = {result}</Text>
            <Button title="calculate" onPress={evaluate}></Button>
        </ScrollView>
        </>
    )
}