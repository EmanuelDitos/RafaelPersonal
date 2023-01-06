import { StatusBar } from "expo-status-bar";
import AppRoutes from "./src/routes/AppRoutes";

const App = () => {
  console.disableYellowBox = true;
  return (
    <>
      <AppRoutes />
      <StatusBar style="light" />
    </>
  );
};

export default App;
