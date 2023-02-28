import { View, Text, Image, TouchableOpacity} from "react-native"
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../Style";
import firstPhoto from "../img/1.png" 
import secondPhoto from "../img/2.png" 
import thirdPhoto from "../img/3.png" 

export default function Footer() {
    navigation = useNavigation()
    return (
        <View style={styles.footer}>
            <TouchableOpacity 
            style={styles.footer__elem} 
            activeOpacity={0.5}
            onPress = {() => navigation.navigate('Task1')}
            >
                
                <Image style = {styles.footer__img} source={firstPhoto} />
                <Text>Завдання 1</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.footer__elem} 
            activeOpacity={0.5}
            onPress = {() => navigation.navigate("Task2")}
            >
                <Image style = {styles.footer__img} source={secondPhoto} />
                <Text>Завдання 2</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.footer__elem}
            activeOpacity={0.5}
            onPress = {() => navigation.navigate("Task3")}
            >
                <Image style = {styles.footer__img} source={thirdPhoto} />
                <Text>Завдання 3</Text>
            </TouchableOpacity>

        </View>
    )
}