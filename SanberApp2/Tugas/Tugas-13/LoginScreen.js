import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity} from 'react-native'

export default class App extends Component {
    constructor() {
        super();
        this.email = {
          emailValue: '',
        };
        this.password = {
            passValue: '',
        };
      }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{paddingTop: 40}}>
                    <Image source={require('./images/sanberapp.png')} style={styles.nama}/>
                </View>
                <View style={{paddingTop: 15}}>
                    <Image source={require('./images/logo.png')} style={styles.logo} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>E-MAIL</Text>
                    <TextInput style={styles.textInput}
                    onChangeText={(text) => this.setState({ value: text })}
                    emailValue={this.email.emailValue}/>
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>PASSWORD</Text>
                    <TextInput style={styles.textInput}
                    secureTextEntry={true}                   
                    onChangeText={(text) => this.setState({ value: text })}
                    passValue={this.password.passValue}/>
                </View>
                <TouchableOpacity style={{paddingTop: 16}}>
                    <View style={styles.button}>
                        <Text style={styles.text, {color: 'white'}}>LOGIN</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.regis}>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCFFE8',
      },
      nama: {
        width: 214,
        height: 42,
        resizeMode: 'contain'
      },
      logo: {
        width: 175,
        height: 176,
      },
      input: {
        alignItems: 'flex-start',
        paddingTop: 15,
      },
      textInput: {
        width:190, 
        height: 35, 
        borderColor: 'black',
        //borderWidth: 0.5,
        backgroundColor: 'white',
        borderRadius: 10,
      },
      text: {
        fontFamily: 'roboto',
        fontSize: 18,
      },
      button: {
        backgroundColor: '#2B12C4',
        width: 117,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      regis: {
        paddingTop: 72,
        fontSize: 14,
        fontFamily: 'roboto',
        color: '#001AFF',
      },
})