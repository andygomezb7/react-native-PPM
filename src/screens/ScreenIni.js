import react, { useState } from "react";
import { Text, View, Button, StyleSheet, TextInput, Alert, Image, useLayoutEffect} from "react-native";
import theme from "../theme.js";
import prueba from "../../assets/prueba.jpeg";
import axios from "axios"

const MainPrincipal = (props) => {
  
  const [codigo, setcodigo] = useState({
    codigo: " "
  });

  const handleChangeText = (codigo, value) => {
    setcodigo({ ...codigo, [codigo]: value });
  };

  
  // console.log(repositories);

  const ValidLogin = () => {

    if (codigo.codigo === "") {
      alert("Favor Ingrese un Codigo de Activo");
    } else {
      axios.get('https://edico.planigo.app/ROOT/API/API_ppm.php',{
        params: {
            "request": "activo",
            "codigo": codigo.codigo
        }
        }).then(({ data }) => {
            if (data.activo[0].act_situacion == "1") {
              props.navigation.navigate("activoInicial", {codigo:codigo.codigo});
            }else{
              props.navigation.navigate("activoFinal", {codigo:codigo.codigo});
            }
          })
        .catch(function (error) {
            console.log(error);
        })
      console.log(codigo.codigo)
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.container1}>
        <Image source={prueba} style={Styles.image} />
      </View>

      <View>
        <Button
          title="Activar Lector QR"
          onPress={() => {
            props.navigation.navigate("QR");
          }}
        />
      </View>
      <View style={Styles.inputGroup}>
        <TextInput
          style={Styles.Obsers}
          placeholder="codigo"
          onChangeText={(value) => handleChangeText("codigo", value)}
        />
      </View>
      <View style={Styles.inputGroup1}>
        <Button
          title="Leer Codigo"
          onPress={() => ValidLogin()}
        />
      </View>

      <View>
        <Button
          title="Bodega Activos"
          onPress={() => props.navigation.navigate("ListaActivos")}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingBottom: 10,
    paddingTop: 10,
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#ffffff",
  },

  container1: {
    padding: 30,
    paddingBottom: 10,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },  

  image: {
    height: 250,
    width: 250,
    resizeMode: "contain",
  },

  Obsers: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },

  inputGroup: {
    padding: 15,
    marginBottom: 1,
  },
  inputGroup1: {
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#deb887",
  },
});

export default MainPrincipal
