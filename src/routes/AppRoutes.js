// screens import
import {
  HomeScreen,
  TeacherScreen,
  WorkoutsScreen,
  OptionsScreen,
  AuthLogin,
  AuthRegister,
  InfoScreen,
  Payments,
} from "../screens/index";

// icon
import { FontAwesome5 } from "@expo/vector-icons";

// react navigation imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// criação tab navigator e stack navigator teste
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Professor") {
            iconName = focused ? "user-circle" : "user-circle";
          } else if (route.name === "Treinos") {
            iconName = focused ? "weight-hanging" : "weight-hanging";
          } else if (route.name === "Opções") {
            iconName = focused ? "align-justify" : "align-justify";
          }

          // retornando o icone
          return <FontAwesome5 name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: "#2562FF",
        tabBarInactiveTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: { color: "#fff" },
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#1a1a1a",

          height: 50,
        },
        headerStyle: {
          backgroundColor: "#1a1a1a",
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Professor" component={TeacherScreen} />
      <Tab.Screen name="Treinos" component={WorkoutsScreen} />
      <Tab.Screen name="Opções" component={OptionsScreen} />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthLogin"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#1a1a1a",
        },
        headerTitle: "",
        headerTintColor: "#fff",
      })}
    >
      <Stack.Screen name="AuthRegister" component={AuthRegister} />
      <Stack.Screen name="AuthLogin" component={AuthLogin} />
    </Stack.Navigator>
  );
};

const BottomTabScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#1a1a1a",
        },
        headerTitle: "",
        headerTintColor: "#fff",
      })}
    >
      <Stack.Screen name="InfoScreen" component={InfoScreen} />
      <Stack.Screen name="Payments" component={Payments} />
    </Stack.Navigator>
  );
};

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StackNavigator"
        screenOptions={() => ({
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerShown: false,
        })}
      >
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen name="StackNavigator" component={StackNavigator} />
        <Stack.Screen name="BottomTabScreens" component={BottomTabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
