import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  imgWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "50%",
  },
  formWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    height: 40,
    backgroundColor: "#2562FF",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  btnTxt: {
    color: "#fff",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default styles;
