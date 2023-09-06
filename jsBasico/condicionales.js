let valor1 = 1;
let valor2 = 1;
// Operadores logicos:

// AND lógico (&&)
if (valor1 && valor2) {
  console.log("es verdadero");
} else {
  console.log("es falso");
}

// OR lógico (||)
if (valor1 || valor2) {
  console.log("es verdadero");
} else {
  console.log("es falso");
}

// NOT lógico (!)
if (!valor1) {
  console.log("es verdadero");
} else {
  console.log("es falso");
}

// Operadores de igualdad (== y ===):
if (valor1 == valor2) {
  // Código a ejecutar si los valores son iguales
} else {
  console.log("es falso");
}

if (valor1 === valor2) {
  // Código a ejecutar si los valores y los tipos de datos son iguales
} else {
  console.log("es falso");
}

// Operador de desigualdad (!= y !==):
if (valor1 != valor2) {
  // Código a ejecutar si los valores no son iguales
} else {
  console.log("es falso");
}

if (valor1 !== valor2) {
  // Código a ejecutar si los valores o los tipos de datos no son iguales
} else {
  console.log("es falso");
}