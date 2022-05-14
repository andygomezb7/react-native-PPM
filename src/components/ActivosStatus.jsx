import react from "react"
import { View } from "react-native"
import StyledText from '../components/StyledText.jsx'


const ActivoStatus = repo => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{flex:1}}>
                <StyledText align='center' fontWeight='bold'>Descripcion </StyledText>
                <StyledText>{repo.Nombre}</StyledText>
            </View>
            <View style={{flex:1}}>
                <StyledText align='center' fontWeight='bold' >Estado</StyledText>
                <StyledText align='center' >{repo.estado}</StyledText>
            </View>
            <View style={{flex:0}}>
                <StyledText align='center' fontWeight='bold' >Fecha</StyledText>
                <StyledText align='center' >{repo.fecha_registrada}</StyledText>
            </View>
        </View>
    )
}

export default ActivoStatus