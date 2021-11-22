import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import {
  useFonts,
  Poppins_900Black,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const { width, height } = Dimensions.get("screen");

export default function Post(props) {
  let [fontsLoaded] = useFonts({
    Poppins_900Black,
    Poppins_400Regular,
    Poppins_700Bold,
  });
  const [reactionOpen, setReactionOpen] = useState(false); // Open reaction drawer
  const [reaction, setReaction] = useState(""); // change reaction

  // open reaction drawer function
  const openReaction = () => {
    setReactionOpen(!reactionOpen);
    animateAngry();
    animateSad();
    animateWow();
    animateHaha();
    animateLove();
    animateLike();
  };

  // Animations
  const likeAnimation = useRef(new Animated.Value(0)).current;
  const loveAnimation = useRef(new Animated.Value(0)).current;
  const hahaAnimation = useRef(new Animated.Value(0)).current;
  const wowAnimation = useRef(new Animated.Value(0)).current;
  const sadAnimation = useRef(new Animated.Value(0)).current;
  const angryAnimation = useRef(new Animated.Value(0)).current;


  const animateLike = () => {
    Animated.timing(likeAnimation, {
      toValue: reactionOpen ? 50 : 0,
      duration: reactionOpen ? 600 : 100,
      useNativeDriver: true,
    }).start();
  };
  const animateLove = () => {
    Animated.timing(loveAnimation, {
      toValue: reactionOpen ? 100 : 0,
      duration: reactionOpen ? 500 : 200,
      useNativeDriver: true,
    }).start();
  };
  const animateHaha = () => {
    Animated.timing(hahaAnimation, {
      toValue: reactionOpen ? 150 : 0,
      duration: reactionOpen ? 400 : 300,
      useNativeDriver: true,
    }).start();
  };
  const animateWow = () => {
    Animated.timing(wowAnimation, {
      toValue: reactionOpen ? 200 : 0,
      duration: reactionOpen ? 300 : 400,
      useNativeDriver: true,
    }).start();
  };
  const animateSad = () => {
    Animated.timing(sadAnimation, {
      toValue: reactionOpen ? 250 : 0,
      duration: reactionOpen ? 200 : 500,
      useNativeDriver: true,
    }).start();
  };
  const animateAngry = () => {
    Animated.timing(angryAnimation, {
      toValue: reactionOpen ? 300 : 0,
      duration: reactionOpen ? 100 : 600,
      useNativeDriver: true,
    }).start();
  };

  // change current reaction function
  const handleReaction = () => {
    if (reaction === "") {
      return (
        fontsLoaded && (
          <Text style={{ fontFamily: "Poppins_400Regular" }}> J'aime</Text>
        )
      );
    } else if (reaction === "like") {
      return (
        <View style={styles.reactBox}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637155096/thumps-up_ybyrwj.png",
            }}
            style={styles.smallReact}
            />
            {fontsLoaded && (
              <Text style={{ fontFamily: "Poppins_400Regular" }}> J'aime </Text>
            )}
        </View>
      );
    } else if (reaction === "love") {
      return (
        <View style={styles.reactBox}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/love2_mucp8g.png",
            }}
            style={styles.smallReact}
          />
          {fontsLoaded && (
            <Text style={{ fontFamily: "Poppins_400Regular" }}> Love </Text>
          )}
        </View>
      );
    } else if (reaction === "haha") {
      return (
        <View style={styles.reactBox}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/haha2_luwryi.png",
            }}
            style={styles.smallReact}
          />
          {fontsLoaded && (
            <Text style={{ fontFamily: "Poppins_400Regular" }}> Haha </Text>
          )}
        </View>
      );
    } else if (reaction === "wow") {
      return (
        <View style={styles.reactBox}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/wow2_stapqi.png",
            }}
            style={styles.smallReact}
          />
          {fontsLoaded && (
            <Text style={{ fontFamily: "Poppins_400Regular" }}> Wow </Text>
          )}
        </View>
      );
    } else if (reaction === "sad") {
      return (
        <View style={styles.reactBox}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/sad2_ib2pfx.png",
            }}
            style={styles.smallReact}
          />
          {fontsLoaded && (
            <Text style={{ fontFamily: "Poppins_400Regular" }}> Sad </Text>
          )}
        </View>
      );
    } else if (reaction === "angry") {
      return (
        <View style={styles.reactBox}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154990/angry2_eqqqb6.png",
            }}
            style={styles.smallReact}
          />
          {fontsLoaded && (
            <Text style={{ fontFamily: "Poppins_400Regular" }}> Angry </Text>
          )}
        </View>
      );
    }
  };

  // select reaction 
  const selectReaction = (reacti) => {
    setReaction(reacti);
    openReaction();
  };

  // handle onPress current reaction
  const likeButon = () => {
    if (reaction === "") {
      setReaction("like");
    } else {
      setReaction("");
      openReaction()
    }
  };

  return (
    <View
      style={{
        marginBottom: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: props.image }}
        style={{
          width: "100%",
          height: 300,
        }}
      />
      <View
        style={{
          height: 50,
          width,
          flexDirection: "row",
          flex: 1,
        }}
        >
        {/* Left section: current reaction */}
        <View
          style={{
            height: "60%",
            flex: 0.3,
            backgroundColor: "#fff",
            borderRightWidth: 1,
            borderRightColor: "grey",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            onLongPress={() => openReaction()}
            delayLongPress={100}
            onPress={() => likeButon()}
          >
            {handleReaction()}
          </TouchableOpacity>
        </View>

        {/* Middle section: reaction drawer section */}
        <View
          style={{
            flex: 0.7,
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginLeft:5,
            zIndex: -1,
          }}
        >
          <Animated.View
            style={[
              {
                height: 30,
                width: 30,
                right: 50,
                justifyContent: "center",
                alignItems: "center",
              },
              { transform: [{ translateX: likeAnimation }] },
            ]}
          >
            <TouchableOpacity onPress={() => selectReaction("like")}>
              <Image
                style={styles.img}
                source={{
                  uri: "https://res.cloudinary.com/jessssss/image/upload/v1637155096/thumps-up_ybyrwj.png",
                }}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[
              {
                height: 30,
                width: 30,
                right: 90,
                justifyContent: "center",
                alignItems: "center",
              },
              { transform: [{ translateX: loveAnimation }] },
            ]}
          >
            <TouchableOpacity onPress={() => selectReaction("love")}>
              <Image
                style={styles.img}
                source={{
                  uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/love2_mucp8g.png",
                }}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[
              {
                height: 30,
                width: 30,
                right: 130,
                justifyContent: "center",
                alignItems: "center",
              },
              { transform: [{ translateX: hahaAnimation }] },
            ]}
          >
            <TouchableOpacity onPress={() => selectReaction("haha")}>
              <Image
                style={styles.img}
                source={{
                  uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/haha2_luwryi.png",
                }}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[
              {
                height: 30,
                width: 30,
                right: 170,
                justifyContent: "center",
                alignItems: "center",
              },
              { transform: [{ translateX: wowAnimation }] },
            ]}
          >
            <TouchableOpacity onPress={() => selectReaction("wow")}>
              <Image
                style={styles.img}
                source={{
                  uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/wow2_stapqi.png",
                }}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[
              {
                height: 30,
                width: 30,
                right: 210,
                justifyContent: "center",
                alignItems: "center",
              },
              { transform: [{ translateX: sadAnimation }] },
            ]}
          >
            <TouchableOpacity onPress={() => selectReaction("sad")}>
              <Image
                style={styles.img}
                source={{
                  uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/sad2_ib2pfx.png",
                }}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[
              {
                height: 30,
                width: 30,
                right: 250,
                justifyContent: "center",
                alignItems: "center",
              },
              { transform: [{ translateX: angryAnimation }] },
            ]}
          >
            <TouchableOpacity onPress={() => selectReaction("angry")}>
              <Image
                style={styles.img}
                source={{
                  uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154990/angry2_eqqqb6.png",
                }}
              />
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* Right section: number of reactions */}
        <View
          style={{
            height: "100%",
            flex: 0.3,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              marginRight: 5,
            }}
          >
            345
          </Text>
          <Image
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637155096/thumps-up_ybyrwj.png",
            }}
            style={{
              height: 15,
              width: 15,
            }}
          />
          <Image
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/love2_mucp8g.png",
            }}
            style={{
              height: 15,
              width: 15,
            }}
          />
        </View>

      </View>
      <Text
        style={{
          marginHorizontal: 10,
          marginBottom: 10,
        }}
      >
        {props.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emojy: {
    width: 40,
    height: 40,
  },
  reactBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  smallReact: {
    height: 25,
    width: 25,
    marginRight: 5,
    bottom: 2
  },
  img: {
    width: 25,
    height: 25,
  },
});
