
import { formatText } from './style'
import { hasContent } from './utils'

class Profile {
  readonly network: string
  readonly username: string | undefined
  readonly url: string | undefined

  constructor (network: string, username: string, url: string) {
    this.network = network
    this.username = username
    this.url = url
  }

  public toString = (): string => {
    let str = ''
    str += formatText('blue', this.network)
    if (hasContent(this.username)) {
      str += '\t'
      str += formatText('blue', this.username as string)
    }

    if (hasContent(this.url)) {
      str += '\t'
      str += formatText('url', this.url as string)
    }

    return str
  }
}

interface JsonBasics {
  name: string
  label: string | undefined
  image: string | undefined
  email: string | undefined
  phone: string | undefined
  url: string | undefined
  summary: string | undefined
  profiles: Profile[] | undefined
}

export class Basics {
  private readonly basics: JsonBasics

  constructor (basics: JsonBasics) {
    this.basics = basics
  }

  public toString = (): string => {
    let str = ''
    str += formatText('heading', 'Basic info:\n')
    str += formatText('bold', 'Name: ') + this.basics.name + '\n'
    if (this.basics.label !== undefined) {
      str += formatText('bold', 'Role: ') + this.basics.label + '\n'
    }
    if (this.basics.email !== undefined) {
      str += formatText('bold', 'Email: ') + this.basics.email + '\n'
    }
    return str
  }
}
