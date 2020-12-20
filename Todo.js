import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Todo = (props) => {
    return (
        <View>
            <Text>hello i am {props.name}</Text>
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({})

