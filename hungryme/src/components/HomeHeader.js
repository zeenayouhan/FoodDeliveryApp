import React from "react";
import {View, Text, StyleSheet, Dimensions } from 'react-native';
import {icon} from 'react-native-elements';
import { Icon, withBadge} from "react-native-elements";
import{colors, parameters} from '../global/styles';

export default function HomeHeader(){
    const BadgeIcon = withBadge(15)(Icon);
    return(
        <View style={styles.header}>
            <View style={{alignItems:"center",justifyContent:"center",marginLeft:15}}>  
            <Icon
            type="material-community"
            name="menu"
            color={colors.cardbackground}
            size={32}
            />
            </View>
            <View style={{alignItems:"center", justifyContent:'center'}}>
                <Text style={{color:colors.cardbackground, fontSize:25, fontWeight:"bold"}}>Hungry Me !!</Text>
            </View>
            <View style={{alignItems:"center",justifyContent:"center"}}>
            <BadgeIcon
            type="material-community"
            name="cart"
            color={colors.cardbackground}
            size={32}
            />
            </View>
            
        </View>
    )

}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height: parameters.headerHeight,
        justifyContent:'space-between'
    }

})