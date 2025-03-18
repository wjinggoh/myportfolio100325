import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import Works from "./Pages/Works"; // Import another page
import styled from "styled-components";
import Footer from "./Components/Footer";

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Router>
      <Main>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/works" element={<Works />} />
        </Routes>
        <Footer/>
      </Main>
    </Router>
  );
};

export default App;
