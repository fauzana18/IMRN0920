import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const Splash = () => {
    return (
        <View style={styles.container}>
            <View style={styles.footer}></View>
            
            <View style={styles.circle}>
                <Image source={require('./images/logo.png')} style={styles.logo}/>
            </View>

            <View style={styles.footer}>
                <View style={styles.line}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-between',
        alignItems: 'center'
    },
    circle: {
        borderRadius: 150,
        width: 298,
        height: 305,
        backgroundColor: '#E5E5E5',
    },
    logo: {
        width: 223,
        height: 133,
        resizeMode: 'contain'
    },
    footer: {
        height: 24,
        width: 414,
        alignItems: 'center'
    },
    line: {
        backgroundColor: 'black',
        width: 134,
        height: 5,
        borderRadius: 2.5
    }
})
