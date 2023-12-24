import react, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";

import axios from "axios";
import API_ENDPOINT from "../services/api";

const IniSession = (props) => {
  const [state, setstate] = useState({
    usuario: "",
    password: "",
  });

  const handleChangeText = (usuario, value) => {
    setstate({ ...state, [usuario]: value });
  };

  // const ValidLogin = () => {
  //   // Comentas aqui sin el navigate para poder entrar
  //   if (state.usuario === "") {
  //     alert("Ingrese un Usuario");
  //   } else if (state.password === "") {
  //     alert("Ingrese una Contraseña");
  //   } else {
  //     axios
  //       .get(`${API_ENDPOINT}/ROOT/API/API_login.php`, {
  //         params: {
  //           request: "login",
  //           usu: state.usuario,
  //           pass: state.password,
  //         },
  //       })
  //       .then(async function (response) {
  //         await AsyncStorage.setItem(
  //           "usuario",
  //           JSON.stringify(response.data.data)
  //         );
  //         if (response.data.status === true) {
  //           props.navigation.navigate("ScreenPrincipal");
  //         } else {
  //           alert(response.data.message);
  //         }
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  //   ////////////////////
  // };

  useEffect(() => {
    AsyncStorage.getItem("usuario").then((value) => {
      if (value !== null) {
        props.navigation.navigate("ScreenPrincipal", {
          usuario: JSON.parse(value),
        });
      }
    });
  }, []);

    const ValidLogin = () => {
      // Comentas aqui sin el navigate para poder entrar
        if (state.usuario === '' ){
            alert('Ingrese un Usuario')
        } 
        else if (state.password === "") {
          alert("Ingrese una Contraseña");
        } else{
          console.log(state);
          axios.get('https://tikalfutura.planigo.app/hotel/ROOT/API/API_login.php',{
            params: {
              "request": "login",
              "usu": state.usuario,
              "pass": state.password
            }
          }).then(function (response) {
            if (response.data.status === true) {
              props.navigation.navigate("ScreenPrincipal");
            }else{
              alert(response.data.message)
            }
          })
          .catch(function (error) {
            console.log(error);
          })
        } 
        ////////////////////
    }

  return (
    <ScrollView style={styles.container}>
      <Input
        placeholder="Usuario"
        onChangeText={(value) => handleChangeText("usuario", value)}
      />
      <Input
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={(value) => handleChangeText("password", value)}
      />
      <View>
        <Button
          containerStyle={{ borderRadius: 10 }}
          title="Inicia Sesión"
          onPress={() => ValidLogin()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },

  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default IniSession;
