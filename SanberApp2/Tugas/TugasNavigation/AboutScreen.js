import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'

export class About extends Component {
    constructor( {navigation} ){
        super();
        this.state = {
            nav: navigation
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.judul}>
                    <TouchableOpacity 
                    onPress={ () => this.state.nav.replace("Home")}
                    style={{width: 47, height: 34, marginRight: 60}}>
                        <Image source={require('./images/back.png')} />
                    </TouchableOpacity>
                    <View style={{marginRight: 110}}>
                        <Text style={styles.text}>ABOUT DEVELOPER</Text>
                    </View>
                </View>
                <Image source={require('./images/foto.png')} style={{width: 125, height:125, marginTop: 23, marginBottom: 12}} />
                <Text style={styles.text}>AHMAD FAUZAN MAULANA</Text>
                <View style={styles.susun}>
                    <View style={styles.socmed}>
                        <Image source={require('./images/ig.png')} style={{marginRight: 88}} />
                        <TouchableOpacity>
                            <Text style={styles.text}>fauzana18</Text>
                        </TouchableOpacity>    
                    </View>
                    <View style={styles.socmed}>
                        <Image source={require('./images/fb.png')} style={{marginRight: 34}} />
                        <TouchableOpacity>
                            <Text style={styles.text}>Ahmad Fauzan Maulana</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.socmed}>
                        <Image source={require('./images/twitter.png')} style={{marginRight: 68}} />
                        <TouchableOpacity>
                            <Text style={styles.text}>@fau_fauzan18</Text>
                        </TouchableOpacity>   
                    </View>
                </View>
                <Text style={styles.text}>Check my other projects here</Text>
                <View style={styles.socmed}>
                    <Image source={require('./images/github.png')} style={{marginRight: 88}} />
                    <TouchableOpacity>
                        <Text style={styles.text}>fauzana18</Text>
                    </TouchableOpacity>    
                </View>
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
        paddingTop: 9,
        flexDirection: 'row', 
        alignItems: 'center',
      },
      susun: {
        alignItems: 'flex-start',
        marginBottom: 51,
      },
      socmed: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25
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