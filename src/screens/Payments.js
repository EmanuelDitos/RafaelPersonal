import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Payments = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <View style={styles.headerview}>
          <Text style={styles.txtHeader}>Assine seu plano</Text>
          <Text style={styles.txtPrice}>R$ XX,XX</Text>
        </View>
        <View style={styles.itemContent}>
          <View style={styles.item}>
            <AntDesign
              name="star"
              size={24}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.txt}>Tenha acesso aos treinos.</Text>
          </View>
          <View style={styles.item}>
            <AntDesign
              name="star"
              size={24}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.txt}>Ajuda do professor.</Text>
          </View>
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>assine agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Payments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  contentView: {
    width: "100%",
    height: "40%",
    backgroundColor: "rgba(51, 51, 51, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#fff",
  },
  txtHeader: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
  txtPrice: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
  },
  txt: {
    color: "#fff",
    fontSize: 16,
  },
  headerview: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 6,
  },
  btnView: {
    width: "100%",
  },
  btn: {
    width: "100%",
    backgroundColor: "#2562FF",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  txtBtn: {
    color: "#fff",
    fontSize: 15,
    textTransform: "uppercase",
  },
});
