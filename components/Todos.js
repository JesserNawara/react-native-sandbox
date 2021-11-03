import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Todos(props) {
  const [done, setDone] = useState(false);

  const toggle = () => {
    setDone(!done);
  };

  return (
    <View>
      <ScrollView>
        {props.todos.map((todo, key) => {
          return (
            <View key={key} style={styles.todo}>
              {!done ? (
                <TouchableOpacity
                  onPress={toggle}
                  style={styles.checkbox}
                ></TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={toggle}
                  style={styles.uncheckedBox}
                ></TouchableOpacity>
              )}
              <Text style={styles.text}>{todo}</Text>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => props.delete(key)}
              >
                <Text style={styles.deleteBtn}> X </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    backgroundColor: "#5c3640",
    margin: 15,
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  checkbox: {
    height: 20,
    width: 20,
    backgroundColor: "#cec2c5",
    marginRight: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
  uncheckedBox: {
    height: 20,
    width: 20,
    backgroundColor: "green",
    marginRight: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
    maxWidth: "80%",
  },
  deleteBtn: {
    color: "red",
    fontSize: 22,
    fontWeight: "700",
  },
  touch: {
    position: "absolute",
    right: 5,
    margin: 15,
  },
});
