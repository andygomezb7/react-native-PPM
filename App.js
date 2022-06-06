import React from "react";
import { alert, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IniSession from "./src/screens/Login.js";
import Main from "./src/components/Main.jsx";
import DetalleActivo from "./src/screens/DetalleActivo.js";
import CambiarEstado from "./src/screens/CambiarEstado.js";
import AddFirma from "./src/screens/FirmaDetalle.js";
import LectorQR from "./src/screens/QR.js";
import MainPrincipal from "./src/screens/ScreenIni.js";
import activoInicial from "./src/screens/activoInicial.js";
import activoFinal from "./src/screens/activoFinal.js";
import ListaActivos from "./src/screens/ListaActivos.js";
import cerrarSession from "./assets/cerrarSession.png"
import { View } from "react-native-web";

const Stack = createStackNavigator()

const buttonCerrarSession = ({props}) => (
  <TouchableOpacity
    style={{flexDirection: 'row', marginLeft: 10}}
    onPress={() => ClosertLogin(props)}
  > 
    <Image source={cerrarSession} style={{width: 20, height: 20, backgroundColor: '#6685A4'}}/>
  </TouchableOpacity>
);

const ClosertLogin = (props) => {
  props.navigation.navigate('Login');
}

function VariasScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"      
        component={IniSession}
        options={(props) => ({
          headerStyle: {
            backgroundColor: '#6685A4',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title : "Welcome to PPM",
        })}
      />
      <Stack.Screen
        name="ScreenPrincipal"
        component={MainPrincipal}
        options={(props) => ({
          headerStyle: {
            backgroundColor: '#6685A4',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title : "PPM PlaniGO",
          headerLeft: () => buttonCerrarSession({props}),
        })}
      />
      <Stack.Screen
        name="activoInicial"
        component={activoInicial}
        options={{ title: "Activo Inicial" }}
      />
      <Stack.Screen
        name="activoFinal"
        component={activoFinal}
        options={{ title: "Activo Final" }}
      />
      <Stack.Screen
        name="ActivosRegistrados"
        component={Main}
        options={{ title: "Activos Registrados" }}
      />
      <Stack.Screen
        name="ListaActivos"
        component={ListaActivos}
        options={{ title: "Lista de Activos" }}
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