import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Detail = ({route, navigation }) => {
    const { item } = route.params;
    const { year } = route.params;
    return (
        <View>
            <Text>Detail Page</Text>
            <Text>item: {JSON.stringify(item)}</Text>
            <Text>year: {JSON.stringify(year)}</Text>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({})
