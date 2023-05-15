import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { Button } from "react-native-elements";

import { ScrollView } from "react-native-gesture-handler";

import ProgramacionItem from "./components/item";
import getImages from "./events";
import useProgramacion from "./hooks";

const Programacion = (props) => {
  const codigo = props.route.params.codigo;
  const { programacion, loading, error } = useProgramacion(codigo);
  const [images, setImages] = useState([]);

  const [formData, setFormData] = useState({
    observaciones_ejecucion: programacion.observaciones_ejecucion,
    firmasCount: (programacion?.fotos_firmas?.length ?? "") || "1",
  });

  const getImagesEvent = () => getImages(programacion?.codigo, setImages);

  const handleChangeText = (name, value) => () =>
    setFormData({ ...formData, [name]: value });

  return (
    <ScrollView style={{ padding: 20 }}>
      <View
        style={{
          padding: 20,
          marginBottom: 20,
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#555" }}>
          Ubicación
        </Text>
        <ProgramacionItem label="Sede:" value={programacion.sede} />
        <ProgramacionItem label="Sector:" value={programacion.sector} />
        <ProgramacionItem label="Área:" value={programacion.area} />
        <ProgramacionItem label="Nivel:" value={programacion.nivel} />
      </View>

      <View
        style={{
          padding: 20,
          marginBottom: 20,
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#555" }}>
          Información
        </Text>
        <ProgramacionItem label="Categoría:" value={programacion.categoria} />
        <ProgramacionItem
          label="Usuario que Ejecuta:"
          value={programacion.nombre_usuario}
        />
        <ProgramacionItem
          label="Fecha Programada:"
          value={programacion.fecha}
        />
        <ProgramacionItem
          label="Presupuesto:"
          value={programacion.presupuesto}
        />
      </View>

      <View
        style={{
          padding: 20,
          marginBottom: 20,
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      >
        <ProgramacionItem
          label="Observaciones en la Programacón:"
          value={programacion.observaciones_programacion}
        />
      </View>

      <View
        style={{
          padding: 20,
          marginBottom: 20,
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      >
        <ProgramacionItem
          label="Nombre del Activo:"
          value={programacion.activo}
        />
        <ProgramacionItem label="Marca:" value={programacion.marca} />
        <ProgramacionItem label="Proveedor:" value={programacion.proveedor} />
        <ProgramacionItem label="Cantidad:" value={programacion.cantidad} />
        <ProgramacionItem
          label="Observaciones Especiales del Activo:"
          value={programacion.observaciones}
        />
      </View>

      <View
        style={{
          padding: 20,
          marginBottom: 40,
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#555" }}>
          Programación
        </Text>
        <ProgramacionItem
          editable
          label="Observaciones al ejecutar:"
          value={formData.observaciones_ejecucion}
          onChange={(ev) =>
            handleChangeText("observaciones_ejecucion", ev.target)
          }
        />
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ProgramacionItem
            editable
            label="Cantidad de firmas:"
            value={formData.firmasCount}
            onChange={(ev) => handleChangeText("firmasCount", ev.target)}
          />

          <Button
            onPress={
              programacion?.fotos_firmas?.length > 0 ? getImagesEvent : () => {}
            }
            containerStyle={{ borderRadius: 10, marginTop: 10, width: 150 }}
            titleStyle={{ fontSize: 13 }}
            title={
              (programacion?.fotos_firmas?.length ?? 0) > 0
                ? "VER FIRMAS"
                : "AGREGAR FIRMAS"
            }
          />
        </View>

        {images.length > 0 && (
          <View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "48%", height: 130 }}>
                <Text style={{ fontSize: 13, color: "#999", marginTop: 10 }}>
                  Foto antes
                </Text>
                <Image
                  source={{ uri: images?.[0]?.foto_antes }}
                  style={{ width: "100%", height: "100%", borderRadius: 10 }}
                />
              </View>

              <View style={{ width: "48%", height: 130, borderRadius: 10 }}>
                <Text style={{ fontSize: 13, color: "#999", marginTop: 10 }}>
                  Foto despues
                </Text>
                <Image
                  source={{ uri: images?.[0]?.foto_despues }}
                  style={{ width: "100%", height: "100%", borderRadius: 10 }}
                />
              </View>
            </View>

            <View>
              {images.length > 0 &&
                images.map((image, index) => (
                  <View style={{ marginTop: 30 }}>
                    <Text
                      style={{ fontSize: 13, color: "#999", marginTop: 10 }}
                    >
                      Firma
                    </Text>
                    <Image
                      key={index}
                      source={{ uri: image.firma }}
                      style={{
                        width: "100%",
                        height: 200,
                        borderRadius: 10,
                      }}
                    />
                  </View>
                ))}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Programacion;
