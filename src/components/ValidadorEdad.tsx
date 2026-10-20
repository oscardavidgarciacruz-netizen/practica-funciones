export const ValidadorEdad = () => {

  // Determina si una persona es mayor de edad.
  const esMayorDeEdad = (edad: number): boolean => {
    return edad >= 18;
  };

  // Devuelve un mensaje según la edad de la persona.
  const obtenerMensaje = (edad: number): string => {
    if (esMayorDeEdad(edad)) {
      return "Puede votar";
    }

    return `Le faltan ${18 - edad} años`;
  };

  const edades = [15, 18, 25, 12];

  return (
    <>
      <h3>Validador de Edad</h3>

      {edades.map((edad, i) => (
        <p key={i}>
          Edad {edad}: {obtenerMensaje(edad)}
        </p>
      ))}
    </>
  );
};