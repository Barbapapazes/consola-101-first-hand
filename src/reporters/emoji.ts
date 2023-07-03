import type { ConsolaReporter, LogObject, LogType } from 'consola'

const TYPE_ICONS: { [k in LogType]?: string } = {
  error: '❌',
  fatal: '❌',
  ready: '✅',
  warn: '⚠️',
  info: '✍️',
  success: '✅',
  debug: '⚙️',
  trace: '➡️',
  fail: '❌',
  start: '🟢',
  log: '',
}

export class EmojiReporter implements ConsolaReporter {
  log(logObj: LogObject) {
    const args = logObj.args
    const type = logObj.type

    const emoji = TYPE_ICONS[type] ?? ''

    console.log(emoji, ...args)
  }
}
