import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View >
             <Text style={styles.largeText}>{props.main}</Text>
             <Text style={styles.normalText}>{props.description}</Text>
             <Text style={styles.largeText}>{props.temp}<Text style={styles.normalText}>°C</Text></Text>
             
        </View>
    )
}

const styles = StyleSheet.create({
    largeText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 20
    },

    normalText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 20
        
    }
})