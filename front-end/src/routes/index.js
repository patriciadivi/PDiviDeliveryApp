import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import CustomerProducts from '../pages/customerProducts';
import Login from '../pages/login';
import Register from '../pages/register';
// import CustomerOrders from '../pages/customerOrders';

function IndexRouter() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <CustomerProducts /> } />
      {/* <Route path="/customer/orders" element={ <CustomerOrders /> } /> */}
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
