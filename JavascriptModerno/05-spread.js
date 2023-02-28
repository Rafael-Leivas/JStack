const user = {
  firstName: 'Rafael',
  lastName: 'Leivas',
  age: 17,
  instagram: '@rafae_bl',
  skills: ['back-end', 'front-end', 'mobile', 'UX/UI'],
  active:false,
}

//Spread (espalhar) operator
const updateUser = {
  ...user,
  skills: [...user.skills, 'marketing'],
  active: true,
}

console.log({user})
console.log({updateUser})