import React  from "react";
import {NavigationContainer} from "@react-navigation/native";

import AuthStackScreen from "./authNavigator";

export default function RootNavigator(){
    return(
        <NavigationContainer>
            <AuthStackScreen/>
        </NavigationContainer>
    )
}