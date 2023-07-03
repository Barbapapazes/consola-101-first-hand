import { createConsola } from 'consola'
import { version } from '../package.json'

const consola = createConsola({
  fancy: false,
  defaults: {
    tag: version,
    message: 'Default message',
  },
  level: 1,
})

consola.info('Hello World!')
consola.debug('Debugging message')
