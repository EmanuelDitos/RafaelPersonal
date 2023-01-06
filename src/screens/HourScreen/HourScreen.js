import styles from "./Styles";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CustomButton from "../../components/CustomButton";

const HourScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState(null);
  const [text, setText] = useState(null);

  const handlePress = (category) => {
    setSelectedCategory(category);
    setText(category);
  };

  const verifyBtn = () => {
    if (!selectedCategory) {
      setError("Selecione um botão.");
      return false;
    }
    return true;
  };

  const btnNext = () => {
    if (verifyBtn()) {
      setError(null);
      navigation.navigate("ImcScreen");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.generalWrapper}>
        <Text style={styles.txtHeader}>Qual seu horário de treino?</Text>
      </View>
      <View style={styles.btnWrapper}>
        <CustomButton
          category="Manhã"
          isSelected={selectedCategory === "Manhã"}
          onPress={handlePress}
        />
        <CustomButton
          category="Tarde"
          isSelected={selectedCategory === "Tarde"}
          onPress={handlePress}
        />
        <CustomButton
          category="Noite"
          isSelected={selectedCategory === "Noite"}
          onPress={handlePress}
        />
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

export default HourScreen;
