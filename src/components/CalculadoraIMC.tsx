export const CalculadoraIMC = () => {

  // Calcula el IMC usando peso y altura.
  const calcularIMC = (peso: number, altura: number): number => {
    return peso / (altura * altura);
  };

  // Clasifica el IMC según su valor.
  const clasificarIMC = (imc: number): string => {
    if (imc < 18.5) {
      return "Bajo peso";
    }

    if (imc < 25) {
      return "Normal";
    }

    if (imc < 30) {
      return "Sobrepeso";
    }

    return "Obesidad";
  };

  const peso = 70;
  const altura = 1.75;

  const imc = calcularIMC(peso, altura);

  return (
    <>
      <h3>Calculadora de IMC</h3>

      <p>
        Peso: {peso} kg | Altura: {altura} m
      </p>

      <p>
        IMC: {imc.toFixed(2)}
      </p>

      <p>
        Clasificación: <strong>{clasificarIMC(imc)}</strong>
      </p>
    </>
  );
};