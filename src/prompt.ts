import { createConsola } from 'consola'

async function main() {
  const consola = createConsola()

  const name = await consola.prompt('What is your name?', {
    placeholder: 'John Doe',
    type: 'text',
  })

  const isAdult = await consola.prompt('Are you an adult?', {
    type: 'confirm',
  })

  const favoriteColor = await consola.prompt('What is your favorite color?', {
    type: 'select',
    options: ['red', 'blue', 'green'],
    required: true,
  })

  const favoritePets = await consola.prompt('What are your favorite pets?', {
    type: 'multiselect',
    options: ['dog', 'cat', 'bird', 'fish'],
  })

  consola.success(`Hello ${name}!`)
  consola.success(`You are ${isAdult ? 'an adult' : 'not an adult'}!`)
  consola.success(`Your favorite color is ${favoriteColor}!`)
  consola.success(`Your favorite pets are ${favoritePets.join(', ')}!`)
}

main()
