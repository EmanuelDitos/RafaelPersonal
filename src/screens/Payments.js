import { View, Text, StyleSheet } from "react-native";

const Payments = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperView}>
        <Text style={styles.txtHeader}>Planos</Text>
      </View>
      <View>
        <Text style={styles.paymentTxt}>Formas De Pagamentos</Text>
      </View>
    </View>
  );
};
export default Payments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    padding: 10,
  },
  wrapperView: {
    width: 300,
    height: 300,
    backgroundColor: "rgba(51, 51, 51, 1)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  txtHeader: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    padding: 10,
  },
  paymentTxt: {
    color: "#fff",
    fontSize: 20,
    padding: 20,
  },
});
