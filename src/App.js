import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, NavBar, Register, Login, UserPage, UserPanel, GamePage } from "./components";


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
        <Route path="/user/gamepage" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
