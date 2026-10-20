export const Calculadora = () => {

  // Suma dos números y retorna el resultado.
  const sumar = (a: number, b: number): number => {
    return a + b;
  };

  // Resta dos números y retorna el resultado.
  const restar = (a: number, b: number): number => {
    return a - b;
  };

  // Multiplica dos números y retorna el resultado.
  const multiplicar = (a: number, b: number): number => {
    return a * b;
  };

  // Divide dos números. Si el divisor es 0, retorna 0.
  const dividir = (a: number, b: number): number => {
    if (b === 0) {
      return 0;
    }

    return a / b;
  };

  const a = 15;
  const b = 4;

  return (
    <>
      <h3>Calculadora</h3>

      <p>
        {a} + {b} = {sumar(a, b)}
      </p>

      <p>
        {a} - {b} = {restar(a, b)}
      </p>

      <p>
        {a} × {b} = {multiplicar(a, b)}
      </p>

      <p>
        {a} ÷ {b} = {dividir(a, b).toFixed(2)}
      </p>
    </>
  );
};