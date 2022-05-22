import react, {useState} from "react";
import {
StyleSheet,
Text,
View,
Modal,
SafeAreaView,
ScrollView,
TextInput,
Button,
TouchableOpacity
} from "react-native";
import { ModalPicker } from "./ModalPicker";
import {useFormik} from "formik";

const Control = (props) => {
  
    // aqui traigo el id que filtro el usuario y el que se lee... //////
  console.log("probando" + " " + props.route.params.codigo.codigo);

  const [chooseData, setchooseData] = useState("Estado");
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool);
    
  };

  const setData = (option) => {
    setchooseData(option);
    
    /// capturo el dato si es Salida es condicion 0 y si es Entrada condicion 1 ...!!!!!
    if(option === 'Salida') {
        handleChangeText("maq_condicion", 0);
    }else{
        handleChangeText("maq_condicion", 1);
    }
  };

  /// aqui estan todos los campos para recivir los datos.
  const [state, setstate] = useState({
    id_maq_activo: "",
    id_maq_registro: "",
    maq_fech_entrada: "",
    maq_hora_entrada: "",
    maq_fech_salida: "",
    maq_hora_salida: "",
    maq_horas_mantenimiento: "",
    maq_condicion: "",
  });

  // funcion para los datos de los input...../////////////////
  const handleChangeText = (id_maq_activo, value) => {
    setstate({ ...state, [id_maq_activo]: value });
  };

  const envioData = () => {
    ////////////////// aqui vienen todos los datos que ya envia recogidos del formulario /////////////////////  
    console.log(state);

    // regreso a la pantalla principal despues de guardar los datos..!
    props.navigation.navigate("ScreenPrincipal");

  }

  return (
    <ScrollView style={styles.container2}>
      <View style={styles.inputGroup2}>
        <Text style={styles.color}>Fecha Registro</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Fecha Entrada"
          onChangeText={(value) => handleChangeText("maq_fech_entrada", value)}
        />
      </View>
      <View style={styles.inputGroup2}>
        <Text style={styles.color}>Horas Para Mantenimiento</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Hora Mantenimiento"
          onChangeText={(value) =>
            handleChangeText("maq_horas_mantenimiento", value)
          }
        />
      </View>
      <View style={styles.inputGroup2}>
        <Text style={styles.color}>Horas Acumuladas</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Horas Acumuladas"
          onChangeText={(value) =>
            handleChangeText("maq_horas_acumuladas", value)
          }
        />
      </View>
      <View style={styles.inputGroup2}>
        <Text style={styles.color}>Condicion Maquinaria</Text>
      </View>
      <View style={styles.inputGroupM}>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            onPress={() => changeModalVisibility(true)}
            style={styles.touchableOpacity}
          >
            <Text style={styles.text}>{chooseData}</Text>
          </TouchableOpacity>
          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            backgroundColor="#40e0d0"
            nRequestClose={() => changeModalVisibility(false)}
          >
            <ModalPicker
              changeModalVisibility={changeModalVisibility}
              setData={setData}
            />
          </Modal>
        </SafeAreaView>
      </View>
      <View style={styles.Button}>
        <Button title="Grabar Registro" onPress={() => envioData()} />
      </View>
    </ScrollView>
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

export default Control;
