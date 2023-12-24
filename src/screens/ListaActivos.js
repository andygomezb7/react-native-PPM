import react, {useState} from "react"
import { View, FlatList, TouchableOpacity } from "react-native"
import StyledText from '../components/StyledText.jsx'
import axios from 'axios'

const ListaActivos = (props) => {
    const [data, setData] = useState([])

    react.useEffect(() => {
        axios.get('https://tikalfutura.planigo.app/hotel/ROOT/API/API_ppm.php',{
        params: {
            "request": "activos",
            "codigo": ""
        }
        }).then(({ data }) => {
            console.log("defaultApp -> data", data.activos)
            setData(data.activos)
          })
        .catch(function (error) {
            console.log(error);
        })
    },[])

    return (
        <FlatList data={data} 
                  keyExtractor={( item , index) => {
                    return index.toString();
                  }}
                  renderItem={({item}) => {
            return(    
                <TouchableOpacity  
                    onPress={() => props.navigation.navigate('DetalleActivo',{item})}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>   
                    <View style={{flex:1}}>
                        <StyledText align='center' fontWeight='bold'>Activo </StyledText>
                        <StyledText>{item.act_nombre}</StyledText>
                    </View>
                    <View style={{flex:1}}>
                        <StyledText align='center' fontWeight='bold' >Cantidad</StyledText>
                        <StyledText align='center' >{item.act_cantidad}</StyledText>
                    </View>
                    <View style={{flex:1}}>
                        <StyledText align='center' fontWeight='bold' >Ubicación</StyledText>
                        <StyledText align='center' >{item.sed_nombre} {item.are_nombre}</StyledText>
                    </View>
                        <View style={{flex:1}}>
                        <StyledText align='center' fontWeight='bold' >Marca</StyledText>
                        <StyledText align='center' >{item.act_marca}</StyledText>
                    </View>
                    <View style={{flex:1}}>
                        <StyledText align='center' fontWeight='bold' >Proveedor</StyledText>
                        <StyledText align='center' >{item.act_proveedor}</StyledText>
                    </View>
                    </View>
                </TouchableOpacity>     
            )
        }}
        />
        
    )

}
export default ListaActivos