import React from "react";

import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

const ProgramacionItem = ({ programacion, navigation }) => {
  const goToProgramacion = () =>
    navigation.push("Programacion", { codigo: programacion.codigo });

  return (
    <View
      style={{
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
      }}
    >
      <TouchableOpacity onPress={() => goToProgramacion()}>
        <View>
          <View>
            <Text style={{ fontWeight: "500" }}>{programacion.activo}</Text>
            <Text>
              Ubicación: {programacion.sede}, {programacion.sector}
            </Text>
            <Text>Categoria: {programacion.categoria}</Text>
            <Text>Fecha: {programacion.fecha}</Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 200,
                padding: 5,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: "#6685A4",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Situación: {programacion.situacion_descripcion}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProgramacionItem;
