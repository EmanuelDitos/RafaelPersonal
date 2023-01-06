import React from "react";
import { View, ActivityIndicator, Modal } from "react-native";

const LoadingScreen = ({ visible }) => {
  return (
    <Modal visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1a1a1a",
        }}>
        <ActivityIndicator size="large" color="white" animating={true} />
      </View>
    </Modal>
  );
};

export default LoadingScreen;
