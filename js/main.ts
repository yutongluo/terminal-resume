import { formatText } from './lib/style'
import { ResumeHelper } from './lib/resume-helper'

// hack to get jquery working
import jquery from 'jquery'
import terminal from 'jquery.terminal'
import { Greetings } from './config'
const $ = terminal(jquery, this)

const resumeHelper = new ResumeHelper()

$(document).ready(function () {
  $('#term').terminal(
    {
      help: function () {
        this.echo(formatText('bold', 'Terminal Resum&eacute;'))
        this.echo('Available commands:')
        this.echo('  ' + formatText('bold', 'whoami') + '        basic info')
        this.echo('  ' + formatText('bold', 'experience') + '    work and volunteer experience')
        this.echo('  ' + formatText('bold', 'achievements') + '      proudest moments')
        this.echo('  ' + formatText('bold', 'help  ') + '        this help screen')

        // about should always be last
        this.echo('  ' + formatText('bold', 'about') + '         about this site\n\n')
      },
      whoami: function () {
        this.echo(resumeHelper.getSection('basics'))
        this.echo(resumeHelper.getSection('education'))
        this.echo(resumeHelper.getSection('languages'))
        this.echo(resumeHelper.getSection('skills'))
        this.echo(resumeHelper.getSection('interests'))
        this.echo(resumeHelper.getSection('references'))
      },
      experience: function () {
        this.echo(resumeHelper.getSection('work'))
        this.echo(resumeHelper.getSection('volunteer'))
        this.echo(resumeHelper.getSection('awards'))
        this.echo(resumeHelper.getSection('publications'))
        this.echo(resumeHelper.getSection('projects'))
      },
      about: function () {
        this.echo('This website is made with terminal-resume.')
      }
    },
    {
      greetings: Greetings +
      'Welcome to Command Line Resum&eacute;. Type ' +
      formatText('green', 'help') + ' to start.\n',
      prompt: function (p: (arg0: string) => void) {
        p('> ')
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
