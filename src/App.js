import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HatsPage = () =>
  <div>
    <h1>HATS PAGE</h1>
  </div>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hats" element={<HatsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
