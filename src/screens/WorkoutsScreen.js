import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Training } from "../components";

const WorkoutsScreen = () => {
  return (
    <View style={styles.container}>
      <Training />
    </View>
  );
};

export default WorkoutsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 10,
    justifyContent: "space-around",
  },
});
