import { consola } from 'consola'

consola.start('Spam is coming...')

;(async () => {
  for (let i = 0; i < 1000; i++) {
    consola.info('Spam a lot of messages!')
    await new Promise(resolve => setTimeout(resolve, 10))
  }
  consola.success('Spam is over!')
})()
