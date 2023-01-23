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
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useForm, Controller } from "react-hook-form";
import { Feather } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { db } from "../firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { LoadingScreen } from "../components";

// criando schema de validação do yup.
const schema = yup.object({
  email: yup
    .string()
    .email("Informe um email válido.")
    .required("Informe seu email."),
  username: yup.string().required("Informe seu nome."),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 digitos.")
    .required("Informe sua senha."),
});

const AuthRegister = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [visiblePass, setVisiblePass] = useState(true);

  // useform react-hook-forms passando schema de validação do yup
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Função para adicionar o usuário no firebase
  const firebaseAdd = async (user, data) => {
    const database = {
      userId: user.uid,
      nome: data.username,
      email: data.email,
      treinos: {},
    };
    await setDoc(doc(db, "users", user.uid), database);
  };

  //console.log(errors);
  const onSubmit = (data) => {
    //console.log(data);

    setLoading(true);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        //console.log("Criado");
        const user = userCredential.user;

        firebaseAdd(user, data);

        setLoading(false);

        navigation.navigate("BottomTabNavigator", {
          screen: "Home",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorCode) {
          case "auth/email-already-in-use":
            setLoading(false);
            Alert.alert("Email já está em uso.");
            break;
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* LoadingScreen  */}
      <LoadingScreen visible={loading} />
      <Image source={logo} style={styles.img} />
      <View style={{ alignSelf: "flex-end", width: "95%" }}>
        <Text style={styles.txt}>Cadastre-se</Text>
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

      {/* Campo de input do nome */}
      <Controller
        name="username"
        control={control}
        render={({ field: { value, onChange } }) => (
          <View style={styles.formWrapper}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#000"
              placeholder="Nome Completo"
              value={value}
              onChangeText={onChange}
              autoCapitalize="none"
            />
            <Feather name="user" size={20} color="black" style={styles.icon} />
          </View>
        )}
      />
      {/* Mensagem de erro do nome */}
      {errors.username && (
        <Text style={styles.error}>{errors.username?.message}</Text>
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

      {/* Mensagens de erros da senha */}
      {errors.password && (
        <Text style={styles.error}>{errors.password?.message}</Text>
      )}

      {/* Botões de registro e "Ou, entre aqui" */}
      <View style={styles.viewBtn}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.btnRegister}
        >
          <Text style={styles.txtBtn}>registrar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("AuthLogin")}>
        <Text style={{ color: "#fff", marginTop: 10 }}>Ou, entre aqui</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AuthRegister;

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
  error: {
    color: "red",
    alignSelf: "center",
    marginTop: 2,
  },
  lIcon: {
    position: "absolute",
    right: 30,
    bottom: 10,
  },
});
