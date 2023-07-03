import { consola } from 'consola'

consola.start('Starting the application...')

consola.pauseLogs()

consola.info('This message will not be logged to the console before resumeLogs() is called')

console.log('This message will be logged to the console because it is not logged by consola')

consola.resumeLogs()

consola.success('This message will be logged to the console because resumeLogs() was called after messages between pauseLogs() and resumeLogs()')
