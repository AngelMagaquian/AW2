const personas = [
  {
    name: "Juan",
    lastname: "Pérez",
    age: 30,
    technologies: ["JavaScript", "HTML", "CSS"],
    working: true
  },
  {
    name: "María",
    lastname: "González",
    age: 25,
    technologies: ["Python", "Django", "React"],
    working: false
  },
  {
    name: "Carlos",
    lastname: "Martínez",
    age: 28,
    technologies: ["Java", "Spring", "SQL"],
    working: true
  },
  {
    name: "Ana",
    lastname: "Sánchez",
    age: 22,
    technologies: ["Ruby", "Ruby on Rails", "JavaScript"],
    working: false
  },
  {
    name: "Luis",
    lastname: "López",
    age: 35,
    technologies: ["C#", ".NET", "SQL Server"],
    working: true
  }
];

let arr = [1,2,3,4,5,6,7,8,9,10]


/*
while
do while
while do
for

forEach
map
*/

let i = 0

while( i < arr.length){
  console.log('resultado = ',arr[i])
  i++
}

for(let e = 0; e < arr.length; e++){
  console.log(`resultado del for = ${arr[e]}`)
}

personas.forEach(elem => {
  console.log(`resultado del forEach `, elem)
  //console.log(elem.working ? `${elem.name} ${elem.lastname} esta trabajando actualmente` : `${elem.name} ${elem.lastname} NO esta trabajando actualmente`)
})

personas.map((e,i)=>{
  if(e.working){
    console.log(`${e.name} ${e.lastname} esta trabajando actualmente en la posicion ${i}`)
  }
  //console.log(e.working ? `${e.name} ${e.lastname} esta trabajando actualmente` : `${e.name} ${e.lastname} NO esta trabajando actualmente`)
})


























