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

const activoFinal = (props) => {

  const [act, setActivo] = useState({
    fecha: "",
    destino: "",
    entregado: "",
    recibido: "",
    observacion: ""
  })

  const handleChangeText = ( fecha, value) => {
    setActivo({...act, [fecha]: value })
  }

    // aqui traigo el id que filtro el usuario y el que se lee... //////
  react.useEffect(() => {
    axios.get('https://edico.planigo.app/ROOT/API/API_ppm.php',{
    params: {
        "request": "activo",
        "codigo": props.route.params.codigo
    }
    }).then(({ data }) => {
      // aqui esta la data en objetos y array para que la uses
        console.log("defaultApp -> data", data.activo)
        setActivo(data.activo)
      })
    .catch(function (error) {
        console.log(error);
    })
  },[])  
  console.log("probando" + " " + props.route.params.codigo);

  var date = moment()
  .format('YYYY-MM-DD HH:mm:ss');

  const envioData = () => {
    ////////////////// aqui vienen todos los datos que ya envia recogidos del formulario /////////////////////  
     console.log(act)
    axios.get('https://edico.planigo.app/ROOT/API/API_ppm.php',{
      params: {
        "request": "registrar",
        "status": 2,
        "activo": props.route.params.codigo,
        "fecha": x.fecha,
        "destino": "",
        "entregado": x.entregado,
        "recibido": x.recibido,
        "observacion": x.observacion

      }
    }).then(function (response) {
      if (response.data.status === true) {
        console.log(response.data)
        alert("Registro se actualizo correctamente")
      }else{
        alert(response.data.message)
      }
    }).catch(function (error) {
      console.log(error);
    })
      

    // regreso a la pantalla principal despues de guardar los datos..!
    props.navigation.navigate("ScreenPrincipal");

  }

  return (
    <FlatList data={act} 
              keyExtractor={( item , index) => {
                return  index.toString();
              }}
              renderItem={({item}) => {
        return(              
          <ScrollView style={styles.container2}>
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: "#FF0000", fontSize: 25, fontWeight: "bold" }}>Activo En Uso</Text>
            </View>
            <View style={{ flex: 1}}>
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
            <TextInput editable={false} placeholder={date} 
             onChangeText={(value) => handleChangeText("fecha", value)} />
          </View>
          <View style={styles.inputGroup2}>
            <Text style={styles.color}>Horas Para Mantenimiento</Text>
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder={item.act_horas_limite}
              editable={false}
            />
          </View>
          <View style={styles.inputGroup2}>
            <Text style={styles.color}>Horas Acumuladas Uso</Text>
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder={item.act_horas_usadas}
              editable={false}
            />
          </View>
          <View style={styles.inputGroup2}>
            <Text style={styles.color}>Entregado Por</Text>
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Entregado Por"
              onChangeText={(value) => handleChangeText("entregado", value)}
            />
          </View>
          <View style={styles.inputGroup2}>
            <Text style={styles.color}>Recivido Por</Text>
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Recivido Por"
              onChangeText={(value) => handleChangeText("recibido", value)}
            />
          </View>
          <View style={styles.inputGroup2}>
            <Text style={styles.color}>Observacion Activo</Text>
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="observacion Activo"
              onChangeText={(value) => handleChangeText("observacion", value)}
            />
          </View>
          <View style={styles.Button}>
            <Button title="Grabar Registro" onPress={() => envioData()} />
          </View>
        </ScrollView>
         )
      }}
    />
  )
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

export default activoFinal;
