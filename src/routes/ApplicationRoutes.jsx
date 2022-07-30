import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio/Inicio'
import Indicacoes from '../pages/Indicacoes/Indicacoes'
import Depoimentos from '../pages/Depoimentos/Depoimentos'
import Autora from '../pages/Autora/Autora'
import Menu from '../Componentes/Menu/Menu'


function ApplicationRoutes() {
    return(
        <BrowserRouter>
            <Menu />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="indicacoes" element={<Indicacoes/>} />
                    <Route path="depoimentos" element={<Depoimentos/>} />
                    <Route path="autora" element={<Autora />} />
                </Routes>
        </BrowserRouter>

    )
}

export default ApplicationRoutes