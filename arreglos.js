// Array de frutas

let frutas = ['platano', 'coco', 'fresa', 'melon', 'limon', 'naranja', 'mango', 'papaya', 'aguacate', 'durazno','cereza', 'frambuesa', 'ciruela', 'mandarina', 'kiwi', 'mamey', 'piña', 'mora']

let conteo = {
    neutras: 0,
    dulces: 0,
    semiacidas: 0,
    acidas: 0
};

let tipos = {
    platano: "dulces",
    coco: "neutras",
    fresa: "semiacidas",
    melon: "dulces",
    limon: "acidas",
    naranja: "acidas",
    mango: "semiacidas",
    papaya: "dulces",
    aguacate: "neutras",
    durazno: "semiacidas",
    cereza: "neutras",
    frambuesa: "semiacidas",
    ciruela: "dulces",
    mandarina: "acidas",
    kiwi: "acidas",
    mamey: "dulces",
    piña: "acidas",
    mora: "acidas"
};

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    let tipo = tipos[fruta];

    if (tipo) {
        conteo[tipo]++;
    }
}

console.log("neutras:", conteo.neutras);
console.log("dulces:", conteo.dulces);
console.log("semiacidas:", conteo.semiacidas);
console.log("acidas:", conteo.acidas);