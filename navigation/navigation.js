import React from "react"
import { createStackNavigator } from 'react-navigation'
import  findFriend from "../components/findFriend"
import  beacon from "../components/beacon"
import Img from "../components/image";
import live from "../components/live";

const Navigation = createStackNavigator(
    {
        Home:
        {
            screen: Img
        },
        findFriend: {
            screen: findFriend,
            navigationOptions:
            {
                title: "Find your friends"
            }
           
        },
        beacon:
        {
            screen: beacon
        },
        live:
        {
            screen: live
        }
    }
)
export default Navigation