import React, {useState} from "react"; 
import { TextInput, View, Button, Text, ScrollView} from "react-native"
import { styles } from "../Style";
import Header from "../components/Header"



export default function Task3() {
    const [input, onChangeInput] = useState(1)
    const [result, onChangeResult] = useState([])
    function evaluate(){
        const inp = parseInt(input)
        let res = []
        let row
        let highlited
        for (let i = 0 ; i < inp ; i++){
            row = []
            for (let j = 0 ; j < inp ; j++){
                if ((i + j*inp) >0 && (i + j*inp)%5 === 0)
                    {highlited = "green"} 
                else 
                    {highlited = "black"}
                row.push(<View><Text 
                    style={{
                        color: highlited, 
                        fontSize: 20
                    }}>{i + j*inp}</Text></View>)
            }
            res.push(<View style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>{[row]}</View>)    
        }
        onChangeResult(<Text>{[res]}</Text>)
    }     
  
    return (
        <>
        <Header></Header>
        <ScrollView>
            <Text>Task 2 : Згенерувати матрицю
            розміром NxN.
            Виокремити за
            допомогою кольору
            усі додатні елементи
            кратні 5.</Text>
            <View style={styles.textinput}>
                <Text> First value :</Text>
                <TextInput 
                    onChangeText={onChangeInput} 
                    value = {input} 
                    placeholder="val"
                />
            </View>

            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",}}>{result}</View>
            <Button title="calculate" onPress={evaluate}></Button>
        </ScrollView>
        </>
    )
}