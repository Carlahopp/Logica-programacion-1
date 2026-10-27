// pido los 3 numeros
let n1 = prompt("Ingresa el primer número:");
let n2 = prompt("Ingresa el segundo número:");
let n3 = prompt("Ingresa el tercer número:");

// los paso a numero
n1 = Number(n1);
n2 = Number(n2);
n3 = Number(n3);

// válido que si sean números
if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
  alert("Error, tienes que poner 3 numeros validos");
} else {
  
  // si son iguales
  if (n1 == n2 && n2 == n3) {
    alert("Los tres numeros son iguales: " + n1);
    console.log("Son iguales: " + n1 + ", " + n2 + ", " + n3);
  } else {
    
    // Mayor y menor
    let mayor = n1;
    let menor = n1;

    if (n2 > mayor) mayor = n2;
    if (n3 > mayor) mayor = n3;

    if (n2 < menor) menor = n2;
    if (n3 < menor) menor = n3;

    // el del centro es el que no es ni mayor ni menor
    let centro = n1 + n2 + n3 - mayor - menor;

    console.log("Mayor: " + mayor);
    console.log("Centro: " + centro);
    console.log("Menor: " + menor);
    console.log("De mayor a menor: " + mayor + ", " + centro + ", " + menor);
    console.log("De menor a mayor: " + menor + ", " + centro + ", " + mayor);

    alert("Mayor: " + mayor + "\nCentro: " + centro + "\nMenor: " + menor + "\n\nMayor a menor: " + mayor + ", " + centro + ", " + menor);
  }
}