import React, { Component } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.fetchData();
    this.patchData();
  }

  fetchData = async () => {
    const response = await fetch("https://sanberapp-12f18.firebaseio.com/data.json");
    const json = await response.json();
    this.setState({ data: json.items });
  };

  patchData = async () => {
      const addData = {
        8: {
            id:8,
            nama : "hoila"
        }
      }
    const response = await fetch("https://sanberapp-12f18.firebaseio.com/data/items/.json",
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
      let ha = []
      for(let i = 0; i < this.state.data.length; i++){
        if(this.state.data[i].nama == 'ojan'){
            ha.push(
                <Text>ok ini</Text>
            )
        }
        else{
            ha.push(
                <Text>bukan ini</Text>
            )
        }
      }

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) =>
            <Text>
              {`${item.nama}`}
            </Text>}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});