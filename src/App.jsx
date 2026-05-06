import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import User from "./pages/User";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;