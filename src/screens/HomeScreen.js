import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/Firebase";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

const HomeScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({});

  let user = getAuth().currentUser;
  let userID = user.uid;

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", userID), (doc) => {
      setUserData(doc.data());
    });
    return () => unsub();
  }, [userID]);

  return (
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        <Text style={styles.headerTxt}>condição e objetivos</Text>
        <Text style={styles.txtInfo}>Objetivo: {userData.objetivo}</Text>
        <Text style={styles.txtInfo}>Horário: {userData.hora}</Text>
        <Text style={styles.txtInfo}>Peso: {userData.peso}</Text>
        <Text style={styles.txtInfo}>Altura: {userData.altura}</Text>
        <Text style={styles.txtInfo}>Imc: {userData.imc}</Text>
        <Text style={styles.txtInfo}></Text>
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
    height: "90%",
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 8,
  },
  headerTxt: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
  },
  txtInfo: {
    color: "#fff",
    fontSize: 18,
  },
});
