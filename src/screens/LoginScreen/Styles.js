import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
  },
  imgWrapper: {
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: 150,
    marginBottom: 50,
  },
  defaultTxt: {
    color: "#fff",
    fontSize: 22,
    textTransform: "uppercase",
    marginBottom: 50,
  },
  inputWrapper: {
    width: "98%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    marginBottom: 15,
    alignSelf: "center",
  },
  icon: {
    position: "absolute",
    left: 14,
    bottom: 13,
  },
  btnWrapper: {
    alignItems: "center",
    marginTop: 20,
    width: "98%",
    alignSelf: "center",
    marginBottom: 20,
  },
  btn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2562FF",
    height: 40,
    borderRadius: 8,
  },
  btnTxt: {
    fontSize: 16,
    color: "#fff",
    textTransform: "uppercase",
  },
  txtError: {
    color: "red",
    fontSize: 12,
    position: "absolute",
    bottom: -15,
    left: 0,
  },
  loginTxt: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
    textDecorationLine: "underline",
  },
  iconL: {
    position: "absolute",
    left: 150,
    bottom: 8,
  },
  error: {
    color: "red",
    alignSelf: "center",
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
});

export default styles;
