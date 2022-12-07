import { ColWidth } from '../config'
import { formatBullet, formatDate, formatText } from '../lib/style'
import { hasContent } from '../lib/utils'

interface JsonEducation {
  institution: string
  url: string | undefined
  area: string | undefined
  studyType: string | undefined
  startDate: string | undefined
  endDate: string | undefined
  score: string | undefined
  courses: string[] | undefined
}

export class Education {
  private readonly education: JsonEducation

  constructor (education: JsonEducation) {
    this.education = education
  }

  public toString = (): string => {
    let str = ''
    str += this.education.institution
    if (this.education.startDate !== undefined) {
      const startDate = new Date(this.education.startDate)
      const endDate = this.education.endDate === undefined
        ? undefined
        : new Date(this.education.endDate)
      const dates = formatDate(startDate) + '-' + formatDate(endDate)
      str += ' '.repeat(ColWidth - this.education.institution.length - dates.length)
      str += formatText('violet', dates)
    }
    str += '\n'
    if (hasContent(this.education.url)) {
      str += formatText('url', this.education.url as string)
    }
    if (hasContent(this.education.score)) {
      const score = `GPA: ${this.education.score as string}`
      if (this.education.url !== undefined) {
        str += ' '.repeat(ColWidth - this.education.url.length - score.length)
      }
      str += score
    }
    str += '\n'
    if (this.education.courses !== undefined) {
      this.education.courses.forEach(course => {
        str += formatBullet(course) + '\n'
      })
    }
    return str
  }
}
