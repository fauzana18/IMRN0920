import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity} from 'react-native'

export default class App extends Component {
    constructor() {
        super();
        this.fname = {
            fnameValue: '',
        };
        this.lname = {
            lnameValue: '',
        };
        this.email = {
          emailValue: '',
        };
        this.password = {
            passValue: '',
        };
        this.conPassword = {
            conPassValue: '',
        };
      }
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{paddingTop: 9, paddingRight: 300}}>
                    <Image source={require('./images/back.png')}/>
                </TouchableOpacity>
                <View style={{paddingTop: 23}}>
                    <Image source={require('./images/register.png')} style={styles.judul}/>
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>FIRST NAME</Text>
                    <TextInput style={styles.textInput}
                    onChangeText={(text) => this.setState({ value: text })}
                    fnameValue={this.fname.fnameValue}/>
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>LAST NAME</Text>
                    <TextInput style={styles.textInput}
                    onChangeText={(text) => this.setState({ value: text })}
                    lnameValue={this.lname.lnameValue}/>
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
                <View style={styles.input}>
                    <Text style={styles.text}>CONFIRM PASSWORD</Text>
                    <TextInput style={styles.textInput}
                    secureTextEntry={true}                   
                    onChangeText={(text) => this.setState({ value: text })}
                    conPassValue={this.conPassword.conPassValue}/>
                </View>
                <TouchableOpacity style={{paddingTop: 16}}>
                    <View style={styles.button}>
                        <Text style={styles.text, {color: 'white'}}>REGISTER</Text>
                    </View>
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
      judul: {
        width: 276,
        height: 35,
        resizeMode: 'contain'
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
})