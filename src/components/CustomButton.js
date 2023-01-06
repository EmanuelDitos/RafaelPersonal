import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
const CustomButton = ({ category, isSelected, onPress }) => {
  const handlePress = () => {
    onPress(category);
  };

  const style = isSelected ? styles.selectedButton : styles.button;
  const txtStyle = isSelected ? styles.selectedTxt : "";

  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      <Text style={txtStyle}>{category}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

// TODO : Estilo completo
const styles = StyleSheet.create({
  selectedButton: {
    backgroundColor: "#2562FF",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 40,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 40,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedTxt: {
    color: "#fff",
  },
});
