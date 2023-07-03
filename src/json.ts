import { createConsola } from 'consola'
import { JsonReporter } from './reporters/json'

const consola = createConsola({
  reporters: [
    new JsonReporter(),
  ],
})

consola.info('Hello World!')
