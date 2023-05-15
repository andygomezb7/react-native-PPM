import API_ENDPOINT from "../../../services/api";

const getImages = async (codigo, setImages) => {
  try {
    if (codigo) {
      const req = await fetch(
        `${API_ENDPOINT}/ROOT/API/API_ppm.php?request=getimagenes&codigo=${codigo}`
      );
      const data = await req.json();
      setImages(data.imagens);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getImages;
