import React from "react"
import {View, Text} from "react-native"
import constants from "expo-constants"
import ActivosList from "./ActivosList.jsx" 

const Main = () => {
    return (
        <View style={{marginTop: constants.statusBarHeight, flexGrow: 1}}>
            <Text>Datos de activos registrados en el sistema</Text>
            <ActivosList />
        </View>
    )
} 

export default Main