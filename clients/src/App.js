import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/home';
import Header from './common/header';
import Footer from './common/footer';


<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
