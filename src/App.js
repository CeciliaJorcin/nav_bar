import NavBar from "./components/nav_bar/NavBar";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <div id="about" className="section-top h-screen bg-gray-200">
        <h1>About Us</h1>
      </div>
      <div id="product" className="section h-screen bg-gray-300">
        <h1>Product</h1>
      </div>
      <div id="clients" className="section h-screen bg-gray-200">
        <h1>Our Clients</h1>
      </div>
      <div id="contact" className="section h-screen bg-gray-300">
        <h1>Contact us</h1>
      </div>
    </div>
  );
}

export default App;
