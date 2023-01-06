import styles from "./Styles";
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { TextInputMask } from "react-native-masked-text";

const ImcScreen = ({ navigation }) => {
  // STATES PARA SETAR PESO, ALTURA E ERRO
  const [error, setError] = useState(null);
  const [weight, setWeight] = useState();
  const [height, setHight] = useState();

  // FUNÇÃO PARA VALIDAR SE ELE COLOCOU AS INFOS
  const verifyBtn = () => {
    if (!weight) {
      setError("Coloque o peso.");
      return false;
    }
    if (!height) {
      setError("Coloque a altura.");
      return false;
    }
    return true;
  };

  // Calculo do IMC
  const imcCalc = (height, weight) => {
    const _height = height / 100;
    const imc = weight / (_height * _height);

    // Verifica se não é um número ou é Infinity

    if (isNaN(imc) || imc === Infinity) {
      return "";
    }

    // Resultados diferentes retornam cores diferentes
    let color = "white";
    if (imc < 18.5) {
      color = "#83c635";
    } else if (imc >= 18.5 && imc < 25) {
      color = "#c0d90b";
    } else if (imc >= 25 && imc < 30) {
      color = "#fca500";
    } else {
      color = "#f67600";
    }
    const imcValue = imc.toFixed(2);
    return <Text style={{ color: color }}>{imcValue}</Text>;
  };

  // NAVEGAR PROXIMA PAG

  const btnNext = () => {
    if (verifyBtn()) {
      setError(null);
      navigation.navigate("HomeScreen");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.generalWrapper}>
        <Text style={styles.txtHeader}>Quanto você pesa?</Text>
        <TextInputMask
          textAlign="center"
          style={styles.input}
          type="only-numbers"
          placeholder="70"
          value={weight}
          onChangeText={(text) => setWeight(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.generalWrapper}>
        <Text style={styles.txtHeader}>Qual a sua altura em cm?</Text>
        <TextInputMask
          textAlign="center"
          style={styles.input}
          type="only-numbers"
          placeholder="170"
          value={height}
          onChangeText={(text) => setHight(text)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.generalWrapper}>
        <Text style={{ color: "#fff", fontSize: 16 }}>
          Seu IMC é: {imcCalc(height, weight)}
        </Text>
      </View>

      <View style={styles.generalWrapper}>
        {error && <Text style={styles.error}>{error}</Text>}
        <TouchableOpacity style={styles.btn} onPress={() => btnNext()}>
          <Text style={styles.btnTxt}>próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImcScreen;
