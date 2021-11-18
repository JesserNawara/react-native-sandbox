import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  PanResponder
} from "react-native";
import { set } from "react-native-reanimated";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function Post(props) {
  const [showReactions, setShowReactions] = useState(false);
  const [reaction, setReaction] = useState("")
  
 
  const likeAnimation = useRef(new Animated.Value(0)).current;
  const loveAnimation = useRef(new Animated.Value(0)).current;
  const hahaAnimation = useRef(new Animated.Value(0)).current;
  const wowAnimation = useRef(new Animated.Value(0)).current;
  const sadAnimation = useRef(new Animated.Value(0)).current;
  const angryAnimation = useRef(new Animated.Value(0)).current;
  const reactionAnimation = useRef(new Animated.Value(1)).current;
  const Emojyanimation = useRef(new Animated.Value(1)).current;

  const panResponder = React.useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) =>
        true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
        true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) =>
        true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      }
    })
  ).current;

  const animateLike = () => {
    Animated.timing(likeAnimation, {
      toValue: -20,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(likeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
    setReaction("like")
    setShowReactions(false)
    animateEmojy()
  };
  const animateLove = () => {
    Animated.timing(loveAnimation, {
      toValue: -20,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(loveAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
    setReaction("love")
    setShowReactions(false)
    animateEmojy()
  };
  const animateHaha = () => {
    Animated.timing(hahaAnimation, {
      toValue: -20,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(hahaAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
    setReaction("haha")
    setShowReactions(false)
    animateEmojy()
  };
  const animateWow = () => {
    Animated.timing(wowAnimation, {
      toValue: -20,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(wowAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
    setReaction("wow")
    setShowReactions(false)
    animateEmojy()
  };
  const animateSad = () => {
    Animated.timing(sadAnimation, {
      toValue: -20,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(sadAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
    setReaction("sad")
    setShowReactions(false)
    animateEmojy()
  };
  const animateAngry = () => {
    Animated.timing(angryAnimation, {
      toValue: -20,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(angryAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
    setReaction("angry")
    setShowReactions(false)
    animateEmojy()
  };
  const animateEmojy = () => {
    Animated.timing(Emojyanimation, {
      toValue: 1.2,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(Emojyanimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
  }
  const animateReaction = () => {
    Animated.timing(reactionAnimation, {
      toValue: 1.2,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(reactionAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleReaction = () => {
    if (reaction === "") {
      return (
        <Ionicons
          style={{ fontSize: 30, color: "#000" }}
          name="thumbs-up-outline"
        />
      );
    } else if (reaction === "like") {
      return (
        <Image
          source={{
            uri: "https://res.cloudinary.com/jessssss/image/upload/v1637155096/thumps-up_ybyrwj.png",
          }}
          style={styles.reaction}
        />
      );
    } else if (reaction === "love") {
      return (
        <Image
          source={{
            uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/love2_mucp8g.png",
          }}
          style={styles.reaction}
        />
      );
    } else if (reaction === "haha") {
      return (
        <Image
          source={{
            uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/haha2_luwryi.png",
          }}
          style={styles.reaction}
        />
      );
    } else if (reaction === "wow") {
      return (
        <Image
          source={{
            uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/wow2_stapqi.png",
          }}
          style={styles.reaction}
        />
      );
    } else if (reaction === "sad") {
      return (
        <Image
          source={{
            uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/sad2_ib2pfx.png",
          }}
          style={styles.reaction}
        />
      );
    } else if (reaction === "angry") {
      return (
        <Image
          source={{
            uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154990/angry2_eqqqb6.png",
          }}
          style={styles.reaction}
        />
      );
    }
  };
  const removeReaction = () => {
    if (reaction === "") {
      setReaction("like")
      animateEmojy()
      setShowReactions(false)
    } else {
      setReaction("")
      setShowReactions(false)
    }
  };

  const reactionBar = () => {
    if (showReactions) {
      return (
        <Animated.View
        style={[
          {
            height: 60,
            // width: 250,
            borderRadius: 20,
            backgroundColor: "#fff",
            elevation: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingHorizontal: 10,
            bottom: 55,
            right: 40
          },
          { scaleX: reactionAnimation, scaleY: reactionAnimation },
        ]}
      >
        <TouchableOpacity onPress={animateLike}>
          <Animated.Image
            style={[styles.btn, { transform: [{ translateY: likeAnimation }] }]}
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637155096/thumps-up_ybyrwj.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={animateLove}>
          <Animated.Image
            style={[styles.btn, { transform: [{ translateY: loveAnimation }] }]}
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/love2_mucp8g.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={animateHaha}>
          <Animated.Image
            style={[styles.btn, { transform: [{ translateY: hahaAnimation }] }]}
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/haha2_luwryi.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={animateWow}>
          <Animated.Image
            style={[styles.btn, { transform: [{ translateY: wowAnimation }] }]}
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/wow2_stapqi.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={animateSad}>
          <Animated.Image
            style={[styles.btn, { transform: [{ translateY: sadAnimation }] }]}
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154989/sad2_ib2pfx.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={animateAngry}>
          <Animated.Image
            style={[styles.btn, { transform: [{ translateY: angryAnimation }] }]}
            source={{
              uri: "https://res.cloudinary.com/jessssss/image/upload/v1637154990/angry2_eqqqb6.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowReactions(false)}
          style={{
            height: 20,
            width: 20,
            borderRadius: 50,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>X</Text>
        </TouchableOpacity>
      </Animated.View>
        )
    } else {
      return null;
    }
  };

  const touchStart = () => {
    setShowReactions(true);
    animateReaction();
  }
  const touchEnd = () => {
      setShowReactions(false);
  }

  return (
    <View
      style={{
        marginBottom: 40,
      }}
    >
      <Image
        source={{ uri: props.image }}
        style={{
          width: "100%",
          height: 300,
        }}
      />
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        {props.description}
      </Text>

      <View
        style={{
          height: 50,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 40,
        }}
      >
        <TouchableOpacity
          onPress={() => removeReaction()}
          onLongPress={() => {
            setShowReactions(true);
            animateReaction();
          }}
        // onTouchStart={touchStart}
        onTouchEnd={touchEnd}
          delayLongPress={200}
          style={[
            {
              justifyContent: "center",
              alignItems: "center",
            },
            { scaleX: Emojyanimation, scaleY: Emojyanimation },
          ]}
        >
            {handleReaction(props.reaction)}
        </TouchableOpacity>
        {reactionBar()}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
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
    </View>
  );
}

const styles = StyleSheet.create({
    reaction: {
        width: 30,
        height: 30,
      },
      btn: {
        height: 35,
        width: 35,
      },
});
