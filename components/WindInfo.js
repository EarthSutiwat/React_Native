import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function WindInfo(props) {
    return (
        <View >
             <Text style={styles.largeText}>{props.speed} m/s</Text>
             <Text style={styles.largeText}>{props.degree} °</Text>
              
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

    
})