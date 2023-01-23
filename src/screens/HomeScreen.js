import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        <Text style={styles.headerTxt}>condição e objetivos</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("BottomTabScreens", {
              screen: "InfoScreen",
            })
          }
          style={styles.btn}
        >
          <Text style={styles.btnTxt}>alterar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#1a1a1a",
    alignItems: "center",
  },
  btn: {
    height: 40,
    backgroundColor: "#2562FF",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  btnTxt: {
    color: "#fff",
    textTransform: "capitalize",
  },
  infoWrapper: {
    backgroundColor: "rgba(51, 51, 51, 1)",
    width: "90%",
    borderRadius: 25,
    height: "70%",
    marginBottom: 40,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 8,
  },
  headerTxt: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
  },
  txt: {
    color: "#fff",
  },
});
