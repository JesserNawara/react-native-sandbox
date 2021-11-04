import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Alert,
  Keyboard,
} from "react-native";
import Todos from "./Todos";


export default function Home({ navigation }) {
  const [task, setTask] = useState(null);
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task) {
      Keyboard.dismiss();
      setTodos([task, ...todos]);
      setTask(null);
    } else {
      Alert.alert("Empty task!", "Please enter a todo");
    }
  };

  const deleteTodo = (index) => {
    let itemsCopy = [...todos];
    itemsCopy.splice(index, 1);
    setTodos(itemsCopy);
  };
  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <View style={styles.titleSection}>
          <TouchableOpacity onPress={() => navigation.navigate("page")}>
            <Text style={styles.navigate}>Go to page 2</Text>
          </TouchableOpacity>
          <Text style={styles.title}> Todo List: </Text>
        </View>

        <View style={styles.todosSection}>
          <Todos todos={todos} delete={() => deleteTodo()} />
        </View>
      </View>
      
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => addTodo()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBAC9D",
  },
  todoContainer: {
    padding: 80,
    paddingHorizontal: 20,
  },
  titleSection: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  todosSection: {
    marginBottom: 200,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  navigate: {
    fontSize: 24,
    fontWeight: "700",
  },
});
