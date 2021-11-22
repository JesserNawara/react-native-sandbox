import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import Post from "./Post.js"; 

import POSTS from "../../data/Posts.js";

const { width, height } = Dimensions.get("screen");

export default function Test2() {

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingVertical: 50,
          height,
          width,
          borderRadius: 20,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          
          <FlatList
            data={POSTS}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }, index) => {
              return (
                <Post key={index} image={item.image} description={item.description} reaction={item.reaction} />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAF3ED",
  },
  btn: {
    height: 35,
    width: 35,
  },
  modal: {
    top: 200,
  },
  reaction: {
    width: 30,
    height: 30,
  },
});
