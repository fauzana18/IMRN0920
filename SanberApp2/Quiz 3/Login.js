import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Login = ({navigation}) => {

    const [email, setEmail] = useState(0);
    const [pass, setPass] = useState(0);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.sub}>Sign in to continue</Text>
            
            <View style={styles.body}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.textInput}
                    onChangeText={(text) => setEmail({ value: text })}
                    state={email}/>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.textInput}
                    secureTextEntry={true}
                    onChangeText={(text) => setPass({ value: text })}
                    state={pass}/>

                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate("Home")}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </View>
                </TouchableOpacity>

                <View style={{alignItems: 'center', marginTop: 31, marginBottom: 30}}>
                    <Text>-OR-</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity>
                        <View style={styles.button2}>
                            <Icon name={'facebook'} size={20} style={{marginRight: 10}} />
                            <Text style={styles.buttonText2}>Facebook</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.button2}>
                            <Icon name={'google'} size={20} style={{marginRight: 10}} />
                            <Text style={styles.buttonText2}>Google</Text>
                        </View>
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
        height: 536,
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
    forgot: {
        marginTop: 20,
        fontSize: 12,
        fontFamily: 'Montserrat',
        marginLeft: 231
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
    button2: {
        borderRadius: 6, 
        borderWidth: 1, 
        borderColor: '#E6EAEE', 
        width: 149, 
        height: 44,
        marginLeft: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText2: {
        fontSize: 14,
        fontFamily: 'Montserrat',
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
