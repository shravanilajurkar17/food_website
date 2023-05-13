import "./App.css";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import {Services} from "./components/Services";
import {Ourteam} from "./components/Ourteam";
import {Contact} from "./components/Contact";
import {Address} from "./components/Address";
import {Signup} from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import { Order } from "./components/Order";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exactly path="/" element={<Home />} />
        <Route exactly path="/services" element={<Services />} />
        <Route exactly path="/ourteam" element={<Ourteam />} />
        <Route exactly path="/contact" element={<Contact />}/>
        <Route exactly path="/address" element={<Address />}/>
        <Route exactly path="/login" element={<Login />} />
        <Route exactly path="/signup" element={<Signup />} />
        <Route exactly path="/order" element={<Order />} />


      </Routes>
    </div>
  );
}

export default App;
