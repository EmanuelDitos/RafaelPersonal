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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/Firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [generalError, setGeneralError] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [visible, setIsVisible] = useState(false);

  const validate = () => {
    if (!email) {
      setGeneralError("Insira um email!");
      return false;
    }
    if (!password) {
      setGeneralError("Insira uma senha!");
    }
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      setGeneralError("O formato do email é inválido.");
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    setGeneralError(null);
    if (validate()) {
      setIsVisible(true);
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setLoginError(false); // Signed in
          setIsVisible(false);
          const user = userCredential.user;
          console.log(user);
          console.log("LOGADO");
        })
        .catch((error) => {
          setLoginError(true);
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);

          switch (errorCode) {
            case "auth/user-not-found":
              setIsVisible(false);
              setLoginError("Usuário inválido!");
              break;
            case "auth/wrong-password":
              setIsVisible(false);
              setLoginError("Usuário ou senha incorretos.");
              break;
            default:
              setIsVisible(false);
              setLoginError("Usuário ou senha incorretos.");
              break;
          }
        });
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <LoadingScreen visible={visible} />
      <SafeAreaView>
        <View style={styles.imgWrapper}>
          <Image style={styles.img} source={logo} />
          <Text style={styles.defaultTxt}>entrar</Text>
        </View>
        <View style={styles.inputWrapper}>
          <Input
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
            secureTextEntry={hidePass}
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
          <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
            {hidePass ? (
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
        {loginError && <Text style={styles.error}>{loginError}</Text>}
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={styles.btn} onPress={() => handleLogin()}>
            <Text style={styles.btnTxt}>entrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.loginTxt}>Ou, fazer cadastro</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
