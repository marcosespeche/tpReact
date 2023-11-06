import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Componentes from "../pages/Componentes";
import Administracion from "../pages/Administracion";

const AppRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/componentes" element={<Componentes></Componentes>}></Route>
                <Route path="/administracion" element={<Administracion></Administracion>}></Route>
            </Routes>
        </>
    );
}

export default AppRoutes;