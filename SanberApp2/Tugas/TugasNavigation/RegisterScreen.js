import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity} from 'react-native'

export class Register extends Component {
    constructor( {navigation} ) {
        super();
        this.state = {
            fnameValue: '',
            lnameValue: '',
            emailValue: '',
            passValue: '',
            conPassValue: '',
            nav: navigation
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
                <TouchableOpacity 
                onPress={ () => this.state.nav.navigate("Login")} 
                style={{paddingTop: 9, paddingRight: 300}}>
                    <Image source={require('./images/back.png')}/>
                </TouchableOpacity>
                <View style={{paddingTop: 23}}>
                    <Image source={require('./images/register.png')} style={styles.judul}/>
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>FIRST NAME</Text>
                    <TextInput style={styles.textInput}
                    onChangeText={(text) => this.setState({ value: text })}
                    state={this.state.fnameValue}/>
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>LAST NAME</Text>
                    <TextInput style={styles.textInput}
                    onChangeText={(text) => this.setState({ value: text })}
                    state={this.state.lnameValue}/>
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>E-MAIL</Text>
                    <TextInput style={styles.textInput}
                    onChangeText={(text) => this.setState({ value: text })}
                    state={this.state.emailValue}/>
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>PASSWORD</Text>
                    <TextInput style={styles.textInput}
                    secureTextEntry={true}                   
                    onChangeText={(text) => this.setState({ value: text })}
                    state={this.state.passValue}/>
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>CONFIRM PASSWORD</Text>
                    <TextInput style={styles.textInput}
                    secureTextEntry={true}                   
                    onChangeText={(text) => this.setState({ value: text })}
                    state={this.state.conPassValue}/>
                </View>
                <TouchableOpacity onPress={ () => this.state.nav.navigate("Home")} style={{paddingTop: 16}}>
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