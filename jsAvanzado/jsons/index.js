import { readFile } from 'fs/promises'
const file = await readFile('./data/data.json', 'utf-8')

const peliculas = JSON.parse(file)


/* 1- El nombre de todas las peliculas que sean de un genero en especifico */

const get_gender = (gender)=>{
    let filter_movies = peliculas.filter(e=> e.genero === gender)
    let res = []
    filter_movies.forEach(e => {
        res.push({name: e.nombre})
    });

    return res
}

console.log(get_gender("Acción"))

/* 2- Todas las peliculas que su duracion sea menor a 120 minutos */

const get_time = ()=>{
    let filter_movies = peliculas.filter(e=> e.duracion < 120)
    return filter_movies
}

const filter_time_movies = get_time()
console.log("Las peliculas menores a 120 minutos son un total de: "+filter_time_movies.length)

/* 3- Todas las peliculas que tengan una clacificación entre dos valores */
const get_clas = (min, max)=>{
    let filter_movies = peliculas.filter(e=> e.clasificacion >= min && e.clasificacion <= max)
    return filter_movies
}


console.log(get_clas(3.5, 3.5))

/* 4- Todas las peliculas de un año en especifico */

const get_year = (year)=>{
    let filter_movies = peliculas.filter(e=> e.estreno === year)
    return filter_movies
}

console.log("Todas las peliculas de ese año :")
console.log( get_year(2010))


/*Encontrar la información de una sola pelicula por su nombre */

const get_name = (name)=>{
    let filter_movies = peliculas.find(e=> e.nombre === name)
    return filter_movies
}

console.log(get_name("Sinister"))