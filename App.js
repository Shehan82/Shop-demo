import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView , TextInput, Button, TouchableOpacity} from 'react-native';
import Todo from './Todo';

export default function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(["shehen sandeepa"]);

  const addToDo = ()=>{
    setTodos([input, ...todos]);
  }


  return (
    <SafeAreaView  >
      <View >
          <Text style={styles.txt}>Shehan</Text>
          {/* <Todo name={"shehan"}/> */}
          <View>
            <Text>Add your todo here!</Text>
            <TextInput
             
              style={styles.todoInput}
              onChangeText={text=>setInput(text)} 
            
            />

            <TouchableOpacity onPress={addToDo} style={{
              backgroundColor:"blue",
              width:100,
              marginLeft:'auto',
              marginRight:'auto',
              alignItems:'center',
              marginTop:20,
              height:30,
              borderRadius:10
              
              }}>
              <Text style={{
                color:'white',
                marginTop:'auto',
                marginBottom:'auto',
                fontSize:16,
                fontWeight:'800'
                }}>Add Todo</Text>
            </TouchableOpacity>

            {/* <Button 
            title="Add TODO"
            
            /> */}
          </View>

          {todos.map(todo =>(
            <Text key={todo} style={{color:'red'}} >{todo}</Text>
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
