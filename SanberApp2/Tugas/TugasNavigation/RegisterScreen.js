import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

export class Register extends Component {
    constructor( {navigation} ) {
        super();
        this.state = {
            nameValue: '',
            unameValue: '',
            genderValue: '',
            passValue: '',
            conPassValue: '',
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
    
      patchData = async (name, pass, uname, gender) => {
          let a = this.state.data.length
          let addData = {
            [a] : {
                id:a,
                nama : name,
                password: pass,
                username: uname,
                gender: gender
            }
          }
        const response = await fetch("https://sanberapp-12f18.firebaseio.com/user/.json",
        {
            method: 'PATCH', 
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(addData)
        });
        const json = await response.json();
      }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                onPress={ () => this.state.nav.pop()} 
                style={{paddingTop: 9, paddingRight: 300}}>
                    <Image source={require('./images/back.png')}/>
                </TouchableOpacity>
                <View style={{paddingTop: 23}}>
                    <Image source={require('./images/register.png')} style={styles.judul}/>
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>NAMA</Text>
                    <TextInput style={styles.textInput}
                    onChangeText={(text) => this.setState({ nameValue: text })}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>USERNAME</Text>
                    <TextInput style={styles.textInput}
                    onChangeText={(text) => this.setState({ unameValue: text })}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>GENDER</Text>
                    
                    <DropDownPicker
                        items={[
                            {label: 'Pria', value: 'Pria'},
                            {label: 'Wanita', value: 'Wanita'},
                        ]}
                        defaultValue={this.state.genderValue}
                        containerStyle={{height: 35, width:190}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => this.setState({
                            genderValue: item.value
                        })}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>PASSWORD</Text>
                    <TextInput style={styles.textInput}
                    secureTextEntry={true}                   
                    onChangeText={(text) => this.setState({ passValue: text })}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.text}>CONFIRM PASSWORD</Text>
                    <TextInput style={styles.textInput}
                    secureTextEntry={true}                   
                    onChangeText={(text) => this.setState({ conPassValue: text })}
                    />
                </View>
                <TouchableOpacity onPress={ () => {
                    if(this.state.passValue === this.state.conPassValue){
                        this.patchData(this.state.nameValue, this.state.passValue, this.state.unameValue, this.state.genderValue);
                        this.state.nav.pop(); this.state.nav.replace("Home");
                    }
                }} 
                style={{paddingTop: 16}}>
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