import react, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import { ButtonGroup } from "react-native-elements";
import StyledText from "../components/StyledText";
import theme from "../theme";
import * as ImagePicker from "expo-image-picker";
import axios from 'axios';
import { useNavigationParam } from "@react-navigation/native";


const DetalleActivo = (props) => {

    return (
      <ScrollView>
        <View key={props.route.params.item.id} style={Styles.container}>
          <StyledText
            align="center"
            style={Styles.colortitle}
            fontSize="subheading"
            fontWeight="bold"
          >
            {props.route.params.item.act_nombre}
          </StyledText>
          <StyledText align="center" fontWeight="bold">
                Estado{" "}
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.act_situacion}
              </StyledText>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={{ flex: 1 }}>
              <StyledText align="center" fontWeight="bold">
                Sede{" "}
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.sed_nombre}
              </StyledText>

              <StyledText align="center" fontWeight="bold">
                Sector
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.sec_nombre}
              </StyledText>

              <StyledText align="center" fontWeight="bold">
                Nombre del Activo
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.act_nombre}
              </StyledText>

              <StyledText align="center" fontWeight="bold">
                No. de Serie
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.act_serie}
              </StyledText>

              <StyledText align="center" fontWeight="bold">
                No. de Parte
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.act_parte}
              </StyledText>
              <StyledText align="center" fontWeight="bold">
                Capacidad
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.act_capacidad}
              </StyledText>
              <StyledText align="center" fontWeight="bold">
                Periodicidad de Mantenimiento
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.act_periodicidad}
              </StyledText>
              <StyledText align="center" fontWeight="bold">
                Precio de Adquisición
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.act_precio_compra}
              </StyledText>

            </View>

            <View style={{ flex: 1 }}>

              <StyledText align="center" fontWeight="bold">
                Area
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.are_nombre}
              </StyledText>

              <StyledText align="center" fontWeight="bold">
                Nivel
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.are_nivel}
              </StyledText>

              <StyledText align="center" fontWeight="bold">
                Marca
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.act_marca}
              </StyledText>

              <StyledText align="center" fontWeight="bold">
                Modelo
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.act_modelo}
              </StyledText>
              <StyledText align="center" fontWeight="bold">
                Proveedor
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.act_proveedor}
              </StyledText>
              <StyledText align="center" fontWeight="bold">
                Cantidad
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.act_cantidad}
              </StyledText>
              <StyledText align="center" fontWeight="bold">
                Precio Nuevo
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.act_precio_nuevo}
              </StyledText>
              <StyledText align="center" fontWeight="bold">
                Precio Actual
              </StyledText>
              <StyledText align="center">
                {props.route.params.item.act_precio_actual}
              </StyledText>
            </View>
          </View>

          <View style={Styles.contImage}>
            <StyledText align="center" fontWeight="bold">
              Fotos
            </StyledText>
            <Image
              source={props.route.params.item.fotos_activos[0].foto_activo}
              style={Styles.image}
            />
          </View>
          
         
        </View>
      </ScrollView>
    );
};

const Styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },

  contImage: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },

  buttonLinea: {
     borderBottomWidth: 1,
    borderBottomColor: "#deb887",
  },

  image: {
    height: 120,
    width: 120,
    resizeMode: 'contain'
  },

  Obsers: {
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
  },

  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },

  colortitle: {
    padding: 4,
    color: theme.colors.textwhite,
    backgroundColor: theme.colors.blue,
    borderRadius: 20,
    overflow: "hidden",
  },
  inputGroup: {
    padding: 30,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#deb887",
  },
});

export default DetalleActivo
