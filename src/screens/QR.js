import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from 'axios'

export default function App(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Aun no a escaneado ningun QR');

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  };

   useEffect(() => {
     askForCameraPermission();
   }, []);

    const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // aqui tienes la data scaneada solo tienes que conectar a  la base de datos para que te abara el codigo de activo que scanees..!
    setText(data);
    // aqui te muestra el alert con la data scaneado
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);

      if(data != null){
        codigo = data;
        console.log("nose "+codigo)
        axios.get('https://tikalfutura.planigo.app/comercial/ROOT/API/API_ppm.php',{
        params: {
            "request": "activo",
            "codigo": codigo
        }
        }).then(({ data }) => {
            if (data.activo[0].act_situacion == "1") {
              props.navigation.navigate("activoInicial", {codigo});
            }else{
              props.navigation.navigate("activoFinal", {codigo});
            }
          })
        .catch(function (error) {
            console.log(error);
        })
      console.log(codigo)
        // props.navigation.navigate("activoInicial", { codigo });
        alert(`ya tengo scaneada data`);
      }else{
        alert(`No esta scaneado ningun codigo QR revisar`);
      }

    };


  if (hasPermission === null) {
    return (
      <View style={styles.container2}>
        <Text>Requerido el permiso de la camara</Text>
      </View>
    );
  }

   if (hasPermission === false) {
     return (
       <View style={styles.container2}>
         <Text style={{ margin: 10 }}> No se dio acceso a la camara</Text>
         <Button
           title={"Allow Camera"}
           onPress={() => askForCameraPermission()}
         />
       </View>
     );
   }


    return (
      <View style={styles.container2}>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 400 }}
          />
        </View>

        <Text style={styles.maintext}>{text}</Text>

        {scanned && (
          <Button
            title={"Scan again?"}
            onPress={() => setScanned(false)}
            color="tomato"
          />
        )}
      </View>
    );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  },

  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },

  maintext: {
    fontSize: 16,
    margin: 20,
  },
});
