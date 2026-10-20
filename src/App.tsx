import { Calculadora } from "./components/Calculadora";
import { ConversorTemperatura } from "./components/ConversorTemperatura";
import { CalculadoraIMC } from "./components/CalculadoraIMC";
import { ValidadorEdad } from "./components/ValidadorEdad";
import { AnalizadorTexto } from "./components/AnalizadorTexto";
import { EstadisticasArreglo } from "./components/EstadisticasArreglo";
import { GeneradorPassword } from "./components/GeneradorPassword";
import { AplicadorDescuentos } from "./components/AplicadorDescuentos";
import { SistemaCalificaciones } from "./components/SistemaCalificaciones";
import { CarritoCompras } from "./components/CarritoCompras";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-5xl">

        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-blue-600 md:text-5xl">
            Práctica de Funciones
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            TypeScript + React
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">

          <section className="rounded-2xl bg-white p-6 shadow-md">
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              Ejercicio 1
            </span>
            <Calculadora />
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-md">
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              Ejercicio 2
            </span>
            <ConversorTemperatura />
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-md">
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              Ejercicio 3
            </span>
            <CalculadoraIMC />
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-md">
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              Ejercicio 4
            </span>
            <ValidadorEdad />
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-md">
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              Ejercicio 5
            </span>
            <AnalizadorTexto />
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-md">
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              Ejercicio 6
            </span>
            <EstadisticasArreglo />
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-md">
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              Ejercicio 7
            </span>
            <GeneradorPassword />
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-md">
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              Ejercicio 8
            </span>
            <AplicadorDescuentos />
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-md">
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              Ejercicio 9
            </span>
            <SistemaCalificaciones />
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-md">
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              Ejercicio 10
            </span>
            <CarritoCompras />
          </section>

        </div>

        <footer className="mt-10 text-center text-sm text-slate-500">
          Práctica de Funciones en TypeScript + React
        </footer>

      </div>
    </div>
  );
}

export default App;