import react from "react"
import { View } from "react-native"
import StyledText from '../components/StyledText.jsx'


const ActivoStatus = props => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{flex:1}}>
                <StyledText align='center' fontWeight='bold'>Descripcion </StyledText>
                <StyledText>{props.Nombre}</StyledText>
            </View>
            <View style={{flex:1}}>
                <StyledText align='center' fontWeight='bold' >Estado</StyledText>
                <StyledText align='center' >{props.estado}</StyledText>
            </View>
            <View style={{flex:0}}>
                <StyledText align='center' fontWeight='bold' >Fecha</StyledText>
                <StyledText align='center' >{props.fecha_registrada}</StyledText>
            </View>
        </View>
    )
}

export default ActivoStatus