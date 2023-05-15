import React from "react";
import { View, FlatList, Text } from "react-native";

import ProgramacionItem from "./components/item";
import useProgramaciones from "./hooks";

const Programaciones = (props) => {
  const { programaciones, loading, error } = useProgramaciones();

  return (
    <View style={{ padding: 20 }}>
      {loading ? (
        <Text>Cargando ...</Text>
      ) : (
        <FlatList
          data={programaciones}
          renderItem={({ item }) => (
            <ProgramacionItem
              programacion={item}
              navigation={props.navigation}
            />
          )}
        />
      )}
    </View>
  );
};

export default Programaciones;
