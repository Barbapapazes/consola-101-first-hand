import type { ConsolaReporter, LogObject } from 'consola'

export class JsonReporter implements ConsolaReporter {
  log(logObj: LogObject) {
    console.log(JSON.stringify(logObj))
  }
}
