let productos = [];
let catalogo
let inputCantidad

class maquillaje {
    constructor(nombreproducto, precioCompra, cantidad) {
        this.nombreproducto = nombreproducto.toUpperCase();
        this.precioCompra = precioCompra;
        this.cantidad = cantidad;
    }
    totalPrecioproducto = () => this.precioCompra * this.cantidad;

}
function inicializarElementos() {
    catalogo = document.getElementById("cantidad")
    inputCantidad = document.getElementById("inputCantidad")
} 
function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
  }
  
  function validarFormulario(event) {
    event.preventDefault();
    let cantidad = parseInt(inputCantidad.value);
  
    const idExiste = productos.some((producto) => producto.id === idProducto);
    if (!idExiste) {
      let producto = new Producto(
        cantidad
      );
  
      productos.push(producto);
      formulario.reset();
  
      pintarProductos();
    } else {
      alert("El id ya existe");
    }
  }