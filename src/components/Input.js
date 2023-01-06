import { TextInput, View, StyleSheet, SafeAreaView } from "react-native";

const Input = (props) => {
  return (
    <TextInput
      autoCapitalize={props.autoCapitalize}
      onChangeText={(text) => props.onChangeText(text)}
      style={styles.input}
      secureTextEntry={props.secureTextEntry}
      value={props.value}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#d9d9d9",
    height: 40,
    width: "100%",
    paddingLeft: 40,
  },
});

export default Input;
