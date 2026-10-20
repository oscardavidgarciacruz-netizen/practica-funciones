export const AplicadorDescuentos = () => {

  // Aplica un descuento a un precio usando una función callback.
  const aplicarDescuento = (
    precio: number,
    calcularDescuento: (precio: number) => number
  ): number => {
    return precio - calcularDescuento(precio);
  };

  // Calcula un descuento del 10%.
  const descuento10 = (p: number): number => {
    return p * 0.10;
  };

  // Calcula un descuento del 25%.
  const descuento25 = (p: number): number => {
    return p * 0.25;
  };

  // Calcula un descuento del 15% para estudiantes.
  const descuentoEstudiante = (p: number): number => {
    return p * 0.15;
  };

  const precio = 1000;

  return (
    <>
      <h3>Aplicador de Descuentos</h3>

      <p>Precio original: ${precio}</p>

      <p>
        Con 10% off: ${aplicarDescuento(precio, descuento10)}
      </p>

      <p>
        Con 25% off: ${aplicarDescuento(precio, descuento25)}
      </p>

      <p>
        Descuento estudiante: ${aplicarDescuento(precio, descuentoEstudiante)}
      </p>
    </>
  );
};