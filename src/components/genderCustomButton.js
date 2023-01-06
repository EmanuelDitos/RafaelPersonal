import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Foundation } from "@expo/vector-icons";
const GenderCustomButton = ({ category, isSelected, onPress, iconName }) => {
  const handlePress = () => {
    onPress(category);
  };

  const style = isSelected ? styles.selectedButton : styles.button;
  const txtStyle = isSelected ? styles.selectedTxt : "";
  const iconStyle = isSelected ? styles.selectedIcon : "";
  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      <Foundation name={iconName} size={60} style={iconStyle} />
      <Text style={txtStyle}>{category}</Text>
    </TouchableOpacity>
  );
};

export default GenderCustomButton;

// TODO : Estilo completo
const styles = StyleSheet.create({
  selectedButton: {
    backgroundColor: "#2562FF",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  button: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  selectedTxt: {
    color: "#fff",
  },
  selectedIcon: {
    color: "#fff",
  },
});
