const user = {
  firstName: 'Rafael',
  lastName: 'Leivas',
  full_name: 'Nome completo',
  age: 17,
  instagram: '@rafae_bl',
  skills: ['back-end', 'front-end', 'mobile', 'UX/UI'],
}

//Rest (Resto) operator
const { firstName, skills, ...restoUser } = user
const [primary, ...restoSkills] = skills

console.log(restoSkills)