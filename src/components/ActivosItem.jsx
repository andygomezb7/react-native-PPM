import react from "react"
import { View, StyleSheet } from "react-native"
import StyledText from "./StyledText.jsx"

const ActivosItem = (props) => (
<View key={props.id} style={Styles.container}>
        <StyledText fontSize='subheading' fontWeight='bold'>Id Activo:{props.id}</StyledText>
        <StyledText >Nombre Activo: {props.Nombre}</StyledText>
        <StyledText >Estado: {props.estado}</StyledText>
        <StyledText >{props.fecha_registrada}</StyledText>
</View>
)

const Styles = StyleSheet.create({
    container: {
        padding:20,
        paddingBottom: 5,
        paddingTop: 5
    },
})

export default ActivosItem