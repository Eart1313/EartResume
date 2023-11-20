import "./App.css";
import Homepage from "./pages/Homepage.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <div className="flex flex-col items-center font-montserrat">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}
