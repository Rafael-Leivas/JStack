const tech = 'Node.js'
const array = ['Node.js', 'React', 'TypeScript']

//Dentro de uma String pode pesquisar por uma parte do código
const includesString = tech.includes('Node.js')
//Para ele retornar true o array tem que ser exatamente igual oque foi passado nas ''
const includesArray = array.includes('React')

//StartsWith é para ver se se inicia igual 
const startsWith = tech.startsWith('Node')
const endsWith = tech.endsWith('Node.js')
console.log({endsWith});