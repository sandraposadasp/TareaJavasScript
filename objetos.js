//Objeto literal

const libro = {
    titulo: 'Cuentos de Eva Luna', 
    autor: 'Isabel Allende', 
    anio: 1989, 
    estado: 'disponible',

    describirLibro(){
        console.log(`libro titulado ${this.titulo}, escrito por ${this.autor}, en el anio ${this.anio}, el estado es ${this.estado} `)
    }
};

libro.describirLibro ();

//Función constructora

function Libro(titulo, autor, anio, estado){
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;

    this.describirLibro = function(){
        console.log(`libro titulado ${this.titulo}, escrito por ${this.autor}, en el anio ${this.anio}, el estado es ${this.estado} `)
    }
}

let Libro1 = new Libro ('El mundo de Sofia', 'Jostein Gaarder', 1991, 'disponible');
Libro1.describirLibro();

let Libro2 = new Libro ('Entrevista con el vampiro', 'Anne Rice', 1976, 'prestado');
Libro2.describirLibro();