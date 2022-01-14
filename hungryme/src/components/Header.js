import React from "react";
import {View, Text, StyleSheet, Dimensions } from 'react-native';
import {icon} from 'react-native-elements';
import { Icon } from "react-native-elements/dist/icons/Icon";
import{colors, parameters} from '../global/styles'

const Header = (props) =>{
    return(
    <View style = {styles.header}>
        <View style={{marginLeft:20 ,marginTop:50}}>
            <Icon
            type="material-community"
            name = "arrow-left"
            color={colors.headerText}
            size={28}
            onPress={()=>{}}
            />
            
        </View>
        
        <View style={{marginLeft:20 ,marginTop:50}}>
                <Text style={styles.headerText}>{props.title}</Text>
        </View>
        
    </View>);

}

const styles = StyleSheet.create(

    {
        header :{
            flexDirection: "row",
            backgroundColor:  colors.buttons,
            height: parameters.headerHeight

            
        },
        headerText:{
            color: colors.headerText,
            fontSize: 22,
            fontWeight:"bold"

        }
    }
)

export default Header;