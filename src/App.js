import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, NavBar, Register, Login, UserPage, UserPanel, GamePage, ChangePwd, CreditCard } from "./components";

import { useSelector } from 'react-redux'

function App() {
  useSelector(state => state.user)
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
        <Route path="/user/changepwd" element={<ChangePwd />} />
        <Route path="/user/creditcard" element={<CreditCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
