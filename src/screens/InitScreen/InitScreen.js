import styles from "./Styles.js";
import { View, Text, TouchableOpacity, Image } from "react-native";
import logo from "../../../assets/logo.png";

const InitScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={logo} />
      </View>
      <View style={styles.formWrapper}>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={styles.btnTxt}
            onPress={() => navigation.navigate("RegisterScreen")}>
            quero me cadastrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.btnTxt}>sou cliente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InitScreen;
