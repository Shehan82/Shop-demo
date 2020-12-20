import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView , TextInput, Button, TouchableOpacity} from 'react-native';
import Todo from './Todo';

export default function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(["sheahn"]);

  const addToDo = ()=>{
    setTodos([input, ...todos]);
  }


  return (
    <SafeAreaView  >
      <View >
          <Text style={styles.txt}>Shehan</Text>
          {/* <Todo name={"shehan"}/> */}
          <View>
            <Text>Input your TODO here!</Text>
            <TextInput
             
              style={styles.todoInput}
              onChange={(e) => {setInput(e.target.value)}}
            
            />

            

            <Button 
            title="Add TODO"
            onPress={addToDo}
            />
          </View>

          {todos.map(todo =>(
            <Text >{todo}</Text>
          ))}


          

      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  
  txt:{
    fontSize:20,
  },
  todoInput:{
    borderColor:'red',
    borderWidth:1,
    width:200,
    alignItems:'center'
    
  }
});
