import { consola } from 'consola'

consola.log('Hello World!')

consola.debug('Debugging message')
consola.info('Info message')
consola.start('Start message')
consola.ready('Ready message')
consola.success('Success message')
consola.warn('Warning message')
consola.error(new Error('Error message'))
consola.fatal(new Error('Fatal message'))
