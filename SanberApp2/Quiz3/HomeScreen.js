import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export const Home = () => {

    const [search, setSearch] = useState(0);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.search}>
                    <Icon name={'search-outline'} size={16} style={{ marginRight: 10}} />
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => setSearch({ value: text })}
                        state={search}/>
                    <Icon name={'camera-outline'} size={16} style={{ marginLeft: 10}}/>
                </View>
                <Icons name={'bell-outline'} size={20} style={{ marginLeft: 10}} />
            </View>

            <Image source={require('./images/Slider.png')} style={styles.image}/>
            
            <View style={{flexDirection: 'row'}}>
                <Image source={require('./images/Man.png')}/>
                <Image source={require('./images/Woman.png')}/>
                <Image source={require('./images/Kids.png')}/>
                <Image source={require('./images/Home.png')}/>
                <Image source={require('./images/More.png')}/>
            </View>

            <View style={styles.footer}>
                <View style={styles.line}></View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE'
    },
    header: {
        marginTop: 56,
        flexDirection: 'row', 
        alignItems: 'center', 
        height: 44
    },
    search: {
        borderWidth: 1,
        borderColor: 'black',
        width: 342,
        height: 44,
        borderRadius: 11,
        marginLeft: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        height: 16,
        width: 280,
        borderRightWidth: 1,
        borderRightColor: '#E6EAEE'

    },
    image: {
        width: 382,
        height: 190,
        resizeMode: 'contain',
        borderRadius: 7
    },
    footer: {
        height: 24,
        width: 414,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#FEFEFE'
    },
    line: {
        backgroundColor: 'black',
        width: 134,
        height: 5,
        borderRadius: 2.5
    }
})
