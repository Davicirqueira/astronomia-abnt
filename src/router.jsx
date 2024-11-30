import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/homes';
import PageAstros from './pages/astros';
import Cep from './pages/cep';

export default function Routers() {

    return (

        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/astros' element={<PageAstros />} />
                <Route path='/cep' element={<Cep />} />
            </Routes>

        </BrowserRouter>

    );

}