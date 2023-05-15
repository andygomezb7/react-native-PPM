import { useState, useEffect } from "react";

import API_ENDPOINT from "../../../services/api";

/**
 * Devuelve un objeto con tres propiedades: programacion, cargando y error
 * @returns Un objeto con 3 propiedades: programacion, cargando, error.
 */
const useProgramacion = (codigo) => {
  const [programacion, setProgramaciones] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getProgramaciones = async () => {
    try {
      const request = await fetch(
        `${API_ENDPOINT}/ROOT/API/API_ppm.php?request=actividad&codigo=${codigo}`
      );
      const response = await request.json();
      setProgramaciones(response.data?.[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProgramaciones();
  }, [codigo]);

  return { programacion, loading, error };
};

export default useProgramacion;
