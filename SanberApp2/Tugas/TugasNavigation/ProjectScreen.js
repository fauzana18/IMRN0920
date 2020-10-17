import React, { Component } from 'react'
import { View, StyleSheet, Text} from 'react-native'

export class Project extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>List of your projects</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCFFE8',
      },
      text: {
        fontFamily: 'roboto',
        fontSize: 18,
      },
})