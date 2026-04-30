console.log("Hola")

let nota = 80
console.log(nota)

if (nota > 0) {

     if (nota >= 90) {
    console.log("Excelente");

     } else if (nota >= 75 && nota <= 89) {
        console.log("Bien");

    } else if (nota >= 60 && nota <= 74) {
        console.log("Suficiente");

     } else if (nota < 60) {
        console.log("No aprueba");
    }

} else {
    console.log("La nota debe ser mayor que 0");
}