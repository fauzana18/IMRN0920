import React, {useContext} from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { RootContext } from './index';
const TodoList = () => {
    const state = useContext(RootContext)
    console.log("todolist=>state", state)
    const renderItem =({item, index})=>{
        return (
            <View style={styles.containerItem}>
                <View style={styles.inputText}>
                    <Text>{item.date}</Text>
                    <Text>{item.title}</Text>
                </View>
                <TouchableOpacity style={styles.add}>
                    <Text style={styles.addVector}>Delete</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Todo List </Text>
            <View style={styles.content}>
                <TextInput
                     value={state.input}
                     style={styles.inputText}
                     placeholder="input here"
                     onChangeText={(value) => state.handleChangeInput(value)}
                     />
                <TouchableOpacity style={styles.add} onPress={()=>state.addTodo()}>
                    <Text style={styles.addVector}>+</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={state.todos}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}
export default TodoList
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        alignItems:'center',
        flex: 1
    },
    content:{
        flexDirection:'row',
    },
    text:{
        fontSize: 30,
    },
    inputText:{
        width: 200,
        height: 50,
        borderRadius:10,
        borderWidth:1,
    }, add:{
        backgroundColor: 'blue',
        width: 50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    addVector:{
        color:'white'
    },
    containerItem: {
        backgroundColor:'yellow',
        borderWidth:1,
        flexDirection:'row',
        marginTop: 20,
        borderRadius:10,
    }
})
