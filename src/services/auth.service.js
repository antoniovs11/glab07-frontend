// Importación de axios para realizar peticiones HTTP al servidor
import axios from "axios";

// Definición de la URL base para los endpoints de autenticación
//  DESPUÉS
const API_URL = "https://glab07-backend.onrender.com/api/auth/";

// Función para iniciar sesión enviando credenciales al backend
const login = (username, password) => {
  return axios.post(API_URL + "signin", {
    username,
    password,
  }).then((res) => {
    // Si la respuesta contiene un token de acceso, la autenticación fue exitosa
    if (res.data.accessToken) {
      // Se almacenan los datos del usuario y el token en el almacenamiento local del navegador
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    // Retorna los datos recibidos para que el componente que llama pueda manejarlos
    return res.data;
  });
};

// Función para cerrar la sesión del usuario
const logout = () => {
  // Elimina la información del usuario y el token del localStorage
  localStorage.removeItem("user");
};

// Función para recuperar los datos del usuario actualmente autenticado
const getCurrentUser = () => {
  // Convierte el string almacenado en localStorage de nuevo a un objeto JavaScript
  return JSON.parse(localStorage.getItem("user"));
};

// Exportación de los métodos como un objeto para ser utilizados en toda la aplicación
export default {
  login,
  logout,
  getCurrentUser,
};