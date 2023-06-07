import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, NavBar, Register, Login, UserPage, UserPanel } from "./components";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/userpanel" element={<UserPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
