import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import data from './skillData.json'

export default class App extends Component {
    render() {

        let language = [];
        let library = [];
        let tech = [];
        for(let i = 0; i < data.items.length; i+=2){
            
            let percent = data.items[i].percentageProgress.split("%");
            percent = percent.shift();
            percent = Number(percent);
            percent = (percent/10)*3;

            if(data.items[i+1]){
                var percent2 = data.items[i+1].percentageProgress.split("%");
                percent2 = percent2.shift();
                percent2 = Number(percent2);
                percent2 = (percent2/10)*3;
            }

            if(data.items[i].category == "Language"){
                if( data.items[i+1]){
                    language.push(
                    <View key={i} style={styles.box}>
                        <View style={styles.item}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name={data.items[i].iconName} size={30} style={{marginRight: 10}} />
                                <View>
                                    <Text style={{fontSize: 12}}>{data.items[i].skillName}</Text>
                                    <Text style={{fontSize: 9}}>Level: {data.items[i].level}</Text>
                                </View>
                            </View>
                            <View style={styles.percentBox}>
                                <View style={{
                                            backgroundColor: '#8987FF', 
                                            width:30, height:percent, 
                                            borderRadius: 5, 
                                            alignItems: 'center', 
                                            justifyContent: 'center'}}
                                >
                                    <Text style={{fontSize: 9}}>{data.items[i].percentageProgress}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name={data.items[i+1].iconName} size={30} style={{marginRight: 10}} />
                                <View>
                                    <Text style={{fontSize: 12}}>{data.items[i+1].skillName}</Text>
                                    <Text style={{fontSize: 9}}>Level: {data.items[i+1].level}</Text>
                                </View>
                            </View>
                            <View style={styles.percentBox}>
                                <View style={{
                                            backgroundColor: '#8987FF', 
                                            width:30, height:percent2, 
                                            borderRadius: 5, 
                                            alignItems: 'center', 
                                            justifyContent: 'center'}}
                                >
                                    <Text style={{fontSize: 9}}>{data.items[i+1].percentageProgress}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    )
                }

                else {
                    language.push(
                        <View key={i} style={styles.box}>
                            <View style={styles.item}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name={data.items[i].iconName} size={30} style={{marginRight: 10}} />
                                    <View>
                                        <Text style={{fontSize: 12}}>{data.items[i].skillName}</Text>
                                        <Text style={{fontSize: 9}}>Level: {data.items[i].level}</Text>
                                    </View>
                                </View>
                                <View style={styles.percentBox}>
                                    <View style={{
                                                backgroundColor: '#8987FF', 
                                                width:30, height:percent, 
                                                borderRadius: 5, 
                                                alignItems: 'center', 
                                                justifyContent: 'center'}}
                                    >
                                        <Text style={{fontSize: 9}}>{data.items[i].percentageProgress}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.item}>
                            </View>
                        </View>
                        )
                }
            }

            else if(data.items[i].category == "Library"){
                if( data.items[i+1]){
                    library.push(
                    <View key={i} style={styles.box}>
                        <View style={styles.item}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name={data.items[i].iconName} size={30} style={{marginRight: 10}} />
                                <View>
                                    <Text style={{fontSize: 12}}>{data.items[i].skillName}</Text>
                                    <Text style={{fontSize: 9}}>Level: {data.items[i].level}</Text>
                                </View>
                            </View>
                            <View style={styles.percentBox}>
                                <View style={{
                                            backgroundColor: '#8987FF', 
                                            width:30, height:percent, 
                                            borderRadius: 5, 
                                            alignItems: 'center', 
                                            justifyContent: 'center'}}
                                >
                                    <Text style={{fontSize: 9}}>{data.items[i].percentageProgress}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name={data.items[i+1].iconName} size={30} style={{marginRight: 10}} />
                                <View>
                                    <Text style={{fontSize: 12}}>{data.items[i+1].skillName}</Text>
                                    <Text style={{fontSize: 9}}>Level: {data.items[i+1].level}</Text>
                                </View>
                            </View>
                            <View style={styles.percentBox}>
                                <View style={{
                                            backgroundColor: '#8987FF', 
                                            width:30, height:percent2, 
                                            borderRadius: 5, 
                                            alignItems: 'center', 
                                            justifyContent: 'center'}}
                                >
                                    <Text style={{fontSize: 9}}>{data.items[i+1].percentageProgress}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    )
                }

                else {
                    library.push(
                        <View key={i} style={styles.box}>
                            <View style={styles.item}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name={data.items[i].iconName} size={30} style={{marginRight: 10}} />
                                    <View>
                                        <Text style={{fontSize: 12}}>{data.items[i].skillName}</Text>
                                        <Text style={{fontSize: 9}}>Level: {data.items[i].level}</Text>
                                    </View>
                                </View>
                                <View style={styles.percentBox}>
                                    <View style={{
                                                backgroundColor: '#8987FF', 
                                                width:30, height:percent, 
                                                borderRadius: 5, 
                                                alignItems: 'center', 
                                                justifyContent: 'center'}}
                                    >
                                        <Text style={{fontSize: 9}}>{data.items[i].percentageProgress}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.item}>
                            </View>
                        </View>
                        )
                }
            }

            else {
                if( data.items[i+1]){
                    tech.push(
                    <View key={i} style={styles.box}>
                        <View style={styles.item}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name={data.items[i].iconName} size={30} style={{marginRight: 10}} />
                                <View>
                                    <Text style={{fontSize: 12}}>{data.items[i].skillName}</Text>
                                    <Text style={{fontSize: 9}}>Level: {data.items[i].level}</Text>
                                </View>
                            </View>
                            <View style={styles.percentBox}>
                                <View style={{
                                            backgroundColor: '#8987FF', 
                                            width:30, height:percent, 
                                            borderRadius: 5, 
                                            alignItems: 'center', 
                                            justifyContent: 'center'}}
                                >
                                    <Text style={{fontSize: 9}}>{data.items[i].percentageProgress}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name={data.items[i+1].iconName} size={30} style={{marginRight: 10}} />
                                <View>
                                    <Text style={{fontSize: 12}}>{data.items[i+1].skillName}</Text>
                                    <Text style={{fontSize: 9}}>Level: {data.items[i+1].level}</Text>
                                </View>
                            </View>
                            <View style={styles.percentBox}>
                                <View style={{
                                            backgroundColor: '#8987FF', 
                                            width:30, height:percent2, 
                                            borderRadius: 5, 
                                            alignItems: 'center', 
                                            justifyContent: 'center'}}
                                >
                                    <Text style={{fontSize: 9}}>{data.items[i+1].percentageProgress}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    )
                }

                else {
                    tech.push(
                        <View key={i} style={styles.box}>
                            <View style={styles.item}>
                                <View style={{flexDirection: 'row'}}>
                                    <Icon name={data.items[i].iconName} size={30} style={{marginRight: 10}} />
                                    <View>
                                        <Text style={{fontSize: 12}}>{data.items[i].skillName}</Text>
                                        <Text style={{fontSize: 9}}>Level: {data.items[i].level}</Text>
                                    </View>
                                </View>
                                <View style={styles.percentBox}>
                                    <View style={{
                                                backgroundColor: '#8987FF', 
                                                width:30, height:percent, 
                                                borderRadius: 5, 
                                                alignItems: 'center', 
                                                justifyContent: 'center'}}
                                    >
                                        <Text style={{fontSize: 9}}>{data.items[i].percentageProgress}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.item}>
                            </View>
                        </View>
                        )
                }
            }
        }

        return (
            <ScrollView style={styles.container}>
                <View style={styles.judul}>
                    <View>   
                    </View>
                    <View style={{marginLeft: 100}}>
                        <Text style={styles.text}>HOME</Text>
                    </View>
                    <View style={styles.rightBar}>
                        <TouchableOpacity style={{width: 35, height: 35, marginRight: 14}}>
                            <Image source={require('./images/info.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 35, height: 35}}>
                            <Image source={require('./images/logout.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection: 'row', paddingLeft: 15}}>
                    <Image source={require('./images/profile.png')} style={{width: 130, height: 130}} />
                    <Text style={{paddingTop:27, fontSize: 24, fontFamily: 'roboto'}}>K.H. SUPARDI</Text>
                </View>

                <View style={{marginTop: 50}}>
                    <Text style={styles.text}>Programming Language</Text>
                    {language}
                </View>

                <View style={{marginTop: 50}}>
                    <Text style={styles.text}>Framework / Library</Text>
                    {library}
                </View>

                <View style={{marginTop: 50}}>
                    <Text style={styles.text}>Tools</Text>
                    {tech}
                </View>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#FCFFE8',
      },
      judul: {
        paddingTop: 9,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',        
      },
      rightBar: {
        flexDirection: 'row',
        paddingRight: 14
      },
      box: {
        flexDirection: 'row', 
        marginTop: 20, 
        justifyContent: 'space-between'
      },
      item: {
        flex:1, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
      },
      percentBox: {
        backgroundColor: '#C4C4C4', 
        width:30, 
        height:30, 
        borderRadius: 5, 
        alignItems: 'center', 
        justifyContent: 'flex-end'
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