import React, { Children } from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#15202B",
    padding: 12,
    borderWidth: 2,
    borderColor: "#15202B",
  },
});

export default Title;
