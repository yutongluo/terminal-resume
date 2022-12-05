export const ColWidth = 80
export const BulletPtIndent = 2

export const StyleConfig: { [id: string]: string } = {
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
  url: '[[bu!;#6c71c4;]'
}
