import react, {useState} from "react";
import { View, TextInput, Button, ScrollView, StyleSheet } from "react-native";
import  axios  from "axios";

const IniSession = (props) => {

    const [state, setstate] = useState({
        usuario: "",
        password: ""
    })

    const handleChangeText = (usuario, value ) => {
        setstate({...state, [usuario]: value })
    }

    const ValidLogin = () => {
        if (state.usuario === '' ){
            alert('Ingrese un Usuario')
        } 
        else if (state.password === "") {
          alert("Ingrese una Contraseña");
        } else{
          console.log(state);
          axios.get('http://localhost/planigo/ROOT/API/API_login.php',{
            params: {
              "request": "login",
              "usu": state.usuario,
              "pass": state.password
            }
          }).then(function (response) {
            if (response.data.status === true) {
              props.navigation.navigate('ActivosRegistrados');
            }else{
              alert(response.data.message)
            }
          })
          .catch(function (error) {
            console.log(error);
          })
        } 
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput 
            placeholder="Usuario"
            onChangeText={(value) => handleChangeText("usuario", value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(value) => handleChangeText("password", value)}
          />
        </View>
        <View>
          <Button title="Inisia Session" onPress={() => ValidLogin()} />
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        padding: 35
    },

    inputGroup:{
        flex: 1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor: '#cccccc'
    }
})

export default IniSession