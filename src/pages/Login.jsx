import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Completa los campos");
      return;
    }

    AuthService.login(username, password)
      .then(() => navigate("/user"))
      .catch(() => alert("Error en login"));
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleLogin}>
        <h2>Iniciar sesión</h2>

        <input
          type="text"
          placeholder="Usuario"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}