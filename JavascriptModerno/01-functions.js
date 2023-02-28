function minhaFunction(){
  //aqui o .this fica dentro desta variável
}

const minhaArrowFunction = () => {
  //.This dentro de uma arrow function fica no escopo que a arrow estiver dentro
}

//-formas de se utilizar Aarrow function

const hellow = () => 'Hellow Word'
console.log(hellow)
//Pode ser utilizado diretamente

const soma = () => soma >= 10 ? 'oi' : 'sai fora'
console.log(soma)