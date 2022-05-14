import react from "react"
import { Alert, View, StyleSheet, TouchableOpacity,ScrollView  } from "react-native"
import StyledText from "./StyledText.jsx"
import ActivoStatus from "./ActivosStatus.jsx"
import theme from "../theme.js"
import ScreenDetalle from "../components/Main.jsx"

const ActivosItem = (repo) => {
   
    const EnvioDetalle = () => {
    //   props.navigation.navigate('DetalleActivo');
      console.log('estoy danndo clic');
    };
    
    return (
    <View key={repo.id} style={Styles.container}>
    <StyledText style={Styles.colortitle} fontSize='subheading' fontWeight='bold'>{repo.id}</StyledText>
        <TouchableOpacity 
            onPress={() => EnvioDetalle()}
        >
            <ActivoStatus {... repo}/>
        </TouchableOpacity>
    </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        padding:20,
        paddingBottom: 5,
        paddingTop: 5
    },

    colortitle: {
        padding: 4,
        color : theme.colors.textwhite,
        backgroundColor: theme.colors.blue,
        alignSelf: 'flex-start',
        borderRadius: 20,
        overflow: 'hidden'
    }
})

export default ActivosItem