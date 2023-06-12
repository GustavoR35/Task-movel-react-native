import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';
import { Button, FlatList, SafeAreaView, TextInput, Text, View, StyleSheet } from "react-native";







export default function Service() {

  const [task, SetTask] = useState([])


  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = async () => {
    await axios("http://localhost:4003/findAluno", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log("Sucesso em fetch categoria!", response.data);
        SetTask(response.data);
      })
      .catch((error) => {
        console.log("Erro em fetch categoria!", error);
      });
  };


  const fecthAdd = async (data) => {
    await axios("http://localhost:4003/createAluno", {
      method: "POST",
      data: data,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log("Sucesso em fetch categoria!", response.data);
        fecthData();
      })
      .catch((error) => {
        console.log("Erro em fetch categoria!", error);
      });
  };

  const fecthDel = async (data) => {
    await axios("http://localhost:4003/deleteAluno", {
      method: "DELETE",
      data: data,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log("Sucesso em fetch categoria!", response.data);
        fecthData();
      })
      .catch((error) => {
        console.log("Erro em fetch categoria!", error);
      });
  };

  const fecthUpdate = async (data) => {
    debugger
    await axios.post("http://localhost:4003/updateAluno", {
      id:data.id,
      nome:data.nome
    })
      .then((response) => {
        debugger
        console.log("Sucesso em fetch categoria!", response.data);
        fecthData();
      })
      .catch((error) => {
        console.log("Erro em fetch categoria!", error);
      });
  };


  const Item = ({ item }) => (
    <View style={style.item} key={item.id}>
    
      <Text style={style.title}>{item.nome}</Text>
 

      <Button title="Remove" color={"red"} onPress={() => {
        fecthDel({id: item.id})
      }} />
        <p>--</p>
      <Button title="Alterar" color={"blue"} onPress={()=>{
        
        fecthUpdate({
            id: item.id, 
            nome: text
          })
      }} />
    </View>
  )

  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [list, setList] = useState([]);

  return (
    <View style={style.container}>

      <View style={style.form}>
        <TextInput style={style.input}
          placeholder="Digite as tarefas"
          onChangeText={(text) => setText(text)}
          value={text}
        />
      </View>





  

      <View style={style.form}>
        <Button title="Adicionar" onPress={() => {
          console.log(task)
          fecthAdd({ nome: text })
        
        }} />
      </View>

      <View style={style.divider}>

      </View>


      <SafeAreaView style={style.container}>
        <FlatList
          data={task}
          renderItem={({ item }) => <Item item={item}  />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 50,
    backgroundColor: '#000000',
    borderColor: '#00FF00',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    paddingBottom: '90px',
    paddingTop: '50px',

    paddingLeft: '-100px',
    shadowColor: '#7CFC00',
    shadowRadius: 100,


  },

  form: {
    width: 300,
    borderWidth: 1,

    borderColor: "#00FF00",
    margin: 2,
    borderRadius: 5,

  },

  input: {
    fontSize: "1.2em",
    padding: 4,
    width: "100%",
    color: 'white',
  },

  active_danger: {
    fontSize: "1.4em",
    backgroundColor: "red",
    padding: 6,
    borderRadius: 500,

  },

  form_danger: {
    width: 300,
    borderRadius: 5,
    textAlign: "center",

  },

  active_danger: {
    fontSize: "1.4em",
    backgroundColor: "red",
    padding: 6,
    borderRadius: 5,
  },

  divider: {
    width: "100%",
    borderWidth: 1,
  },

  item: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    width: 600,
    margin: 2,
  },

  title: {
    color: '#00FF00',
    margin: 4,
    flex: 0.5,
  },
  

})