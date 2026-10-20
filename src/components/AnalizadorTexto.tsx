export const AnalizadorTexto = () => {

  // Cuenta cuántas palabras contiene un texto.
  const contarPalabras = (texto: string): number => {
    return texto.trim().split(/\s+/).length;
  };

  // Cuenta cuántas vocales contiene un texto.
  const contarVocales = (texto: string): number => {
    const vocales = texto.match(/[aeiouáéíóú]/gi);

    return vocales ? vocales.length : 0;
  };

  // Invierte el orden de los caracteres de un texto.
  const invertirTexto = (texto: string): string => {
    return texto.split("").reverse().join("");
  };

  const texto = "Hola mundo desde TypeScript";

  return (
    <>
      <h3>Analizador de Texto</h3>

      <p>Texto: "{texto}"</p>

      <p>
        Palabras: {contarPalabras(texto)}
      </p>

      <p>
        Vocales: {contarVocales(texto)}
      </p>

      <p>
        Invertido: {invertirTexto(texto)}
      </p>
    </>
  );
};
