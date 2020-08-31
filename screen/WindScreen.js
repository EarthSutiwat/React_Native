import React from 'react'
import { View } from 'react-native'
import Wind from '../components/Wind'

export default function WindScreen({route}){
    return (
        <View>
            <Wind zipCode={route.params.zipCode}/>
        </View>
    );
}