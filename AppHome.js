import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {DrawerNavigator} from 'react-navigation'
import {} from 'native-base'
import HomeScreen from "./Screen/HomeScreen";
import ChatScreen from "./Screen/ChatScreen";
import CallScreen from "./Screen/CallScreen";
import MySideBar from "./MySideBar";


const drawer = DrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
        }
        ,
        Chat: {
            screen: ChatScreen,
        },
        Call: {
            screen: CallScreen,
        }
    },
    {
        contentComponent: MySideBar,
        initialRouteName: 'Home',
        drawerPosition: 'left'
    }
);

export default drawer;
