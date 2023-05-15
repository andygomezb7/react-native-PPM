import { useState, useEffect } from "react";

import API_ENDPOINT from "../../../services/api";
import getUser from "../../../utils";

/**
 * Devuelve un objeto con tres propiedades: programaciones, cargando y error
 * @returns Un objeto con 3 propiedades: programaciones, cargando, error.
 */
const useProgramaciones = () => {
  const [programaciones, setProgramaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getProgramaciones = async () => {
    try {
      const usuario = await getUser();
      const request = await fetch(
        `${API_ENDPOINT}/ROOT/API/API_ppm.php?request=actividades&usuario=${usuario.codigo}&semana=51&anio=2023`
      );
      const response = await request.json();
      setProgramaciones(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProgramaciones();
  }, []);

  return { programaciones, loading, error };
};

export default useProgramaciones;
