import { formatText } from './lib/style'
import { ResumeHelper } from './lib/resume-helper'

// hack to get jquery working
import jquery from 'jquery'
import terminal from 'jquery.terminal'
import { SectionCommands, Format, Greetings } from './config'
const $ = terminal(jquery, this)

const resumeHelper = new ResumeHelper()
const promptTimeFormatOptions = { hour12: false }

$(document).ready(function () {
  const defaultCommands: any = {
    help: function () {
      this.echo(formatText('bold', 'Terminal Resum&eacute;'))
      this.echo('Available commands:')
      SectionCommands.forEach(command => {
        this.echo('  ' + formatText('bold', command.name) + ': ' + command.helpText)
      })
      this.echo('  ' + formatText('bold', 'help') + ': this help screen')
      // about should always be last
      this.echo('  ' + formatText('bold', 'about') + ': about this site\n')
    },
    about: function () {
      this.echo('This website is made with terminal-resume.\n')
    }
  }

  const sectionCommands: any = {}
  // dynamically populate sectionCommands from config
  SectionCommands.forEach(command => {
    sectionCommands[command.name] = function () {
      let str = ''
      command.sections.forEach(section => {
        str += Format.SectionStart
        str += resumeHelper.getSection(section)
        str += Format.SectionEnd
      })
      this.echo(str)
    }
  })

  const customCommands: any = {
    // insert your custom commands here
    // see https://github.com/jcubic/jquery.terminal/wiki/Getting-Started#creating-the-interpreter
    // for examples on how to use jquery-terminal
    // terminal-resume uses the object intepreter
    example: function () {
      this.echo('This is an example command.\n')
    }
  }

  $('#term').terminal(
    { ...defaultCommands, ...sectionCommands, ...customCommands },
    {
      greetings: Greetings +
      'Welcome to Terminal Resum&eacute;! Type ' +
      formatText('green', 'help') + ' to start.\n',
      prompt: function (p: (arg0: string) => void) {
        const time = new Date().toLocaleTimeString([], promptTimeFormatOptions)
        p(formatText('orange', `➜ ${time} admin@resumé ~> `))
      },
      onBlur: function () {
        // prevent losing focus
        return false
      },
      checkArity: false,
      completion: true,
      history: true
    })
})
