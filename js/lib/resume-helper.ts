import { Experience } from '../sections/experience'
import { formatText } from './style'
import resume from '../resume.json'
import { Basics } from '../sections/basics'

export class ResumeHelper {
  getWork (): string {
    let str = ''
    if (resume.work !== undefined) {
      str += formatText('heading', 'WORK') + '\n'
      str += this.formatExperience(resume.work)
    }
    return str
  }

  getVolunteer (): string {
    let str = ''
    if (resume.volunteer !== undefined) {
      str += formatText('heading', 'VOLUNTEER') + '\n'
      str += this.formatExperience(resume.volunteer)
    }
    return str
  }

  getBasics (): string {
    let str = ''
    if (resume.basics !== undefined) {
      const basics = new Basics(resume.basics)
      str += basics.toString()
    }
    return str
  }

  private formatExperience (experiences: any): string {
    let str = ''
    experiences
      .forEach((exp: any) => {
        const experience = new Experience(exp
        )
        str += `${experience.toString()}\n`
      })
    return str
  }
}
