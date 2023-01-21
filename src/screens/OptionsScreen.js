import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

const OptionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperView}>
        <Text style={styles.txtHeader}>Configuraçôes</Text>
        <View style={styles.divisor}></View>
        <View style={styles.viewItems}>
          <TouchableOpacity
            style={styles.btnView}
            onPress={() =>
              navigation.navigate("BottomTabScreens", {
                screen: "Payments",
              })
            }
          >
            <MaterialIcons name="payment" size={24} color="white" />
            <Text style={styles.txt}>Pagamento</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divisor}></View>
        <View style={styles.viewItems}>
          <Text style={styles.txtHeader2}>Outros</Text>
        </View>
        <View style={styles.divisor}></View>
        <View style={styles.viewItems}>
          <TouchableOpacity style={styles.btnView}>
            <FontAwesome5 name="star" size={24} color="white" />
            <Text style={styles.txt}>Dê sua Avaliação</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divisor}></View>
        <View style={styles.viewItems}>
          <TouchableOpacity style={styles.btnView}>
            <MaterialIcons name="report-problem" size={24} color="white" />
            <Text style={styles.txt}>Reporte um erro</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divisor}></View>
        <View style={styles.viewItems}>
          <TouchableOpacity style={styles.btnView}>
            <AntDesign name="sharealt" size={24} color="white" />
            <Text style={styles.txt}>Compartilhe</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divisor}></View>
        <View style={styles.viewItems}>
          <TouchableOpacity style={styles.btnView}>
            <FontAwesome name="gear" size={24} color="white" />
            <Text style={styles.txt}>Sobre</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divisor}></View>
        <View style={styles.viewItems}>
          <TouchableOpacity style={styles.btnView}>
            <Ionicons name="exit-outline" size={24} color="white" />
            <Text style={styles.txt}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default OptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    padding: 10,
  },
  wrapperView: {
    width: "95%",
    height: "95%",
    backgroundColor: "rgba(51, 51, 51, 1)",
    borderRadius: 8,
    padding: 10,
    fontSize: "95%",
  },
  txtHeader2: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  divisor: {
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: "#fff",
  },
  txt: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 10,
  },
  viewItems: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  btnView: {
    alignItems: "center",
    flexDirection: "row",
  },
  txtHeader: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
  },
});
