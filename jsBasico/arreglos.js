/*VECTORES Y MATRICES*/
let vec = []

let mat = []

vec = [1,2,3,4]
mat = [[1,2], [3,4]]


console.log('vec sub 1 => ',vec[1])

console.log(`mat sub 1 sub 0 ${mat[1][0]}`)


/*OBJETOS*/

let obj = {
  nombre: 'Angel',
  apellido: 'Magaquian',
  edad: 24,
  registrado: true
}

vec = [
  {
  nombre: 'Angel',
  apellido: 'Magaquian',
  edad: 24,
  registrado: true,
  subs: ['netflix', 'HBO', 'Spotify']
  },
  {
  nombre: 'Juan',
  apellido: 'Magaquian',
  edad: 32,
  registrado: false,
    subs:[]
  }
]

console.log(`subs de ${vec[0].nombre} ${vec[0].subs}`)