import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
// import { Login } from "./pages/Login";
// import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <div className="h-screen flex flex-col">
      {/* <Login />
      <SignUp /> */}
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
