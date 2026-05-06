import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = AuthService.getCurrentUser();
  const navigate = useNavigate();

  const logout = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
    <nav>
      <a href="/">Inicio</a>

      {!user && <a href="/login">Login</a>}

      {user && (
        <>
          <a href="/user">Usuario</a>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      )}
    </nav>
  );
}