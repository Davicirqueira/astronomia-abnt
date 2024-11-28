import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/homes';
import PageAstros from './pages/astros';

export default function Routers() {

    return (

        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/astros' element={<PageAstros />} />
            </Routes>

        </BrowserRouter>

    );

}