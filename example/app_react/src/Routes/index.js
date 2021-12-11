import React from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './Home';
import About from './About';

const RoutesIndex = () => {
    return <BrowserRouter basename={process.env.REACT_APP_BASE_URL} >
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
}

export default RoutesIndex;
