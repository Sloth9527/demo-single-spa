import React from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './Home';
import About from './About';

const RoutesIndex = () => {
    return <BrowserRouter >
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
}

export default RoutesIndex;
