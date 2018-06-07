import React from 'react'
import Login from './public/login'
import Registro from './public/registro'
 
import {colors} from './constants'

import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation'

const InitNav = createStackNavigator({
    Login: {
        screen: Login
    },
    Registro: {
        screen: Registro
    }
},{
    navigationOptions:{
        headerStyle:{
            backgroundColor:colors.primary
        },
        headerTintColor:'#fff'
        
    }
});

const Tabs=createBottomTabNavigator({
    Login:{
        screen:Login
    },
    Registro:{
        screen:Registro
    }
});


export  default Tabs;