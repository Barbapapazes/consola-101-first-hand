import { createConsola } from 'consola'
import { EmojiReporter } from './reporters/emoji'

const consola = createConsola({
  reporters: [
    new EmojiReporter(),
  ],
})

consola.info('Hello World!')
consola.start('Start Hello World!')
consola.fail(new Error('Fail Hello World!'))
