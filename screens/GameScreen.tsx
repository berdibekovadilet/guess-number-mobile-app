import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.text500,
    padding: 12,
    borderWidth: 2,
    borderColor: Colors.text500,
  },
});

export default GameScreen;
