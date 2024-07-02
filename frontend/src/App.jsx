import { Navigate,Route,Routes } from "react-router-dom";

import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { useAuth } from "./components/context/authContext";


function App() {
  const {authUser} = useAuth();
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={authUser?<Home />:<Navigate to="/login" />} />
        <Route path="/login" element={authUser?<Navigate to="/"/>:<Login/>} />
        <Route path="/signup" element={authUser?<Navigate to="/"/>:<SignUp/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
