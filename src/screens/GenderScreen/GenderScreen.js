import styles from "./Styles";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GenderCustomButton } from "../../components";

const GenderScreen = ({ navigation }) => {
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
      navigation.navigate("ObjectiveScreen");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.generalWrapper}>
        <Text style={styles.txtHeader}>Qual é o seu gênero?</Text>
      </View>
      <View style={styles.btnWrapper}>
        <GenderCustomButton
          iconName="male-symbol"
          category="Masculino"
          isSelected={selectedCategory === "Masculino"}
          onPress={handlePress}
        />
        <GenderCustomButton
          iconName="female-symbol"
          category="Feminino"
          isSelected={selectedCategory === "Feminino"}
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

export default GenderScreen;
