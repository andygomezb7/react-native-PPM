import react, {useState} from "react";
import {
StyleSheet,
FlatList,
Text,
View,
ScrollView,
TextInput,
Button
} from "react-native";
import axios from 'axios';
import moment from "moment";

const activoInicial = (props) => {
  
  const [act, setActivo] = useState({});

  // aqui traigo el id que filtro el usuario y el que se lee... //////
  react.useEffect(() => {
    axios
      .get("https://edico.planigo.app/ROOT/API/API_ppm.php", {
        params: {
          request: "activo",
          codigo: props.route.params.codigo,
        },
      })
      .then(({ data }) => {
        // aqui esta la data en objetos y array para que la uses
        console.log("defaultApp -> data", data.activo);
        setActivo(data.activo);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log("probando" + " " + props.route.params.codigo);

  var date = moment().format("YYYY-MM-DD HH:mm:ss");

  const envioData = () => {
    ////////////////// aqui vienen todos los datos que ya envia recogidos del formulario /////////////////////
    console.log(act.fecha);
    axios
      .get("https://edico.planigo.app/ROOT/API/API_ppm.php", {
        params: {
          request: "registrar",
          status: 1,
          activo: props.route.params.codigo,
          fecha: fechaServidor,
          destino: Destino,
          entregado: entregado,
          recibido: recibido,
          observacion: "",
        },
      })
      .then(function (response) {
        if (response.data.status === true) {
          console.log(response.data);
          alert("Registro se actualizo correctamente");
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    // regreso a la pantalla principal despues de guardar los datos..!
    props.navigation.navigate("ScreenPrincipal");
  };

  ///// funciones para actualizar manual los datoss //////
  //// aqui ya te actualize los valor Willian ya solo encargate de mandar los datos a la apiiii ///////
  const [entregado, setentregado] = useState(null);
  const inputUpdateEntregado = (value) => {
    setentregado(value);
  };

  const [recibido, setrecibido] = useState(null);
  const inputUpdaterecibido = (value) => {
    setrecibido(value);
  };

  const [Destino, setDestino] = useState(null);
  const inputUpdateDestino = (value) => {
    setDestino(value);
  }

  const [fechaServidor, setfechaServidor] = useState(date);
  const inputUpdateFechaServidor = (value) => {
    setfechaServidor(value);
  };

  console.log(
    "entregado" +
      " " +
      entregado +
      "recibido" +
      " " +
      recibido +
      "destino" +
      " - " +
      Destino +
      "fecha servidor" +
      " " +
      fechaServidor
  );

  return (
    <FlatList
      data={act}
      keyExtractor={(item, index) => {
        return index.toString();
      }}
      renderItem={({ item }) => {
        return (
          <ScrollView style={styles.container2}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={{ color: "#008000", fontSize: 25, fontWeight: "bold" }}
                >
                  Activo Disponible
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.inputGroup3}>
                  <Text style={styles.color}>Código: {item.act_codigo}</Text>
                  <Text style={styles.color}>{item.act_nombre}</Text>
                  <Text style={styles.color}>{item.act_modelo}</Text>
                </View>
              </View>
            </View>
            <View style={styles.inputGroup2}>
              <Text style={styles.color}>Fecha Registro</Text>
            </View>
            <View style={styles.inputGroup}>
              <TextInput
                editable={false}
                placeholder={date}
                onChangeText={(value = date) => inputUpdateFechaServidor(value)}
              />
            </View>
            <View style={styles.inputGroup2}>
              <Text style={styles.color}>Destino</Text>
            </View>
            <View style={styles.inputGroup}>
              <TextInput
                placeholder="Destino"
                onChangeText={(value) => inputUpdateDestino(value)}
              />
            </View>
            <View style={styles.inputGroup2}>
              <Text style={styles.color}>Horas Para Mantenimiento</Text>
            </View>
            <View style={styles.inputGroup}>
              <TextInput placeholder={item.act_horas_limite} editable={false} />
            </View>
            <View style={styles.inputGroup2}>
              <Text style={styles.color}>Horas Acumuladas Uso</Text>
            </View>
            <View style={styles.inputGroup}>
              <TextInput placeholder={item.act_horas_usadas} editable={false} />
            </View>
            <View style={styles.inputGroup2}>
              <Text style={styles.color}>Entregado Por</Text>
            </View>
            <View style={styles.inputGroup}>
              <TextInput
                placeholder="Entregado Por"
                onChangeText={(value) => inputUpdateEntregado(value)}
              />
            </View>
            <View style={styles.inputGroup2}>
              <Text style={styles.color}>Recivido Por</Text>
            </View>
            <View style={styles.inputGroup}>
              <TextInput
                placeholder="Recivido Por"
                onChangeText={(value) => inputUpdaterecibido( value)}
              />
            </View>
            <View style={styles.Button}>
              <Button title="Grabar Registro" onPress={() => envioData()} />
            </View>
          </ScrollView>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    padding: 35,
    backgroundColor: "#ffffff",
  },
  color: {
    color: "#ffffff",
  },

  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  inputGroupM: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
  },
  inputGroup2: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    alignItems: "center",
    backgroundColor: "#000080",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  inputGroup3: {
    color: "#000000",
    textAlign: "right",
    marginBottom: 15,
    backgroundColor: "#000080",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  container: {
    // borderBottomWidth: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  container1: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    padding: 50,
  },
  text: {
    marginVertical: 20,
    fontSize: 25,
  },
  touchableOpacity: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    padding: 0,
    alignItems: "center",
  },
  Button: {
    padding: 50,
    marginBottom: 15,
    flex: 1,
    paddingBottom: 10,
  },
});

export default activoInicial;
