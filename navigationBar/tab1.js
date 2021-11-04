import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-ico-material-design";

const { width } = Dimensions.get("window");
const height = width * 1.2;

export default function First() {
  const images = [
    "https://images.pexels.com/photos/2411688/pexels-photo-2411688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/10025314/pexels-photo-10025314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3389817/pexels-photo-3389817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3289156/pexels-photo-3289156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ];

  const [active, setActive] = useState(0);

  const changeImage = ({nativeEvent}) => {
    const slide = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    setTimeout(() =>
    setActive(slide), 200
    )
  }

  return (
    <View>
        <ScrollView>
      <ScrollView style={styles.carousel} horizontal pagingEnabled onScroll={changeImage} showsHorizontalScrollIndicator={false} >
        {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} resizeMode="center"/>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((image, index) => (
            <Text
            key={index}
            style={index === active ? styles.activeIndicator : styles.indicator}
            >
            ⬤
          </Text>
        ))}
      </View>
      
      <View>
      {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    carousel: {
        backgroundColor:"#e1c8c8"
    },
  image: {
    width: width,
    height: height,
    marginBottom: 50,
    position: "relative",
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 50,

  },
  indicator: {
    color: "red",
    fontSize: 24,
    margin: 3,
    zIndex:1
  },
  activeIndicator: {
    color: "white",
    fontSize: 26,
  },

});
