import React from "react"
import {View, Alert, Text, Button, FlatList, StyleSheet, TouchableOpacity, ScrollView} from "react-native"
import repositories from "../components/data/repositories"
import StyledText from "./StyledText.jsx"
import ActivoStatus from "./ActivosStatus.jsx"
import theme from "../theme.js"

const Main = (props) => {
    return (
        <View style={{flexGrow: 1}}>
        <FlatList 
        data={repositories}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item: repo}) => (
            <View key={repo.id} style={Styles.container}>
                <StyledText style={Styles.colortitle} fontSize='subheading' fontWeight='bold'>{repo.id}</StyledText>
                    <TouchableOpacity 
                        onPress={() => props.navigation.navigate('DetalleActivo',{repo})}>
                        <ActivoStatus {... repo}/>
                    </TouchableOpacity>
                </View>
            )}/>   
        </View>
    )
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

export default Main