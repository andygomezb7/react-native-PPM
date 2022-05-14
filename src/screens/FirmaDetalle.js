import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import Popup from "reactjs-popup";


const AddFirma = () => {
    return (
      <View>
        <Text>firmas</Text>ñ
        <Popup modal trigger={<Button title="Agregar firma"> firmando </Button>}>
            Hola
        </Popup>
      </View>
    );
}

export default AddFirma;