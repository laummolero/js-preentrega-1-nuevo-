//Este programa solicita al usuario un número de personas registradas
//en un registro y sus edades. Luego, calcula y muestra la edad promedio de
//las personas registradas.

alert(
  "Este programa solicita al usuario un numero de personas registradas en un registro y sus edades. Luego, calcula y muestra la edad promedio de las personas registradas"
);

function calcularEdadPromedio(numeroDePersonas, edadTotal) {
  return edadTotal / numeroDePersonas;
}

let numeroDePersonas = Number(
  prompt("Coloque el numero de personas registradas")
);
console.log("Numero de personas registradas: ", numeroDePersonas);

let edadTotal = 0;

for (let i = 1; i <= numeroDePersonas; i++) {
  let edad = Number(prompt("Coloque la edad de la persona: "));
  console.log(edad);
  edadTotal += edad;
}

if (numeroDePersonas > 0) {
  let edadPromedio = calcularEdadPromedio(numeroDePersonas, edadTotal);
  console.log("Edad promedio: ", edadPromedio);
} else {
  console.log("No hay personas registradas");
}
