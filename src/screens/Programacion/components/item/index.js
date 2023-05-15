import React from "react";

import { Text, TextInput, View } from "react-native";

const ProgramacionItem = ({ label, value, editable, onChange }) => {
  return (
    <View>
      <Text style={{ fontSize: 13, color: "#999", marginTop: 10 }}>
        {label}
      </Text>
      {editable ? (
        <TextInput
          onChange={onChange}
          value={value}
          style={{
            backgroundColor: "#eee",
            paddingVertical: 0,
            borderRadius: 10,
            padding: 10,
          }}
        />
      ) : (
        <Text
          style={{
            backgroundColor: "#eee",
            paddingVertical: 5,
            borderRadius: 10,
            padding: 10,
          }}
        >
          {value}
        </Text>
      )}
    </View>
  );
};

export default ProgramacionItem;
