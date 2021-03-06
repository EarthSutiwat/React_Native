import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import Forecast from './Forecast'
import { useNavigation } from '@react-navigation/native'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'Loading..',
        description: 'Loading..',
        temp: 0,
        like: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`  )
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=58d57d295ca68d2feadfa60aac3493fd`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        like: json.main.feels_like
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
   }, [props.zipCode] )
   const navigation = useNavigation()
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.detail}>
                <Text style={styles.zipCodeText}>Zip Code is {props.zipCode}.</Text>
                <Forecast {...forecastInfo}/>
                <TouchableHighlight onPress={() => 
        navigation.navigate('Wind',{zipCode: props.zipCode})}>
            <Text style = {styles.normalText}>Wind Information</Text>
    </TouchableHighlight>
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
    },

    normalText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 15,
        backgroundColor: 'cadetblue',
        borderWidth: 1,
        borderColor: 'white'
    }
})