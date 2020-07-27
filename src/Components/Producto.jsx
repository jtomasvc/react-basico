import React from 'react'

const Producto = ({producto,carrito,agregarProducto,productos}) => {

    const {nombre,precio,id} = producto

    //agregar producto al carrito

    const SeleccionarProducto = (id) =>{
        const producto =  productos.filter(producto => producto.id === id );
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    //Eliminar producto del carrito
    const EliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        //colocar los productos en el state

        agregarProducto(producto)
    }
    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>$ {precio}</p>
            {productos 
            ? ( <button 
                type="button"
                 onClick={ () => SeleccionarProducto(id) }>
                Comprar
            </button>
            )

            :
            (
                <button 
                type="button"
                 onClick={ () => EliminarProducto(id) }>
                Eliminar
            </button>
            )}
        </div>
    );
}
 
export default Producto;