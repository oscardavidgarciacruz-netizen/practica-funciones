export const EstadisticasArreglo = () => {

  // Calcula el promedio de los números de un arreglo.
  const calcularPromedio = (nums: number[]): number => {
    const suma = nums.reduce((acumulador, numero) => acumulador + numero, 0);

    return suma / nums.length;
  };

  // Encuentra el número mayor de un arreglo.
  const encontrarMaximo = (nums: number[]): number => {
    return Math.max(...nums);
  };

  // Encuentra el número menor de un arreglo.
  const encontrarMinimo = (nums: number[]): number => {
    return Math.min(...nums);
  };

  const numeros = [8, 3, 15, 7, 22, 11, 4];

  return (
    <>
      <h3>Estadísticas</h3>

      <p>
        Números: [{numeros.join(", ")}]
      </p>

      <p>
        Promedio: {calcularPromedio(numeros).toFixed(2)}
      </p>

      <p>
        Máximo: {encontrarMaximo(numeros)}
      </p>

      <p>
        Mínimo: {encontrarMinimo(numeros)}
      </p>
    </>
  );
};