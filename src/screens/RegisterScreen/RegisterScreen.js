import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import logo from "../../../assets/logo.png";
import styles from "./Styles";
import { Input, LoadingScreen } from "../../components";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db, app } from "../../firebase/Firebase";

import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [viewPass, setViewPass] = useState(true);
  const [generalError, setGeneralError] = useState(null);
  const [visible, setVisible] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const validate = () => {
    if (!email) {
      setGeneralError("Insira um email!");
      return false;
    }
    if (!name) {
      setGeneralError("Insira seu nome completo!");
      return false;
    }
    if (!password) {
      setGeneralError("Insira uma senha!");
      return false;
    }
    if (password.length < 6) {
      setGeneralError("Insira uma senha com pelo menos 6 caracteres!");
      return false;
    }
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      setGeneralError("O formato do email é inválido.");
      return false;
    }
    return true;
  };

  const firebaseAdd = async (user) => {
    const data = {
      userId: user.uid,
      nome: name,
      email: email,
      treinos: {},
    };
    await setDoc(doc(db, "users", name), data);
  };

  const handleSubmit = async () => {
    setGeneralError(null);
    if (validate()) {
      setVisible(true);
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          firebaseAdd(user);
          setVisible(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          switch (errorCode) {
            case "auth/email-already-in-use":
              setVisible(false);
              setRegisterError("Email em uso.");
              break;
          }
        });
      navigation.navigate("GenderScreen");
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <LoadingScreen visible={visible} />
      <SafeAreaView>
        <View style={styles.imgWrapper}>
          <Image style={styles.img} source={logo} />
          <Text style={styles.defaultTxt}>cadastro</Text>
        </View>
        <View style={styles.inputWrapper}>
          <Input
            autoCapitalize="none"
            secureTextEntry={false}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
          />
          <MaterialCommunityIcons
            style={styles.icon}
            name="email"
            size={22}
            color="black"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Input
            autoCapitalize="words"
            onChangeText={(text) => setName(text)}
            secureTextEntry={false}
            value={name}
            placeholder="Nome Completo"
          />

          <MaterialCommunityIcons
            name="account"
            style={styles.icon}
            size={22}
            color="black"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Input
            autoCapitalize="none"
            secureTextEntry={viewPass}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Senha"
          />

          <MaterialCommunityIcons
            style={styles.icon}
            name="lock"
            size={22}
            color="black"
          />
          <TouchableOpacity onPress={() => setViewPass(!viewPass)}>
            {viewPass ? (
              <MaterialCommunityIcons
                style={styles.iconL}
                name="eye"
                size={22}
                color="black"
              />
            ) : (
              <MaterialCommunityIcons
                style={styles.iconL}
                name="eye-off"
                size={22}
                color="black"
              />
            )}
          </TouchableOpacity>
        </View>
        {generalError && <Text style={styles.error}>{generalError}</Text>}
        {registerError && <Text style={styles.error}>{registerError}</Text>}
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()}>
            <Text style={styles.btnTxt}>próximo</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.loginTxt}>Ou, entre aqui</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
