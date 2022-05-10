import react from "react";
import {FlatList, View, Text } from "react-native";
import repositories from "../components/data/repositories"
import ActivosItem from "./ActivosItem";

const ActivosList = () => {
    return (
        <FlatList 
        data={repositories}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item: repo}) => (
            <ActivosItem{... repo} />
        )}/>        
    )
}

export default ActivosList