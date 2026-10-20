export const GeneradorPassword = () => {
  const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+";

  // Genera una contraseña aleatoria según la longitud y los tipos de caracteres permitidos.
  const generarPassword = (
    longitud: number,
    incluirNumeros: boolean,
    incluirSimbolos: boolean
  ): string => {
    let caracteres = letras;
    let password = "";

    if (incluirNumeros) {
      caracteres += numeros;
    }

    if (incluirSimbolos) {
      caracteres += simbolos;
    }

    for (let i = 0; i < longitud; i++) {
      const posicion = Math.floor(Math.random() * caracteres.length);
      password += caracteres[posicion];
    }

    return password;
  };

  return (
    <>
      <h3>Generador de Contraseñas</h3>

      <p>
        Básica (8): {generarPassword(8, false, false)}
      </p>

      <p>
        Media (12): {generarPassword(12, true, false)}
      </p>

      <p>
        Fuerte (16): {generarPassword(16, true, true)}
      </p>
    </>
  );
};