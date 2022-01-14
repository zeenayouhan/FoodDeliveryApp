import React,{useState, useRef} from "react";
import {View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import Header from "../../components/Header";
import {icon} from 'react-native-elements';
import { Icon } from "react-native-elements/dist/icons/Icon";
import{colors, parameters} from '../../global/styles';
import { titleText } from "../../global/styles";
import * as Animatable from "react-native-animatable";
import { Button } from "react-native-elements/dist/buttons/Button";

export default function SignInScreen(){

    const[textInput2Focused, setTextInput2Focused] = useState(false);
    const textInput1 = useRef(1); 
    const textInput2 = useRef(2);

    return(
        <View style={styles.container}>
            <Header title="MY ACCOUNT" type="arrow-left"/>
            <View>
                <Text style={styles.title} >Sign In</Text>
               
            </View>
            <View style={{alignItems:"center", marginTop:10}}>
                <Text style={styles.text1}>Please enter the email and password</Text>
                <Text style={styles.text1}>registered with your account</Text>
            </View>
            <View style={{marginTop:10}}>
                <View>
                    <TextInput 
                    style={styles.TextInput1}
                    placeholder="Email"
                    ref={textInput1}/>
                </View> 
                <View style={styles.TextInput2}>
                <Animatable.View animation={textInput2Focused? "":"fadeInLeft"} duration={400}>
                    <Icon 
                    name="lock"
                    iconStyle={{color:colors.grey3}}
                    type="material"
                    />

                </Animatable.View>
                <TextInput 
                    style={{width:"80%"}}
                    placeholder="Password"
                    ref={textInput2}
                    onFocus={()=>{
                        setTextInput2Focused(false)
                    }}
                    onBlur={()=>{
                        setTextInput2Focused(true)
                    }}/>
                <Animatable.View animation={textInput2Focused? "":"fadeInLeft"} duration={400}>
                <Icon 
                    name="visibility-off"
                    iconStyle={{color:colors.grey3}}
                    type="material"
                    style={{marginRight:10}}
                
                    />

                </Animatable.View>
                </View>
            </View>
            <View style={{marginHorizontal:20, marginVertical:30}}>
                <Button
                title="SIGN IN"
                buttonStyle = {parameters.styledButton}
                titleStyle = {parameters.buttonTitle}
                />

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    text1:{
        color: colors.grey3,
        fontSize: 16

    },

    TextInput1:{
        borderWidth: 1,
        borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15

    },
    TextInput2:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft: 15
    },
    title :{
        color:"#ff8c52",
        fontSize :20,
        fontWeight:"bold"
    }
})