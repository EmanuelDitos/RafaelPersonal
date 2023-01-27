import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Training = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewContent}>
        <Text style={styles.txt}>Treino X</Text>
      </View>
      <View style={styles.viewContent}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>iniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Training;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(51, 51, 51, 1)",
    paddingHorizontal: 10,
    height: 75,
    borderRadius: 30,
    justifyContent: "space-around",
  },
  viewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "#fff",
    fontSize: 14,
  },
  btn: {
    backgroundColor: "#fff",
    height: 30,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  btnTxt: {
    textTransform: "uppercase",
  },
});
