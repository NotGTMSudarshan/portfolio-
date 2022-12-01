import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About/About";


import './index.css'
import Intro from "./Intro/Intro";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Intro />}/> 
      <Route path="/home" element={<Navbar />}/> 
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}   

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);