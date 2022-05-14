import react, { useState } from "react";
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


const DetalleActivo = (props) => {

    // funcion para tomar valores de bottones firma y cambiar estado
    const [selectedIndex, setSelectedIndex] = useState(0);

    // funcion para tomar datos de la foto inicial
    const [selectdIndexAgregar, setSelectdIndexAgregar] = useState(0);

    // funciones para tomar datos de la foto Final
    const [selectIndexPhotoFinal, setselectIndexPhotoFinal] = useState(0);
   
    // funcion para actualizar imagen Inicio desde el dispotivo.
    const [selectImage, setselectImage] = useState(null);

    // seleccionar la imagen final
    const [selectImageF, setselectImageF] = useState(null);

    // Funcion para dar permisos a acceder al dispotivo Galeria.  Foto Inicial
    let openImagePickerAsync = async () => {
      let permissionMultimediaResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (permissionMultimediaResult.granted === false ) {
        alert('Los permisos al dispotivo son requeridos para proceder');
        return;        
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync()
      
      if(pickerResult.cancelled === true){
        return;
      }

      setselectImage({localUri: pickerResult.uri})

    }
    
    //funcion para acceder a la camara del dispotivo. Foto Inicial
    let openCameraImagePickerAsync = async () => {
      let permissionCameraResult =
        await ImagePicker.requestCameraPermissionsAsync();

      if (permissionCameraResult.granted === false) {
        alert("Los permisos a la camara del dispotivo son requeridos");
        return;
      }

      const cameraPicker = await ImagePicker.launchCameraAsync();

      if (cameraPicker.cancelled === true) {
        return;
      }

      setselectImage({ localUri: cameraPicker.uri });
      
    };

    // dar permiso al dispotivo y seleccionar foto Final..!
    let openImagePickerFAsync = async () => {
      let permissionMultimediaResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionMultimediaResult.granted === false) {
        alert("Los permisos al dispotivo son requeridos para proceder");
        return;
      }

      const pickerResultF = await ImagePicker.launchImageLibraryAsync();

      if (pickerResultF.cancelled === true) {
        return;
      }

      setselectImageF({ localFUri: pickerResultF.uri });
    };

    // funcion para acceder a la camara del dispotivo. Foto Final
    let openCameraFImagePickerAsync = async () => {
      let permissionCameraResult =
        await ImagePicker.requestCameraPermissionsAsync();

      if (permissionCameraResult.granted === false) {
        alert("Los permisos a la camara del dispotivo son requeridos");
        return;
      }

      const cameraPicker = await ImagePicker.launchCameraAsync();

      if (cameraPicker.cancelled === true) {
        return;
      }

      setselectImageF({ localFUri: cameraPicker.uri });
    };

    return (
      <ScrollView>
        <View key={props.route.params.repo.id} style={Styles.container}>
          <StyledText
            align="center"
            style={Styles.colortitle}
            fontSize="subheading"
            fontWeight="bold"
          >
            {props.route.params.repo.id}
          </StyledText>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={{ flex: 1 }}>
              <StyledText align="center" fontWeight="bold">
                Descripcion{" "}
              </StyledText>
              <StyledText align="center">
                {props.route.params.repo.Nombre}
              </StyledText>

              <StyledText align="center" fontWeight="bold">
                Categoria
              </StyledText>
              <StyledText align="center">
                {props.route.params.repo.categoria}
              </StyledText>

              <StyledText align="center" fontWeight="bold">
                Sede
              </StyledText>
              <StyledText align="center">
                {props.route.params.repo.sede}
              </StyledText>

              <StyledText align="center" fontWeight="bold">
                Fecha Registro Activo
              </StyledText>
              <StyledText align="center">
                {props.route.params.repo.fecha_registrada}
              </StyledText>
            </View>

            <View style={{ flex: 1 }}>
              <StyledText align="center" fontWeight="bold">
                Estado
              </StyledText>
              <StyledText align="center">
                {props.route.params.repo.estado}
              </StyledText>

              <StyledText align="center" fontWeight="bold">
                Sector
              </StyledText>
              <StyledText align="center">
                {props.route.params.repo.sector}
              </StyledText>

              <StyledText align="center" fontWeight="bold">
                Area
              </StyledText>
              <StyledText align="center">
                {props.route.params.repo.area}
              </StyledText>

              <StyledText align="center" fontWeight="bold">
                observacion
              </StyledText>
              <StyledText align="center">
                {props.route.params.repo.observacion}
              </StyledText>
            </View>
          </View>

          <View>
            <ButtonGroup
              buttons={["Cambiar estado", "Firma"]}
              selectedIndex={selectedIndex}
              style={"red"}
              onPress={(value) => {
                setSelectedIndex(value);
                if (value != 1) {
                  // aqui tienes que conectar para mostrar los estado y solo elijan cual y actualize
                  console.log("cambiando estado");
                } else {
                  console.log("agregar firma");
                }
              }}
            />
          </View>

          <View style={Styles.inputGroup}>
            <TextInput
              style={Styles.Obsers}
              placeholder="Observacion"
              onChangeText={(value) => console.log(value)}
            />
            <Button
              color="#0000ff"
              title="Grabar Observacion"
              ////// aqui tienes que conectar para enviar los datos a la base de datos y agregar o reemplazar los que ya existen....!
              onPress={() => Alert.alert("Grabando Observacion")}
            />
          </View>

          <View style={Styles.contImage}>
            <StyledText align="center" fontWeight="bold">
              Foto Inicial
            </StyledText>
            <Image
              source={{
                uri:
                  selectImage !== null
                    ? selectImage.localUri
                    : "https://play-lh.googleusercontent.com/BlXbHZmIvBGuNdvjYn6RBoH0xxM67t4FPgkCXvmI6ZKSK64rOyDmSIDYhU6kf4ddwm4=s180-rw",
              }}
              style={Styles.image}
            />
          </View>
          <View style={Styles.buttonLinea}>
            <ButtonGroup
              buttons={["Agregar", "Tomar"]}
              selectedIndex={selectdIndexAgregar}
              style={"red"}
              onPress={(value) => {
                setSelectdIndexAgregar(value);
                if (value != 1) {
                  // aqui tienes que conectar para mostrar los estado y solo elijan cual y actualize
                  openImagePickerAsync();
                } else {
                  openCameraImagePickerAsync();
                }
              }}
            />
          </View>

          <View style={Styles.contImage}>
            <StyledText align="center" fontWeight="bold">
              Foto Final
            </StyledText>
            <Image
              source={{
                uri:
                  selectImageF !== null
                    ? selectImageF.localFUri
                    : "https://play-lh.googleusercontent.com/BlXbHZmIvBGuNdvjYn6RBoH0xxM67t4FPgkCXvmI6ZKSK64rOyDmSIDYhU6kf4ddwm4=s180-rw",
              }}
              style={Styles.image}
            />
          </View>

          <View style={Styles.buttonLinea}>
            <ButtonGroup
              buttons={["Agregar", "Tomar"]}
              selectedIndex={selectIndexPhotoFinal}
              style={"red"}
              onPress={(value) => {
                setselectIndexPhotoFinal(value);
                if (value != 1) {
                  // aqui tienes que conectar para mostrar los estado y solo elijan cual y actualize
                  openImagePickerFAsync();
                } else {
                  openCameraFImagePickerAsync();
                }
              }}
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
