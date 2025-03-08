// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MergePDF from "./components/MergePDF";
import SplitPDF from "./components/SplitPDF";
import CompressPDF from "./components/CompressPDF";
import ExtractPages from "./components/ExtractPages";
import ImageToPDF from "./components/ImageToPDF";
import "./styles.css";
import Fundraiser from "./components/Fundraiser";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/merge" element={<MergePDF />} />
          <Route path="/split" element={<SplitPDF />} />
          <Route path="/compress" element={<CompressPDF />} />
          <Route path="/extract-pages" element={<ExtractPages />} />
          <Route path="/image-to-pdf" element={<ImageToPDF />} />
          <Route path="/Fundraiser" element={<Fundraiser />} />           
          {/* Redirect all unknown routes to Home Page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      
    </Router>
  );
};

export default App;
