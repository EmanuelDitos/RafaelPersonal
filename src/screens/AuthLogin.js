import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import logo from "../../assets/logo.png";
import { useForm, Controller } from "react-hook-form";
import { Feather } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import { LoadingScreen } from "../components";
import React, { useState } from "react";

// criando schema de validação do yup.
const schema = yup.object({
  email: yup
    .string()
    .email("Informe um email válido.")
    .required("Informe seu email."),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 digitos.")
    .required("Informe sua senha."),
});

const AuthLogin = ({ navigation }) => {
  const errorCodes = {
    "auth/user-not-found": "Usuário não cadastrado.",
    "auth/wrong-password": "Senha incorreta.",
    "auth/wrong-email": "Email incorreto.",
  };
  const [loading, setLoading] = useState(false);
  const [visiblePass, setVisiblePass] = useState(true);

  // useform react-hook-forms passando schema de validação do yup.
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //console.log(errors);
  const onSubmit = async (data) => {
    //console.log(data);
    // Função para fazer auth (login) do firebase.
    try {
      setLoading(true);
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigation.navigate("BottomTabNavigator", {
        screen: "Home",
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = errorCodes[errorCode] || "Erro desconhecido.";
      Alert.alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Verificando se o usuário está logado, se estiver vai para a rota das bottom tabs.
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // Navegando para as bottomsbars.
        navigation.navigate("BottomTabNavigator", {
          screen: "Home",
        });
        // ...
      } else {
        // User deslogado
      }
    });
    // limpar função
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* LoadingScreen */}
      <LoadingScreen visible={loading} />
      <Image source={logo} style={styles.img} />
      <View style={{ alignSelf: "flex-end", width: "95%" }}>
        <Text style={styles.txt}>Entre</Text>
      </View>

      {/* Campo de input do email */}
      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <View style={styles.formWrapper}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#000"
              placeholder="Email"
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
            />
            <Feather name="mail" size={20} color="black" style={styles.icon} />
          </View>
        )}
      />

      {/* Mensagem de erro do email */}
      {errors.email && (
        <Text style={styles.error}>{errors.email?.message}</Text>
      )}

      {/* Campo de input da senha */}
      <Controller
        name="password"
        control={control}
        render={({ field: { value, onChange } }) => (
          <View style={styles.formWrapper}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#000"
              placeholder="Senha"
              value={value}
              onChangeText={onChange}
              secureTextEntry={visiblePass}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.lIcon}
              onPress={() => setVisiblePass(!visiblePass)}
            >
              {visiblePass ? (
                <Feather name="eye-off" size={20} color="black" />
              ) : (
                <Feather name="eye" size={20} color="black" />
              )}
            </TouchableOpacity>
            <Feather name="lock" size={20} color="black" style={styles.icon} />
          </View>
        )}
      />

      {/* Mensagem de erro da senha */}
      {errors.password && (
        <Text style={styles.error}>{errors.password?.message}</Text>
      )}

      {/* Botão de esqueceu os dados para recuperação */}
      <TouchableOpacity style={{ alignSelf: "flex-end", width: "95%" }}>
        <Text style={{ color: "red", marginTop: 10 }}>Esqueçeu os dados?</Text>
      </TouchableOpacity>

      {/* Botões de entrar ou fazer cadastro */}
      <View style={styles.viewBtn}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.btnRegister}
        >
          <Text style={styles.txtBtn}>entrar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("AuthRegister")}>
        <Text style={{ color: "#fff", marginTop: 10 }}>Ou, faça cadastro </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AuthLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: 150,
  },
  formWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#d9d9d9",
    width: "90%",
    marginTop: 10,
    height: 40,
    paddingLeft: 40,
    borderRadius: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  txt: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 30,
  },
  viewBtn: {
    flexDirection: "row",
    marginTop: 10,
    width: "90%",
  },
  btnRegister: {
    width: "100%",
    backgroundColor: "#2562FF",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  txtBtn: {
    color: "#fff",
    fontSize: 15,
    textTransform: "uppercase",
  },
  icon: {
    position: "absolute",
    left: 30,
    bottom: 10,
  },
  lIcon: {
    position: "absolute",
    right: 30,
    bottom: 10,
  },
  error: {
    color: "red",
    alignSelf: "flex-end",
    marginTop: 2,
    width: "95%",
  },
});
