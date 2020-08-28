import React, { useState } from 'react'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.detail}>
                <Text style={styles.zipCodeText}>Zip Code is {props.zipCode}.</Text>
                <Forecast {...forecastInfo}/>
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
        height: '40%',
        backgroundColor: 'black',
        opacity: 0.6,
      
        
    },
    zipCodeText: {
        color: 'white',
        fontSize: 14,
        paddingTop: 15
    }
})