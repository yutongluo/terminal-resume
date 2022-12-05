import { formatText } from './lib/style'
import { ResumeHelper } from './lib/resume-helper'

// hack to get jquery working
import jquery from 'jquery'
import terminal from 'jquery.terminal'
const $ = terminal(jquery, this)

const resumeHelper = new ResumeHelper()

$(document).ready(function () {
  $('#term').terminal(
    {
      version: '0.1',
      help: function () {
        this.echo(formatText('bold', 'Command Line Resum&eacute;'))
        this.echo('Available commands:')
        this.echo('  ' + formatText('bold', 'whoami') + '        basic info')
        this.echo('  ' + formatText('bold', 'experience') + '    work and volunteer experience')
        this.echo('  ' + formatText('bold', 'achievements') + '      proudest moments')
        this.echo('  ' + formatText('bold', 'help  ') + '        this help screen')

        // about should always be last
        this.echo('  ' + formatText('bold', 'about') + '         about this site\n\n')
      },
      whoami: resumeHelper.printBasicInfo(),
      experience: function () {
        this.echo(resumeHelper.getWork())
        this.echo(resumeHelper.getVolunteer())
      }
    },
    {
      greetings: '[[g;#fdf6e3;]__     __    _                      _\n' +
    '\\ \\   / /   | |                    | |\n' +
    ' \\ \\_/ /   _| |_ ___  _ __   __ _  | |    _   _  ___\n' +
    '  \\   / | | | __/ _ \\| \'_ \\ / _` | | |   | | | |/ _ \\\n' +
    '   | || |_| | || (_) | | | | (_| | | |___| |_| | (_) |\n' +
    '   |_| \\__,_|\\__\\___/|_| |_|\\__, | |______\\__,_|\\___/\n' +
    '                             __/ |                    \n' +
    '                            |___/ \n\n]' +
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
