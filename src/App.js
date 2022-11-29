import React from 'react';
import  {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Login from "./Login";

function App () {
  return (
    <>
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element= {<Login />} />
          <Route path="*" element={<Error/>} />
          
        </Routes>
      
      {/* <About />
    <Contact /> */}
    </>
  )
};

export default App;
