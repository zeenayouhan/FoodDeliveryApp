import React from "react";
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import SignInScreen from "../screens/authScreens/signInScreen";

const AuthStack = createNativeStackNavigator();

export default function AuthStackScreen(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen

            name="SignInWelcomeScreen"
            component = {SignInWelcomeScreen}
            options = {{
                headerShown: false,
                
            }}
            />
            <AuthStack.Screen

            name="SignInScreen"
            component = {SignInScreen}
            options = {{
                headerShown: false,
               
            }}
            />
 

    
        </AuthStack.Navigator>

    )
}