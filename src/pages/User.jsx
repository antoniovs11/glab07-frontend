// Importación de hooks de React para manejar efectos secundarios y estado local
import { useEffect, useState } from "react";
// Importación de axios para realizar peticiones HTTP
import axios from "axios";
// Importación del servicio para obtener los datos del usuario actual
import AuthService from "../services/auth.service";

export default function User() {
  // Estado para almacenar la respuesta del servidor o mensajes de error
  const [message, setMessage] = useState("");
  // Obtención de los datos del usuario (incluyendo el token) desde el almacenamiento local
  const user = AuthService.getCurrentUser();

  // useEffect se ejecuta una sola vez al montar el componente (gracias al array vacío [])
  useEffect(() => {
    // Petición GET a una ruta protegida del backend
    //  DESPUÉS
    axios.get("https://glab07-backend.onrender.com/api/test/user", {
      headers: {
        // Se adjunta el token JWT en las cabeceras para autenticar la petición
        Authorization: "Bearer " + user.accessToken,
      },
    })
    .then((res) => setMessage(res.data)) // Si hay éxito, guarda el mensaje recibido
    .catch(() => setMessage("No autorizado")); // Si falla (401, 403, etc.), muestra error
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>Bienvenido 👋</h2>
        {/* Muestra el nombre de usuario usando encadenamiento opcional (?.) */}
        <p>{user?.username}</p>
        {/* Une los roles del array en un solo string separado por comas */}
        <p>{user?.roles?.join(", ")}</p>
        {/* Muestra el mensaje obtenido de la API */}
        <p>{message}</p>
      </div>
    </div>
  );
}