import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Login from '../pages/login';
import Register from '../pages/register';
import CustomerProducts from '../pages/customerProducts';

// import Catalogo from "../pages/catalago";
// import CatalogoId from "../components/catalogo.id";
// import NotFound from "../pages/notfound";
// import Store from "../pages/store";
// import Perfil from "../pages/perfil";
// import Loja from "../pages/loja";
// import Clube from "../pages/clube";
// import AppWine from "../pages/appWine";
// import Eventos from "../pages/eventos";
// import Ofertas from "../pages/ofertas";
// import PlanosId from "../pages/planos.id";

function IndexRouter() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <CustomerProducts /> } />
      {/* <Route path="/produtos" element={<Catalogo />} />
      <Route path="/catalogo/:id" element={<CatalogoId />} />
      <Route path="/store" element={<Store />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/clube" element={<Clube />} />
      <Route path="/loja" element={<Loja />} />
      <Route path="/app" element={<AppWine />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/planos/:id" element={<PlanosId />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default IndexRouter;
