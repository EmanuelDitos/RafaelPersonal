import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  GenderScreen,
  HourScreen,
  ImcScreen,
  InitScreen,
  LoginScreen,
  ObjectiveScreen,
  RegisterScreen,
  HomeScreen,
  TeacherScreen,
  WorkoutsScreen,
  OthersScreen,
} from "../screens";
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const InitialScreen = () => {
  return (
    <Stack.Navigator initialRouteName="GenderScreen">
      <Stack.Screen
        name="InitScreen"
        component={InitScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="GenderScreen"
        component={GenderScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="ObjectiveScreen"
        component={ObjectiveScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="HourScreen"
        component={HourScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="ImcScreen"
        component={ImcScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

const HomeTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name == "Professor") {
            iconName = focused ? "user-circle" : "user-circle";
          } else if (route.name == "Treinos") {
            iconName = focused ? "weight-hanging" : "weight-hanging";
          } else if (route.name == "Conta") {
            iconName = focused ? "align-justify" : "align-justify";
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: "#2562FF",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#1a1a1a",

          height: 50,
        },
      })}>
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 20,
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 20,
          },
        }}
        name="Professor"
        component={TeacherScreen}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 20,
          },
        }}
        name="Treinos"
        component={WorkoutsScreen}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 20,
          },
        }}
        name="Conta"
        component={OthersScreen}
      />
    </Tab.Navigator>
  );
};

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#1a1a1a",
            },
          }}
          name="InitScreen"
          component={InitialScreen}
        />
        <Stack.Screen
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#1a1a1a",
            },
          }}
          name="HomeScreen"
          component={HomeTabScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
