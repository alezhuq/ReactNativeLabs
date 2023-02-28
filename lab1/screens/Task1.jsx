import React, {useState} from "react"; 
import { TextInput, View, Button, Text, ScrollView} from "react-native"
import { styles } from "../Style";
import Header from "../components/Header"


export default function Task1() {
    
    const [input1, onChangeInput1] = useState(1)
    const [input2, onChangeInput2] = useState(1)
    const [input3, onChangeInput3] = useState(1)
    const [result, onChangeResult] = useState(0)
    function evaluate(){
        in1 = parseInt(input1)
        in2 = parseInt(input2)
        in3 = parseInt(input3)
        let res = 0
        if( !(in1 % 2) && !(in2 % 2) && !(in3 % 2)){
            res = in1 * in2 * in3
        }
        else{
            res = (in1 + in2 + in3)**2
        }
            
        return onChangeResult(res)
    }       
    return (
        <>
        <Header></Header>
        <ScrollView >
            <Text>Завдання: Задано три числа.
                Якщо всі вони парні,
                то знайти їх добуток.
                В іншому випадку –
                квадрат суми
            </Text>
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

            <View style={styles.textinput}>
                <Text> Third value :</Text>
                <TextInput
                    onChangeText={onChangeInput3} value = {input3}
                    placeholder="val3"
                />
            </View>
            <Text>result = {result}</Text>
            <Button title="calculate" onPress={evaluate}></Button>
            
        </ScrollView>
        </>
    )
}