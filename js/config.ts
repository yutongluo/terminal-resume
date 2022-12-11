import { SectionCommand } from './lib/section-command'

// modify which commands show which resume sections here
// section names need to be valid json resume key (i.e. basics, work)
export const SectionCommands: SectionCommand[] = [
  new SectionCommand('whoami', 'basic info',
    [
      'basics',
      'education',
      'languages',
      'skills',
      'interests',
      'references'
    ]),
  new SectionCommand('experience', 'work and volunteer experience',
    [
      'work',
      'volunteer'
    ]),
  new SectionCommand('achievements', 'proudest moments',
    [
      'awards',
      'publications',
      'projects'
    ])
]

// Formatting, whitespaces, indentations
export const Format = {
  CharsPerLine: 80, //  maximal number of characters that may appear on a single line
  BulletPtIndent: 2, // indentation of each bullet point
  SectionStart: '', // inserted before each section
  SectionEnd: '\n' // inserted after each section
}

// font style
export const FontStyle: { [id: string]: string } = {
  // styles
  // [[!guib;<COLOR>;<BACKGROUND>]some text]
  // b = bold, u = underlined, g = glow, i = italicized
  // See https://terminal.jcubic.pl/api_reference.php#instance_methods
  // for more options
  bold: '[[b;#fdf6e3;]',
  glow: '[[g;#fdf6e3;]',
  green: '[[;#859900;]',
  yellow: '[[;#b58900;]',
  orange: '[[;#cb4b16;]',
  magenta: '[[;#d33682;]',
  violet: '[[;#6c71c4;]',
  blue: '[[;#268bd2;]',
  cyan: '[[;#2aa198;]',
  heading: '[[bu;#268bd2;]',
  company: '[[;#268bd2;]',
  skill: '[[bg;#859900;]',
  url: '[[bu!;#6c71c4;]',
  role: '[[;#b58900;]',
  location: '[[;#cb4b16;]',
  date: '[[;#6c71c4;]'
}

export const Greetings: string =
'_    _      _                          \n' +
'| |  | |    | |                         \n' +
'| |  | | ___| | ___ ___  _ __ ___   ___ \n' +
'| |/\\| |/ _ \\ |/ __/ _ \\| \'_ ` _ \\ / _ \\\n' +
'\\  /\\  /  __/ | (_| (_) | | | | | |  __/\n' +
' \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|\n\n'
