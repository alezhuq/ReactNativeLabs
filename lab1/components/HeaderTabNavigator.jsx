import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Lab1 from '../navigation/Lab1';
import Lab2 from '../navigation/Lab2';

const Drawer = createDrawerNavigator();

function HeaderTabNavigator() {
  return (
    <Drawer.Navigator useLegacyImplementation={true}>
        <Drawer.Screen
            name='Lab1'
            component={Lab1}
        />
        <Drawer.Screen
            name='Lab2'
            component={Lab2}
        />
    </Drawer.Navigator>
  );
}

export default HeaderTabNavigator;