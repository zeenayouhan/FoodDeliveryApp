import React,{useState, useRef} from "react";
import {View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import Header from "../../components/Header";
import {icon, Image} from 'react-native-elements';
import { Icon } from "react-native-elements/dist/icons/Icon";
import{colors, parameters} from '../../global/styles';
import { titleText } from "../../global/styles";
import * as Animatable from "react-native-animatable";
import { Button , SocialIcon} from "react-native-elements";
import Swiper from "react-native-swiper";

export default function SignInWelcomeScreen({navigation}){
    return(
        <View style={{flex:1, marginTop:20}}>
            <View style={{flex:3,justifyContent:"flex-start", alignItems:"center",paddingTop:20}}>
                <Text style={{fontSize:26, color:colors.buttons, fontWeight:"bold"}}>DISCOVER RESTAUARANTS</Text>
                <Text style={{fontSize:26, color:colors.buttons, fontWeight:"bold"}}>IN YOUR AREA</Text>
            </View>
            <View style={{flex:4, justifyContent:"center"}}>
                <Swiper autoplay={true}>
                    <View style={styles.slides1}>
                        <Image
                        source={{uri:"https://s3.eu-west-1.amazonaws.com/images.prod.phoode.com/photos/project/5e7d18cc509cd.jpeg"}}
                        style={{height:'100%',width:"100%"}}

                        />

                    </View>
                    <View style={styles.slides2}>
                        <Image
                        source={{uri:"https://s3.eu-west-1.amazonaws.com/images.prod.phoode.com/photos/project/5e7d18cc509cd.jpeg"}}
                        style={{height:'100%',width:"100%"}}

                        />

                    </View>
                    <View style={styles.slides3}>
                        <Image
                        source={{uri:"https://s3.eu-west-1.amazonaws.com/images.prod.phoode.com/photos/project/5e7d18cc509cd.jpeg"}}
                        style={{height:'100%',width:"100%"}}

                        />

                    </View>
                    

                </Swiper>

            </View>
            
            <View style={{flex:4, justifyContent:'flex-end',marginBottom:20}}>
            <View style={{marginHorizontal:20, marginTop:30}}>
                <Button
                title="SIGN IN"
                buttonStyle = {parameters.styledButton}
                titleStyle = {parameters.buttonTitle}

                onPress={()=>{
                    navigation.navigate("SignInScreen")
                }}
                />

            </View>
            <View style={{marginHorizontal:20, marginTop:20}}>
                <Button 
                title="Create an account"
                buttonStyle = {styles.createButton}
                titleStyle = {styles.createButtonTitle}
                />
            </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    slides1:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#9DD6EB"
    },
    slides2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#97CAE5"
    },
    slides3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#92BBD9"
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.buttons,
        height:40,
        paddingHorizontal:20

    },
    createButtonTitle:{
        fontSize:16,
        color:colors.grey1,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3

    }
    

})