import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';

import { View, StyleSheet, ImageBackground, SafeAreaView, Button,Dimensions,Text, TouchableOpacity,Image} from 'react-native'
// Formik
import { Formik } from "formik";

// Icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons"

import {
    BackgroundStyle,
    StyledContainer2,
    InnerContainer,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledTextInput,
    StyledButton,
    MsgBox,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    Colours,
    ButtonText,
} from './../components/styles';
import {  Platform, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const styles=StyleSheet.create({
    container:{
            flex: 1,
            alignItems:"center",
            justifyContent:"center",
        }, 
        buttonupper:{
            width: '40%',
      height: '10%',
      //marginLeft:"32.5%",
      top:0.2*SCREEN_HEIGHT,
      marginRight:"32.5%",
      justifyContent: 'center',
      alignItems: 'center',
      position:"absolute",
      backgroundColor:"orange",
      //click,
        },
        button1:{
            width: '40%',
      height: '10%',
      //marginLeft:"32.5%",
      top:0.35*SCREEN_HEIGHT,
      marginRight:"32.5%",
      justifyContent: 'center',
      alignItems: 'center',
      position:"absolute",
      backgroundColor:"red",
      //click,
        },
        button2:{
            width: '40%',
      height: '10%',
      //marginLeft:"32.5%",
      top:0.5*SCREEN_HEIGHT,
      marginRight:"32.5%",
      justifyContent: 'center',
      alignItems: 'center',
      position:"absolute",
      backgroundColor:"pink",
      //click,
        },
        button3:{
            width: '40%',
      height: '10%',
      //marginLeft:"32.5%",
      top:0.65*SCREEN_HEIGHT,
      marginRight:"32.5%",
      justifyContent: 'center',
      alignItems: 'center',
      position:"absolute",
      backgroundColor:"violet",
      //click,
        },
    text:{
        textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 0.02*(SCREEN_WIDTH+SCREEN_HEIGHT),
    //marginTop: "10%",
    top:"11.5%",
    marginLeft: "25%",
    marginRight: "25%",
    marginBottom: "90%",
    width: "50%",
    //backgroundColor: 'yellow',
    position:'absolute',
    },
    innertext:{
        textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 0.01*(SCREEN_WIDTH+SCREEN_HEIGHT),
    marginTop: 0,
    marginLeft: "20%",
    marginRight: "20%",
    //marginBottom: "40%",
    justifyContent: 'center',
      alignItems: 'center',
    width: "80%",
    //backgroundColor: 'yellow',
    position:'absolute',
    },
    settingsicon:{
        //marginTop:"5%",
        //marginBotttom:"80%",
        //marginLeft:"50%",
        top:"12%",
        right:"10%",
        //marginBotttom:0.8*SCREEN_HEIGHT,
        //marginLeft:0.2*SCREEN_WIDTH,
        width:0.035*SCREEN_WIDTH,
        height:0.025*SCREEN_HEIGHT,
        position:'absolute',
        
    }
}
    )

export default function app(){
    return(
        <SafeAreaView style={styles.container}>
        
            <ImageBackground
                        source={require('./../assets/WallpapersAndLogo/MainPageDirectory.png')}
                        resizeMode="cover"
                        style={BackgroundStyle.image}
            >
                
                <Text numberOfLines={1}style={styles.text}> 
                Main Page
                </Text>
                    <TouchableOpacity color="blue"  style={styles.settingsicon}>
            <Image source={require('./../assets/WallpapersAndLogo/settings.png')}
                style={styles.settingsicon}>
                </Image>
                </TouchableOpacity>
            </ImageBackground>
            <TouchableOpacity   style={styles.buttonupper}>
            <Text numberOfLines={1}style={styles.innertext}> 
                Create New Listing
                </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1}>
            <Text numberOfLines={1}style={styles.innertext}> 
                Edit Your Listing
                </Text>
                    </TouchableOpacity>
                    <TouchableOpacity   style={styles.button2}>
            <Text numberOfLines={1}style={styles.innertext}> 
                Store
                </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button3}>
            <Text numberOfLines={1}style={styles.innertext}> 
                Your Orders
                </Text>
                    </TouchableOpacity>
        </SafeAreaView>
    )
}