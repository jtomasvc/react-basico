import React, {Fragment,useState} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Producto from './Components/Producto';
import Carrito from './Components/Carrito';

function App() {
  //Crear listado productos

  const [productos, GuardarProductos] = useState([
    {id: 1, nombre: 'Camisa React', precio: 50},
    {id: 2, nombre: 'Camisa Angular', precio: 40},
    {id: 3, nombre: 'Camisa VUE', precio: 30},
    {id: 4, nombre: 'Camisa PHP', precio: 20},
  ]);
  

  //State para un carrito de compras

  const [carrito, agregarProducto]=  useState([]);

  //obtener la fecha
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header
        titulo='Tienda Virtual'
      />
      <h1>Lista de productos</h1>
      {productos.map(producto =>(
        <Producto
          key = {producto.id}
          producto = {producto}
          carrito = {carrito}
          productos = {productos}
          agregarProducto = {agregarProducto} 
        />
      ))}

      <Carrito
        carrito = {carrito}
        agregarProducto = {agregarProducto}
      />

      <Footer
        fecha = {fecha}
      />
    </Fragment>
  );
}

export default App;
