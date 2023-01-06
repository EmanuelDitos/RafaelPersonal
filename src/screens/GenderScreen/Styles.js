import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#1a1a1a",
  },
  generalWrapper: {
    alignItems: "center",
  },
  txtHeader: {
    color: "#fff",
    fontSize: 26,
  },
  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    backgroundColor: "#2562FF",
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    color: "#FFF",
    fontSize: 14,
    textTransform: "uppercase",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default styles;
