import AsyncStorage from "@react-native-async-storage/async-storage";

const getUser = async () => {
  const user = await AsyncStorage.getItem("usuario");
  return user ? JSON.parse(user) : null;
};

export default getUser;
