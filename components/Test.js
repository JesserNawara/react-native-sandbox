import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Animated,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

export default function Second() {
  const navigation = useNavigation();

  const buttonAnimation = useRef(new Animated.Value(70)).current;
  const [selectedScreen, setSelectedScreen] = useState("home");

  const animateBtn = () => {
    Animated.timing(buttonAnimation, {
      toValue: 100,
      duration: 300,
      // useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000
    }).start();
  };

  const tabColor = (screen) => {
    setSelectedScreen(screen);
    // navigation.navigate(screen)
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FAF3ED",
      }}
    >
      <View
        style={[
          {
            position: "absolute",
            bottom: 0,
            width,
            height: 160,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <TouchableOpacity onPress={()=>{
        console.log("test");}}>
          <Animated.View 
          // style={[styles.buttonz, { height: buttonAnimation, width: buttonAnimation }]}
          style={{
            height:70,
            width:70,
            borderRadius: 50,
            bottom: 30,
            backgroundColor: "#000",
            justifyContent: "center",
            // zIndex: 1,
          }}
          >
            <Ionicons
              style={{ fontSize: 45, color: "#fff", marginHorizontal: 10, zIndex: -1 }}
              name="cart-outline"
            />
          </Animated.View>
        </TouchableOpacity>


        <Image
          source={{
            uri: "https://res.cloudinary.com/djsfdhzsd/image/upload/v1636988786/Group_9814_1_vafo2k.png",
          }}
          style={{
            width: width - 30,
            height: 100,
            borderRadius: 30,
            position: "absolute",
          }}
        />
        <View
          style={{
            width,
            flexDirection: "row",
            justifyContent: "space-around",
            position: "absolute",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              right: 15,
            }}
          >
            <TouchableOpacity onPress={() => tabColor("home")}>
              <Image
                source={
                  selectedScreen === "home"
                    ? {
                        uri: "https://res.cloudinary.com/jessssss/image/upload/v1637067156/Group_9844_sw7a0v.png",
                      }
                    : {
                        uri: "https://res.cloudinary.com/jessssss/image/upload/v1637067156/Group_9843_gy70rj.png",
                      }
                }
                style={{
                  height: 50,
                  width: 50,
                  marginHorizontal: 10,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => tabColor("parfums")}>
              <Image
                source={
                  selectedScreen === "parfums"
                    ? {
                        uri: "https://res.cloudinary.com/jessssss/image/upload/v1637067130/Group_9845_1_od9epz.png",
                      }
                    : {
                        uri: "https://res.cloudinary.com/jessssss/image/upload/v1637067130/Group_9821_1_gtb6yi.png",
                      }
                }
                style={{
                  height: 50,
                  width: 50,
                  marginHorizontal: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              left: 15,
            }}
          >
            <TouchableOpacity onPress={() => tabColor("magic")}>
              <Image
                source={
                  selectedScreen === "magic"
                    ? {
                        uri: "https://res.cloudinary.com/jessssss/image/upload/v1637069757/Group_9869_1_wglvxx.png",
                      }
                    : {
                        uri: "https://res.cloudinary.com/jessssss/image/upload/v1637069756/Group_9869_e9svm2.png",
                      }
                }
                style={{
                  height: 50,
                  width: 50,
                  marginHorizontal: 5,
                  bottom: 4,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => tabColor("heart")}>
              <Image
                source={
                  selectedScreen === "heart"
                    ? {
                        uri: "https://res.cloudinary.com/jessssss/image/upload/v1637068391/Group_9867_yayqwn.png",
                      }
                    : {
                        uri: "https://res.cloudinary.com/jessssss/image/upload/v1637068251/Group_9866_wr0z2i.png",
                      }
                }
                style={{
                  height: 50,
                  width: 50,
                  marginHorizontal: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonz: {
    height:100,
    width:100,
    borderRadius: 50,
    bottom: 30,
    backgroundColor: "#000",
    justifyContent: "center",
    zIndex: 1,
  },
});

{
  /* <View
      // ------------------------------------- Button Container
        style={{
          width: 90,
          height: 80,
          top: 16,
          borderRadius: 100,
          backgroundColor: "#A0A0A0",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <TouchableOpacity>
          <View
          // ----------------------------------- Button 
            style={{
              width: 60,
              height: 60,
              backgroundColor: "green",
              borderRadius: 50,
              justifyContent: "center",
            }}
          >
            <Text style={{
              alignSelf: "center",
              fontSize: 40,
              fontFamily: "serif"
            }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          bottom: 40,
          height: 100,
          width: width - 40,
          borderRadius: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          // ---------------------------- Left Piece
          style={{
            height: "100%",
            flex: 0.5,
            backgroundColor: "#fff",
            borderBottomLeftRadius: 40,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 90,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Ionicons
              style={{ fontSize: 45, color: "#000" }}
              name="arrow-back-outline"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={{ fontSize: 45, color: "#000", marginHorizontal: 20 }}
              name="add-circle-outline"
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: "50%",
            flex: 0.1,
            backgroundColor: "#fff",
            alignSelf: "flex-end",
            transform: [{ scaleX: 2 }],
            bottom: 0.5,
          }}
        ></View>

        <View
          // --------------------------------- Right Piece
          style={{
            height: "100%",
            flex: 0.5,
            backgroundColor: "#fff",
            borderBottomRightRadius: 40,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 90,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Ionicons
              style={{ fontSize: 45, color: "#000", marginHorizontal: 10 }}
              name="home-outline"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={{ fontSize: 45, color: "#000", marginHorizontal: 10 }}
              name="arrow-forward-outline"
            />
          </TouchableOpacity>
        </View>
      </View> */
}
