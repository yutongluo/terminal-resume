import * as style from '../lib/style'
import { ColWidth } from '../config'
import { hasContent } from '../lib/utils'

type JsonExperience = {
  position: string
  location: string
  url: string
  startDate: Date | undefined
  endDate: Date | undefined
  summary: string | undefined
  highlights: string[] | undefined
} & ({ name: string } | { organization: string }) // one of name or organization required

export class Experience {
  private readonly experience: JsonExperience

  constructor (experience: JsonExperience) {
    this.experience = experience
  }

  public toString = (): string => {
    let str = ''
    const name = 'name' in this.experience ? this.experience.name : this.experience.organization
    str += style.formatText('company', name)

    if (hasContent(this.experience.location)) {
      // right align location
      str += ' '.repeat(ColWidth - name.length - this.experience.location.length)
      str += style.formatText('violet', this.experience.location)
    }
    str += '\n'

    str += style.formatText('yellow', this.experience.position)
    if (this.experience.startDate !== undefined) {
      // right align dates
      const startDate = new Date(this.experience.startDate)
      const endDate = this.experience.endDate === undefined ? undefined : new Date(this.experience.endDate)
      const dates = style.formatDate(startDate) + '-' + style.formatDate(endDate)
      str += ' '.repeat(ColWidth - this.experience.position.length - dates.length)
      str += style.formatText('violet', dates)
    }
    str += '\n'

    if (hasContent(this.experience.url)) {
      str += style.splitLines(style.formatText('url', this.experience.url)) + '\n'
    }

    if (hasContent(this.experience.summary)) {
      str += style.splitLines(this.experience.summary as string) + '\n'
    }

    if (this.experience.highlights !== undefined) {
      this.experience.highlights.forEach(element => {
        str += style.formatBullet(element) + '\n'
      })
    }
    return str
  }
}
