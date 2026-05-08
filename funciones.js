// sistema de libros

//array de libros
let LibrosLeidos = [
    'Cuentos de Eva Luna',
    'Boulevard',
    'Obras completas de Sigmund Freud',
    'El mundo de Sofia',
    'Compañeros de la noche',
    'Asi fue',
    'Entrevista con el vampiro',
    'Los juegos del hambre'
];

function agregarLibro (titulo){
//añade un libro al array
LibrosLeidos.push(titulo);
  console.log(`"${titulo}" fue agregado`);
}

function mostrarLibrosLeidos (){
    //imprime todos los libros leidos
    console.log("Libros leídos:");
  for (let i = 0; i < LibrosLeidos.length; i++) {
    console.log(`${i + 1}. ${LibrosLeidos[i]}`);
  }
}

// Llamada a las funciones
agregarLibro('Cien años de Soledad');
mostrarLibrosLeidos();