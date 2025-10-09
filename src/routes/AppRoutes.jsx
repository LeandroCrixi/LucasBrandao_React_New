import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Fotos from '../pages/Fotos/Fotos';
import Musica from '../pages/Musica/Musica';
import Imprensa from '../pages/Imprensa/Imprensa';
import Shows from '../pages/Shows/Shows';
import TechRider from '../pages/TechRider/TechRider';
import Contato from '../pages/Contato/Contato';
import About from '../pages/About/About';
import Adm from '../pages/Adm/Adm';
import ScrollToTop from '../components/Utils/ScrollToTop';

const AppRoutes = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/fotos" element={<Fotos />} />
                <Route path="/musica" element={<Musica />} />
                <Route path="/imprensa" element={<Imprensa />} />
                <Route path="/shows" element={<Shows />} />
                <Route path="/techrider" element={<TechRider />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/adm" element={<Adm />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
