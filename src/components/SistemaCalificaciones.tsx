export const SistemaCalificaciones = () => {

  // Calcula el promedio de un arreglo de calificaciones.
  const calcularPromedio = (calificaciones: number[]): number => {
    const suma = calificaciones.reduce(
      (acumulador, calificacion) => acumulador + calificacion,
      0
    );

    return suma / calificaciones.length;
  };

  // Obtiene una letra según el promedio del alumno.
  const obtenerLetra = (promedio: number): string => {
    if (promedio >= 90) {
      return "A";
    }

    if (promedio >= 80) {
      return "B";
    }

    if (promedio >= 70) {
      return "C";
    }

    if (promedio >= 60) {
      return "D";
    }

    return "F";
  };

  // Determina si el alumno está aprobado.
  const estaAprobado = (promedio: number): boolean => {
    return promedio >= 70;
  };

  const alumnos = [
    { nombre: "Ana", califs: [95, 88, 92] },
    { nombre: "Luis", califs: [70, 65, 72] },
    { nombre: "María", califs: [85, 90, 88] },
  ];

  return (
    <>
      <h3>Sistema de Calificaciones</h3>

      {alumnos.map((alumno) => {
        const promedio = calcularPromedio(alumno.califs);
        const letra = obtenerLetra(promedio);
        const aprobado = estaAprobado(promedio);

        return (
          <p key={alumno.nombre}>
            {alumno.nombre}: Promedio {promedio.toFixed(1)} - Letra {letra} -{" "}
            {aprobado ? "Aprobado" : "Reprobado"}
          </p>
        );
      })}
    </>
  );
};