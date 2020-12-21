import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView ,TouchableWithoutFeedback ,TextInput, Button, TouchableOpacity, Switch, Image} from 'react-native';
import Todo from './Todo';

export default function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(["shehen sandeepa"]);

  const addToDo = ()=>{
    setTodos([input, ...todos]);
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <SafeAreaView  style={styles.container} >
     
          <Text style={styles.txt}>Shehan</Text>
          
          <View>
            <Text>Add your todo here bro!</Text>
            <TextInput
             
              style={styles.todoInput}
              onChangeText={text=>setInput(text)} 
             
            />

            <TouchableOpacity onPress={addToDo} style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Add Todo</Text>
            </TouchableOpacity>
          </View>

          {todos.map(todo =>(
            <Text key={todo} style={{color:'red'}} >{todo}</Text>
          ))}

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <TouchableOpacity onPress={()=>{console.log("imagePressed!")}}>   
     <Image
     blurRadius={4}
     style={styles.tinyLogo} 
     source={require('./assets/sfd.png')}
     />
     </TouchableOpacity> 

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
    
  },
  tinyLogo: {
    width: 200,
    height: 300,
  },
  buttonStyle:{
    backgroundColor:"blue",
    width:100,
    marginLeft:'auto',
    marginRight:'auto',
    alignItems:'center',
    marginTop:20,
    height:30,
    borderRadius:10
  },
  buttonText:{
    color:'white',
    marginTop:'auto',
    marginBottom:'auto',
    fontSize:16,
    fontWeight:'800'

  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#fff"
  }
});
