import React, {useState, useEffect} from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => setData(json.movies))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
    return (
        <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>navigation.navigate('Detail', {item: item.title, year: item.releaseYear})}>
                    <Text>{item.title}, {item.releaseYear}</Text>
                </TouchableOpacity>
            )}
          />
        )}
      </View>
    )
}

export default Home

const styles = StyleSheet.create({})
