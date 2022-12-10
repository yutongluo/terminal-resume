import { formatText } from '../lib/style'
import type { ISection } from './isection'

interface JsonLanguage {
  language: string
  fluency: string
}

export class Language implements ISection {
  private readonly language: JsonLanguage

  constructor (language: JsonLanguage) {
    this.language = language
  }

  public toString = (): string => {
    const fluencyStr = this.language.fluency === undefined ? '' : ` - ${this.language.fluency}`
    return formatText('bold', this.language.language + fluencyStr + '\n')
  }
}
