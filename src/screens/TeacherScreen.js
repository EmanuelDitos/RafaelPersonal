import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const TeacherScreen = ({ route }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewContent}>
        <View style={styles.headerView}>
          <View style={styles.img}></View>
          <Text style={styles.txt}>
            Prof. blablablablabla{"\n"}Contato: 999999999
          </Text>
        </View>
        <View style={styles.divisor}></View>
        <View style={styles.bioView}>
          <Text style={styles.txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TeacherScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    flex: 1,
    paddingHorizontal: 20,
  },
  viewContent: {
    backgroundColor: "rgba(51, 51, 51, 1)",
    flex: 1,
    marginVertical: 20,
    borderRadius: 8,
  },
  headerView: {
    paddingHorizontal: 10,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  img: {
    backgroundColor: "#d9d9d9",
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  txt: {
    color: "#fff",
    fontSize: 18,
  },
  bioView: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  divisor: {
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: "#fff",
  },
});
