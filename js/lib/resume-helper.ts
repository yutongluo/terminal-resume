import { Experience } from './experience'
import { formatText } from './style'
import resume from '../resume.json'
import { Basics } from './basics'

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

  printBasicInfo (): () => void {
    return function (this: any) {
      if (resume === undefined) {
        this.error('No resume.json found')
        return
      }
      const basics = resume.basics
      this.echo(formatText('heading', 'Basic info:'))
      this.echo(formatText('bold', 'Name: ') + basics.name)
      if (basics.label !== undefined && basics.label !== '') {
        this.echo(formatText('bold', 'Role: ') + basics.label)
      }
      if (basics.email !== undefined && basics.email !== '') {
        this.echo(formatText('bold', 'Email: ') + basics.email)
      }
    }
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
