import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {};
  return (
    <View style={styles.btnOutterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#d1d8e0" }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnOutterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: "#EFF2F5",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  btnText: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
