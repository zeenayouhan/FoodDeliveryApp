import React , {useState}from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from "../components/HomeHeader";
import{colors, parameters} from '../global/styles'


export default function HomeScreen(){
    const [delivery, setdelivery] = useState(true)
    return(
        <View style={styles.container}>
             <ScrollView
             stickyHeaderIndices={[0]}
             showsVerticalScrollIndicator={true}
             >
             <HomeHeader/>
            <View style={{marginTop:10, flexDirection:"row",justifyContent:'space-evenly'}}>
                <TouchableOpacity
                onPress={()=>{setdelivery(true)}}
                > 
                    <View style={{...styles.deliveryButton,backgroundColor:delivery ? colors.buttons:colors.grey4}}>
                        <Text style={styles.deliveryText}>Delivery</Text>
                    </View> 
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    setdelivery(false)
                }}> 
                    <View style={{...styles.deliveryButton,backgroundColor:delivery ? colors.grey5:colors.buttons}}>
                        <Text style={styles.deliveryText}>Pick Up</Text>
                    </View> 
                </TouchableOpacity>
            </View>
            <View style={styles.filterView}>
            <View style={styles.filterView2}>
                <View style={{flexDirection:"row", alignItems:'center',paddingLeft:10}}>
                    <Icon
                    type="material-community"
                    name="map-marker"
                    color={colors.grey1}
                    size={26}
                    />
                    <Text style={{marginLeft:5}}>22 Beessie Street</Text>
                </View>
                <View style={styles.clockView}>
                    <Icon
                    type="material-community"
                    name="clock"
                    color={colors.grey1}
                    size={26}
                    />
                    <Text style={{marginLeft:5}}>Now</Text>
                </View>
                
            </View>
            <View style={{flexDirection:"row", marginLeft:20,alignItems:'center', marginTop:20,paddingVertical:5}}>
                    <Icon
                    type="material-community"
                    name="tune"
                    color={colors.grey1}
                    size={26}
                    />
                    
                </View>
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Categories</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
        
    },
    deliveryButton:{
        paddingHorizontal:20,
        borderRadius:15,
        paddingVertical:5,

    },
    deliveryText:{
        marginLeft:5,
        fontSize:16
        
    },
    filterView:{
        flexDirection:'row',alignItems:'center',justifyContent:'center'
    },
    filterView2:{
        flexDirection:"row", 
        alignItems:'center',
        justifyContent:'center', 
        marginTop:20, 
        backgroundColor:colors.grey5,
        borderRadius:15, 
        paddingVertical:5,
        marginHorizontal:10
    },
    clockView:{
        flexDirection:"row", 
        marginLeft:20,
        alignItems:'center',
        backgroundColor:colors.cardbackground, borderRadius:10,
        paddingHorizontal:10,
        marginRight:20
    },
    headerText:{
        color:colors.grey1,
        fontSize: 24,
        fontWeight:"bold",
       
        paddingLeft:10

    },
    headerTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:3
    }
})