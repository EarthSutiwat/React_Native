import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import Forecast from './Forecast'
import WindInfo from './WindInfo'

export default function Wind(props){
    const [windInfo, setWindInfo] = useState({
        speed: 0,
        degree: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`  )
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=58d57d295ca68d2feadfa60aac3493fd`)
                .then((response) => response.json())
                .then((json) => {
                    setWindInfo({
                        speed: json.wind.speed,
                        degree: json.wind.deg
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
   }, [props.zipCode] )
    
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.detail}>
                <Text style={styles.zipCodeText}>Zip Code is {props.zipCode}.</Text>
                <WindInfo {...windInfo}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    detail: {
        alignItems: 'center',
        width: '100%',
        height: '65%',
        backgroundColor: 'black',
        opacity: 0.6,
      
        
    },
    zipCodeText: {
        color: 'white',
        fontSize: 14,
        paddingTop: 15
    }
})