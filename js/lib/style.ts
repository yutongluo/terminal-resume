import { ColWidth, StyleConfig, BulletPtIndent } from '../config'

export function formatText (format: string, text: string): string {
  if (StyleConfig[format] === undefined) {
    throw new Error(`'Invalid style ${format} selected`)
  }
  return `${StyleConfig[format] as string}${text}]`
};

export function formatDate (date: Date | undefined): string {
  if (date === undefined) {
    return 'present'
  }

  const formatter = new Intl.DateTimeFormat(
    'en-US',
    { year: 'numeric', month: 'short' })
  return formatter.format(date)
}

export function formatBullet (text: string): string {
  return '* ' + splitLines(text, BulletPtIndent)
}

/**
  * splits lines by words when line width exceeds global colWidth
  * @param str string to split
  * @param indent indentation after second line. defaults to zero
  * @returns split string
  */
export function splitLines (str: string, indent?: number): string {
  const words = str.split(' ')
  if (words === undefined) {
    return ''
  }
  let col = 0
  let newColSize = 0
  let line = ''
  let ret = ''

  indent = indent ?? 0
  const indentSpaces = ' '.repeat(indent)
  line = ''

  for (let i = 0; i < words.length;) {
    const word = words[i]
    if (word === undefined) {
      continue
    }
    newColSize = col + word.length + 1
    if (newColSize > ColWidth && line !== '') {
      // new word is not going to fit
      line += '\n'
      col = 0
      ret += line
      line = indentSpaces
    } else {
      col = newColSize
      line += `${words[i++]} `
    }
  }
  // something's left
  if (line !== '') {
    ret += line
  }

  return ret
};
