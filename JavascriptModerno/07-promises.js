const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Sucesso!')
    // reject('Erro!')
  }, 1000)
})

// apiCall
//   .then((resposta) => {
//     console.log(resposta)
//   })
//   .catch((erro) => {
//     console.log(erro)
//   })

// console.log('Depois da promise...')

async function run(){
  try{
    const resposta = await apiCall
    console.log(apiCall);
    console.log('Depois da promise...')
  }catch (resposta){
    console.log(resposta)
  }
}

run()