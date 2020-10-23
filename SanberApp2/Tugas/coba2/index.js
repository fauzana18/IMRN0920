import React, { createContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import TodoList from './TodoList';
export const RootContext = createContext();
const Context = () => {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    handleChangeInput =(value)=>{
        setInput (value)
    }
    addTodo =()=>{
        const day = new Date().getDate()
        const month = new Date().getMonth()
        const year = new Date ().getFullYear()
        const today = `${day}/${month}/${year}`
        setTodos([...todos, {title: input, date: today}])
    }
    return (
        <RootContext.Provider value={{
            input,
            todos,
            handleChangeInput,
            addTodo
        }}>
            <TodoList />
        </RootContext.Provider>
    )
}
export default Context;
const styles = StyleSheet.create({})