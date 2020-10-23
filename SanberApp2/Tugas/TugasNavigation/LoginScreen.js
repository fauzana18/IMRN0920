import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity} from 'react-native'

export class Login extends Component {
    constructor({navigation}) {
        super();
        this.state = {
          unameValue: '',
          passValue: '',
          nav: navigation,
          data: []
        };
      }

      componentDidMount() {
        this.fetchData();
      }
    
      fetchData = async () => {
        const response = await fetch("https://sanberapp-12f18.firebaseio.com/user.json");
        const json = await response.json();
        this.setState({ data: json });
      };

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
                    <Text style={styles.text}>USERNAME</Text>
                    <TextInput style={styles.textInput}
                    onChangeText={(text) => this.setState({ unameValue: text })}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>PASSWORD</Text>
                    <TextInput style={styles.textInput}
                    secureTextEntry={true}                   
                    onChangeText={(text) => this.setState({ passValue: text })}
                    />
                </View>
                <TouchableOpacity 
                onPress={ () => {
                  for(let i = 0; i < this.state.data.length; i++){
                    if(this.state.unameValue === this.state.data[i].username && this.state.passValue === this.state.data[i].password){
                      this.state.nav.replace("Home")
                    }
                  }
                }}
                style={{paddingTop: 16}}>
                    <View style={styles.button}>
                        <Text style={styles.text, {color: 'white'}}>LOGIN</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.state.nav.push("Register")}>
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
        fontFamily: 'Montserrat',
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