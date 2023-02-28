const user = {
  firstName: 'Rafael',
  lastName: 'Leivas',
  full_name: 'Nome completo',
  age: 17,
  instagram: '@rafae_bl',
  skills: ['back-end', 'front-end', 'mobile', 'UX/UI'],
}

//Destructuring
const { firstName, age, skills, full_name: fullName } = user
const [primary, secondary, tertiary, quaternary] = skills

console.log(fullName)