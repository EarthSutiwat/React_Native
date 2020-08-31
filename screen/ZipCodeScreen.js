import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]


const ZipItem = ({place, code, navigation}) => (
    
    <TouchableHighlight onPress={() => 
        navigation.navigate('Weather',{zipCode: code})}>
        <View style = {styles.ZipItem}>
            <Text style= {styles.zipPlace}>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
    
)


export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        
        <FlatList 
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation ={navigation}/>}
            />
            
    )

}
const styles = StyleSheet.create({
    ZipItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'lightblue',
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
        borderWidth: 2
    
    },
    zipPlace: {
        flex: 1,
        fontSize: 25
        
    },
    zipCode: {
        flex: 1,
    }
})