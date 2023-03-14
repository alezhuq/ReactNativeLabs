import {StyleSheet, Text, View, TextInput, ScrollView, Pressable, Dimensions} from 'react-native';
import React, {useState} from 'react';
import _ from 'lodash'
import {
  LineChart,
} from "react-native-chart-kit";

import {styles} from "../Style"

const Lab2 = () => {

  const [Xn, setXn] = useState('-2.74')
  const [Xk, setXk] = useState('28.29')
  const [Xh, setXh] = useState('3')
  const [a, setA] = useState('5')
  
  const [arrX, setArrX] = useState([])
  const [arrY, setArrY]= useState([])


  function calculate(){

    if(isNaN(parseFloat(Xn)) || isNaN(parseFloat(Xk))  || isNaN(parseFloat(Xh)) || isNaN(parseFloat(a))){
      alert('Input Error')
      return
    }

    setArrX(_.range(parseFloat(Xn), parseFloat(Xk), parseFloat(Xh)).map((elem)=>{
      return Number(elem.toFixed(2))
    }))

    setArrY(_.range(parseFloat(Xn), parseFloat(Xk), parseFloat(Xh)).map((elem)=>{
      if(elem <= 0){
       return(Number((Math.sqrt(Math.pow(Math.sin(elem), 2) + Math.pow(Math.cos(elem), 4))).toFixed(2)))
      }else if(0 < elem && elem <= parseFloat(a)){
        return(Number((Math.pow(Math.log(elem), 2) + Math.sqrt(elem)).toFixed(2)))
      }else if(elem > parseFloat(a)){
        return(Number((Math.pow(Math.tan(elem), 2) + Math.sqrt(elem)).toFixed(2)))
      }
    }))

  }


  return (
    <>
     <View
      style={{        
        backgroundColor: 'white',
        // paddingTop: insets.top,
        // alignItems: 'center'
      }}>
      <Text style={{
        fontSize: 20
      }}>Лабораторна робота №2</Text>
      <Text style={{
        fontSize: 20,
        paddingBottom: 5
      }}>Виконав </Text>
    </View>
    <ScrollView style={{
          flex: 1,
          backgroundColor: '#82ccdd',
        }} 
        showsVerticalScrollIndicator={false}>
        <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}>Xn</Text>
        <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, }} value={Xn} onChangeText={(text)=> setXn(text)}/>
        <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}>Xk</Text>
        <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, }} value={Xk} onChangeText={(text)=> setXk(text)}/>
        <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}>Xh</Text>
        <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, }} value={Xh} onChangeText={(text)=> setXh(text)}/>
        <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}>a</Text>
        <TextInput style={{backgroundColor: 'white', margin: 15, fontSize: 20, padding: 5, }} value={a} onChangeText={(text)=> setA(text)}/>

        <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#66a3ff' : '#0066ff'}, styles.button]} onPress={calculate}>
            <Text style={styles.text}>Calculate</Text>
          </Pressable>

        {(arrX.length === 0 || arrY.length === 0) ? null: <LineChart
          data={{
            labels: arrX,
            datasets: [
              {
                data: arrY,
              }
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color:(opacity = 1) => `black`,
          }}
          bezier
          style={{
            marginVertical: 8,
            alignSelf: 'center'
          }}
        />}
        {arrY.map((elem,index)=>{
          return <View key={index} style={{ paddingBottom: 30, marginLeft: 20}}>
              <Text style={styles.text}>x = {arrX[index]}; y = {elem}</Text>
          </View>
        })}
    </ScrollView>
    </>
  );
};

export default Lab2;