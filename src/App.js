import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components";


function App() {
  return (
    <BrowserRouter>
      <div className="h-[60px] bg-purple-400 m-auto p-4">Aquí es el navbar oe</div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
