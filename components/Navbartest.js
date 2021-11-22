import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Animated,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import normalize from "react-native-normalize";
import { Badge } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("screen");

export default function Navbartest() {
  const navigation = useNavigation();

  const buttonAnimation = useRef(new Animated.Value(0)).current;
  const icon1Animation = useRef(new Animated.Value(1)).current;
  const icon2Animation = useRef(new Animated.Value(1)).current;
  const icon3Animation = useRef(new Animated.Value(1)).current;
  const icon4Animation = useRef(new Animated.Value(1)).current;

  const cartAlert = () => {
    if (shoppingCart === 0) {
      return null;
    } else {
      return (
        <Badge
          style={{
            alignSelf: "flex-end",
            backgroundColor: "red",
            top: normalize(-15, "height"),
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {shoppingCart}
          </Text>
        </Badge>
      );
    }
  };

  const [selectedScreen, setSelectedScreen] = useState("home");
  const [shoppingCart, setShoppingCart] = useState(0);

  const animateBtn = () => {
    Animated.timing(buttonAnimation, {
      toValue: -30,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(buttonAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const animateIcon1 = () => {
    Animated.timing(icon1Animation, {
      toValue: 1.35,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(icon1Animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const animateIcon2 = () => {
    Animated.timing(icon2Animation, {
      toValue: 1.35,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(icon2Animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const animateIcon3 = () => {
    Animated.timing(icon3Animation, {
      toValue: 1.35,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(icon3Animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const animateIcon4 = () => {
    Animated.timing(icon4Animation, {
      toValue: 1.35,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(icon4Animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const tabColor = (screen) => {
    setSelectedScreen(screen);
    // navigation.navigate(screen)
  };

  const addTocart = () => {
    setShoppingCart(shoppingCart + 1);
    animateBtn();
  };

  const deleteFromCart = () => {
    shoppingCart === 0 ? alert("its empty") : setShoppingCart(shoppingCart - 1);
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
        style={{
          height: 100,
          width,
          flexDirection: "row",
          justifyContent: "space-around",
          top: 150,
        }}
        >
        <TouchableOpacity
          onPress={addTocart}
          style={{
            height: 50,
            width: 70,
            borderRadius: 40,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "#fff",
            }}
          >
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={deleteFromCart}
          style={{
            height: 50,
            width: 70,
            borderRadius: 40,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "#fff",
            }}
          >
            -
          </Text>
        </TouchableOpacity>
      </View>
      <Text>{shoppingCart}</Text>

      <View onTouchStart={()=> addTocart()} onTouchEnd={()=> setShoppingCart(0) }
      style={{
        width: 100,
        height: 100,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        <Text>test</Text>
      </View>

      <View
        style={[
          {
            flex: 1,
            justifyContent: "flex-end",

            width,
            height: 160,
            alignItems: "center",
            marginBottom: normalize(10),
          },
        ]}
      >
        <Animated.View style={[styles.btn, { translateY: buttonAnimation }]}>
          <TouchableOpacity
            onPress={animateBtn}
            style={{
              height: width > 765 ? 90 : 60,
              width: width > 765 ? 90 : 60,
              backgroundColor: "#000",
              borderRadius: 50,
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            {cartAlert()}

            <Ionicons
              style={{
                fontSize: hp("4%"),
                color: "#fff",
                alignSelf: "center",
                position: "absolute",
              }}
              name="cart-outline"
            />
          </TouchableOpacity>
        </Animated.View>

        <ImageBackground
          source={{
            uri: "https://res.cloudinary.com/djsfdhzsd/image/upload/v1636988786/Group_9814_1_vafo2k.png",
          }}
          style={{
            width: width - 30,
            height: 100,
            borderRadius: 30,
            position: "absolute",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Animated.View
              style={{
                left: normalize(13),
                transform: [
                  { scaleY: icon1Animation },
                  { scaleX: icon1Animation },
                ],
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  tabColor("home");
                  animateIcon1();
                }}
              >
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
                    height: normalize(37, "height"),
                    width: normalize(37, "width"),
                    marginHorizontal: normalize(10),
                  }}
                />
                <Text style={styles.text}>Home</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={{
                right: normalize(18),
                transform: [
                  { scaleY: icon2Animation },
                  { scaleX: icon2Animation },
                ],
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  tabColor("parfums");
                  animateIcon2();
                }}
              >
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
                    height: normalize(37, "height"),
                    width: normalize(37, "width"),
                    marginHorizontal: normalize(10),
                  }}
                />
                <Text style={styles.text}>Parfums</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={{
                left: normalize(25),
                transform: [
                  { scaleY: icon3Animation },
                  { scaleX: icon3Animation },
                ],
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  tabColor("magic");
                  animateIcon3();
                }}
              >
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
                    height: normalize(37, "height"),
                    width: normalize(37, "width"),
                    marginHorizontal: normalize(10),
                  }}
                />
                <Text style={styles.text}>Magic</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={{
                right: normalize(15),
                transform: [
                  { scaleY: icon4Animation },
                  { scaleX: icon4Animation },
                ],
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  tabColor("heart");
                  animateIcon4();
                }}
              >
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
                    height: normalize(37, "height"),
                    width: normalize(37, "width"),
                    marginHorizontal: normalize(10),
                  }}
                />
                <Text style={styles.text}>Heart</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    zIndex: 1,
    bottom: 50,
  },
  icon: {
    justifyContent: "center",
    height: 80,
  },
  text: {
    bottom: 2,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 10,
    fontFamily: "serif",
    fontWeight: "500",
    color: "#8A624E",
  },
});

// const animateIcon1 = () => {
//   Animated.timing(icon1Animation, {
//     toValue: 30,
//     duration: 300,
//     useNativeDriver: true,
//   }).start(() => {
//     Animated.timing(icon1Animation, {
//       toValue: 0,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   });
// }

// const animateIcon3 = () => {
//   Animated.timing(icon3Animation, {
//     toValue: -1,
//     duration: 800,
//     useNativeDriver: true,
//   }).start(() => {
//     icon3Animation.setValue(0);
//   });
// }

// const interpolateRotating = icon3Animation.interpolate({
//   inputRange: [0, 1],
//   outputRange: ['0deg', '360deg'],
// });

// const animatedStyle = {
//   transform: [
//     {
//       rotate: interpolateRotating,
//     },
//   ],
// };
