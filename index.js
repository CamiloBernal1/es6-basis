//importar el componente 
const colors  = require( 'colors' )
const materias = require('./materias')

//recorrido del arreglo

materias.forEach((materia)=>{
    if(materia.instructor === 'Cristian Buitrago'){
        console.log(`name:${materia.name}, tipo:${materia.tipo}, instructor:${materia.instructor}`.bgWhite)
    }
})

//map:metodo de arreglos en es6, crea un arreglo a partir de otro

const profesores = materias.map((materia)=>{
    return materia.instructor
})

console.log(profesores)

//find: Localizar elementos uno o varios de un elemento que cumplan cierto criterio o condicion

const PHP = materias.filter((materia)=>{
    return materia.instructor === 'Cristian Buitrago'
})

console.log(PHP)