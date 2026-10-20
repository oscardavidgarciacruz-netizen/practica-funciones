export const CarritoCompras = () => {

  // Calcula el subtotal de un producto.
  const calcularSubtotal = (precio: number, cantidad: number): number => {
    return precio * cantidad;
  };

  // Calcula el IVA del 16%.
  const calcularIVA = (subtotal: number): number => {
    return subtotal * 0.16;
  };

  // Calcula el total incluyendo IVA.
  const calcularTotal = (subtotal: number): number => {
    return subtotal + calcularIVA(subtotal);
  };

  // Da formato de moneda al precio con dos decimales.
  const formatearPrecio = (precio: number): string => {
    return `$${precio.toFixed(2)}`;
  };

  const carrito = [
    { producto: "Laptop", precio: 15000, cantidad: 1 },
    { producto: "Mouse", precio: 350, cantidad: 2 },
    { producto: "Teclado", precio: 800, cantidad: 1 },
  ];

  const subtotal = carrito.reduce(
    (acumulador, item) =>
      acumulador + calcularSubtotal(item.precio, item.cantidad),
    0
  );

  return (
    <>
      <h3>Carrito de Compras</h3>

      {carrito.map((item) => (
        <p key={item.producto}>
          {item.producto} x{item.cantidad} ={" "}
          {formatearPrecio(
            calcularSubtotal(item.precio, item.cantidad)
          )}
        </p>
      ))}

      <hr />

      <p>Subtotal: {formatearPrecio(subtotal)}</p>

      <p>
        IVA (16%): {formatearPrecio(calcularIVA(subtotal))}
      </p>

      <p>
        <strong>
          Total: {formatearPrecio(calcularTotal(subtotal))}
        </strong>
      </p>
    </>
  );
};