import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export const Register = ({navigation}) => {

    const [name, setName] = useState(0);
    const [email, setEmail] = useState(0);
    const [phone, setPhone] = useState(0);
    const [pass, setPass] = useState(0);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.sub}>Sign up to continue</Text>
            
            <View style={styles.body}>
                <Text style={styles.text}>Name</Text>
                <TextInput style={styles.textInput}
                    onChangeText={(text) => setName({ value: text })}
                    state={name}/>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.textInput}
                    onChangeText={(text) => setEmail({ value: text })}
                    state={email}/>
                <Text style={styles.text}>Phone Number</Text>
                <TextInput style={styles.textInput}
                    onChangeText={(text) => setPhone({ value: text })}
                    state={phone}/>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.textInput}
                    secureTextEntry={true}
                    onChangeText={(text) => setPass({ value: text })}
                    state={pass}/>

                <TouchableOpacity onPress={ () => navigation.navigate("Home")}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.signUp}>
                    <Text style={{fontFamily: 'Montserrat', fontSize: 12}}>Already have an account? </Text>
                    <TouchableOpacity onPress={ () => navigation.navigate("Login")}>
                        <Text style={{fontFamily: 'Montserrat', fontSize: 12, color: '#F77866'}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
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
    title: {
        paddingTop: 164,
        paddingLeft: 22.28,
        fontFamily: 'Montserrat',
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: 37,
        marginBottom: 1.72
    },
    sub: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        lineHeight: 15,
        paddingLeft: 24
    },
    body: {
        flex: 1,
        marginTop: 37,
        width: 366,
        height: 636,
        borderRadius: 11,
        marginLeft: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#25786C'
    },
    text: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        paddingLeft: 16,
        marginTop: 45
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6EAEE',
        width: 318,
        marginLeft: 16
    },
    button: {
        width: 318,
        height: 50,
        backgroundColor: '#F77866',
        borderRadius: 6,
        marginLeft: 24,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Montserrat',
        color: 'white'
    },
    signUp: {
        flexDirection: 'row',
        marginLeft: 100,
        marginTop: 11,

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
