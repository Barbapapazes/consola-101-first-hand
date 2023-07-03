import { createConsola } from 'consola'

const consola = createConsola()

consola.box({
  title: 'Hello World!',
  message: 'This is a box message',
  style: {
    borderColor: 'red',
    borderStyle: 'double',
    padding: 1,
    margin: 1,
  },
})
