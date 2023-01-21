import { StatusBar } from "expo-status-bar";
import AppRoutes from "./src/routes/AppRoutes";

const App = () => {
  return (
    <>
      <AppRoutes />
      <StatusBar style="light" />
    </>
  );
};

export default App;
