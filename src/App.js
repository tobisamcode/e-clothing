import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSingUpPage from "./pages/sign-in-&-sign-up/sign-in-&-sign-up.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSingUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
