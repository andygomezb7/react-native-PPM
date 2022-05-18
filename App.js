import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IniSession from "./src/screens/Login.js";
import Main from "./src/components/Main.jsx";
import DetalleActivo from "./src/screens/DetalleActivo.js";
import CambiarEstado from "./src/screens/CambiarEstado.js";
import AddFirma from "./src/screens/FirmaDetalle.js";
import LectorQR from "./src/screens/QR.js";

const Stack = createStackNavigator()

function VariasScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={IniSession}
        options={{ title: "Login PPM Plani-Go" }}
      />
      <Stack.Screen
        name="ActivosRegistrados"
        component={Main}
        options={{ title: "Activos Registrados" }}
      />
      <Stack.Screen
        name="QR"
        component={LectorQR}
        options={{ title: "Lector de QR" }}
      />
      <Stack.Screen
        name="CambiarEstado"
        component={CambiarEstado}
        options={{ title: "Cambio de Estado Activo" }}
      />
      <Stack.Screen
        name="DetalleActivo"
        component={DetalleActivo}
        options={{ title: "Detalle Activo" }}
      />
      <Stack.Screen
        name="FirmaDetalle"
        component={AddFirma}
        options={{ title: "Agregar Firma" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <VariasScreens/>
    </NavigationContainer>
  );
}