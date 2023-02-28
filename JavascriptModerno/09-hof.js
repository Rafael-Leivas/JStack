const array = [
  {name: 'iPhone', price: 5000, quantity: 2},
  {name: 'MacBook Pro', price: 20000, quantity: 1},
  {name: 'Magic Mouse', price: 1000, quantity: 5},
]

// .find -> buscar
const find = array.find((product) => product.price > 1000 ) 
// console.log({ find })

const findIndex = array.findIndex((product) => product.name == 'Magic Mouse' ) 
// console.log({ findIndex })

//.some & every

//Some vai retornar se tem um produto especifico com oque você pediu retornando true ou false
const some = array.some((product) => product.price <= 1000)
// console.log({ some })

//Every vai retornar true se todos os produtos forem true do contrário false
const every = array.every((product) => product.price >= 1000)
// console.log({ every })

//.map
const map = array.map((product) => ({
    ...product,
    subtotal: product.quantity * product.price,
}))
// console.log({ map })

//.filter
const filter = array.filter((product) => product.price > 1000)
// console.log(filter)

//.reduce
const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity)
}, 0)
// console.log({ reduce })