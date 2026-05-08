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