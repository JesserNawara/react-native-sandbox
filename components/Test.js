import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

export default function Test() {
  const [reactionOpen, setReactionOpen] = useState(false);

  // ________________________ OPEN REACTION BAR ANIMATION

  const likeAnimation = useRef(new Animated.Value(0)).current;
  const loveAnimation = useRef(new Animated.Value(0)).current;
  const hahaAnimation = useRef(new Animated.Value(0)).current;
  const wowAnimation = useRef(new Animated.Value(0)).current;
  const sadAnimation = useRef(new Animated.Value(0)).current;
  const angryAnimation = useRef(new Animated.Value(0)).current;

  const openReaction = () => {
    setReactionOpen(!reactionOpen);
    animateAngry();
    animateSad();
    animateWow();
    animateHaha();
    animateLove();
    animateLike();
  };


  const animateLike = () => {
    Animated.timing(likeAnimation, {
      toValue: reactionOpen ? 65 : 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };
  const animateLove = () => {
    Animated.timing(loveAnimation, {
      toValue: reactionOpen ? 175 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const animateHaha = () => {
    Animated.timing(hahaAnimation, {
      toValue: reactionOpen ? 285 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };
  const animateWow = () => {
    Animated.timing(wowAnimation, {
      toValue: reactionOpen ? 395 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const animateSad = () => {
    Animated.timing(sadAnimation, {
      toValue: reactionOpen ? 505 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const animateAngry = () => {
    Animated.timing(angryAnimation, {
      toValue: reactionOpen ? 615 : 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            openReaction()
          }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: "red",
            zIndex: 1,
          }}
        ></TouchableOpacity>
        <TouchableOpacity>
          <Animated.Image
            style={[
              styles.like,
              { transform: [{ translateX: likeAnimation }] },
            ]}
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637155096/thumps-up_ybyrwj.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Animated.Image
            style={[
              styles.love,
              { transform: [{ translateX: loveAnimation }] },
            ]}
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/love2_mucp8g.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Animated.Image
            style={[
              styles.haha,
              { transform: [{ translateX: hahaAnimation }] },
            ]}
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/haha2_luwryi.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Animated.Image
            style={[styles.wow, { transform: [{ translateX: wowAnimation }] }]}
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/wow2_stapqi.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Animated.Image
            style={[styles.sad, { transform: [{ translateX: sadAnimation }] }]}
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/sad2_ib2pfx.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Animated.Image
            style={[
              styles.angry,
              { transform: [{ translateX: angryAnimation }] },
            ]}
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154990/angry2_eqqqb6.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reaction: {
    width: 30,
    height: 30,
  },
  like: {
    height: 40,
    width: 40,
    right: 45,
  },
  love: {
    height: 40,
    width: 40,
    right: 145,
  },
  haha: {
    height: 40,
    width: 40,
    right: 245,
  },
  wow: {
    height: 40,
    width: 40,
    right: 345,
  },
  sad: {
    height: 40,
    width: 40,
    right: 445,
  },
  angry: {
    height: 40,
    width: 40,
    right: 545,
  },
});
