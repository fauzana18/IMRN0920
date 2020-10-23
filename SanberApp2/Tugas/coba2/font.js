import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, StyleSheet} from 'react-native';

styles=StyleSheet.create({
    scroller: {
        flex: 1,
    }
});

export default class AndroidFonts extends Component{
  render (){
    return(
      <ScrollView style={styles.scroller}>
        <Text style={{fontSize:50, fontFamily: 'normal'}}>  normal </Text>
        <Text style={{fontSize:50, fontFamily: 'notoserif'}}>  notoserif </Text>
        <Text style={{fontSize:50, fontFamily: 'sans-serif'}}>  sans-serif </Text>
        <Text style={{fontSize:50, fontFamily: 'sans-serif-light'}}>  sans-serif-light </Text>
        <Text style={{fontSize:50, fontFamily: 'sans-serif-thin'}}>  sans-serif-thin </Text>
        <Text style={{fontSize:50, fontFamily: 'sans-serif-condensed'}}>  sans-serif-condensed </Text>
        <Text style={{fontSize:50, fontFamily: 'sans-serif-medium'}}>  sans-serif-medium </Text>
        <Text style={{fontSize:50, fontFamily: 'serif'}}>  serif </Text>
        <Text style={{fontSize:50, fontFamily: 'Roboto'}}>  Roboto </Text>
        <Text style={{fontSize:50, fontFamily: 'monospace'}}>  MONospace </Text>        
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('AndroidFonts', () => AndroidFonts);