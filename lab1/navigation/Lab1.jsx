import React from 'react';
import { View, Text } from "react-native";
import Footer from "../components/Footer";
import Header from '../components/Header';
import Task1 from "../screens/Task1";
import Task2 from "../screens/Task2";
import Task3 from "../screens/Task3";
import { styles } from "../Style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const Stack = createNativeStackNavigator();c
const botNavig = createBottomTabNavigator();
function Lab1(){
    
    return(
        <>
        <Header labNum={1}/>
        <botNavig.Navigator screenOptions={({route})=>({

            tabBarIcon:()=>{
                let icon
                if (route.name === "Task1"){
                    icon = "1"
                }
                if (route.name === "Task2"){
                    icon = "2"
                }
                if (route.name === "Task3"){
                    icon = "3"
                }
                return <View><Text style={{fontSize:30}}>{icon}</Text></View>
            }
        })}>
            <botNavig.Screen name="Task1" component={Task1} />
            <botNavig.Screen name="Task2" component={Task2} />
            <botNavig.Screen name="Task3" component={Task3} />
        </botNavig.Navigator>
        </>
    )
}

export default Lab1