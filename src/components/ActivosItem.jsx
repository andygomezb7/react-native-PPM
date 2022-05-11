import react from "react"
import { Alert, View, StyleSheet, TouchableOpacity  } from "react-native"
import StyledText from "./StyledText.jsx"
import ActivoStatus from "../components/ActivosStatus.jsx"
import theme from "../theme.js"


const ActivosItem = (props) => (
<View key={props.id} style={Styles.container}>
        <StyledText style={Styles.colortitle} fontSize='subheading' fontWeight='bold'>{props.id}</StyledText>
        <TouchableOpacity onPress={() => Alert.alert('touchableopacity')}>
            <ActivoStatus {... props}/>
        </TouchableOpacity>
        
</View>
)

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