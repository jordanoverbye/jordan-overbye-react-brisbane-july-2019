import highlight from '@mdx-deck/themes/syntax-highlighter-prism'

export const themes = [
  highlight,
  {
    font: 'system-ui, sans-serif',
    colors: {
      text: '#fff',
      background: '#000',
      link: '#0ff'
    },
    css: {
      fontSize: '16px',
      lineHeight: 1.4,
      textAlign: 'center',
      padding: '10%',
      '@media screen and (min-width:56em)': {
        fontSize: '32px'
      },
      '@media screen and (min-width:64em)': {
        fontSize: '40px'
      }
    },
    heading: {
      fontWeight: 'bold'
    },
    h1: {
      fontSize: '1.75em'
    },
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      fontSize: '1.75em',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    pre: {
      width: '80vw',
      height: '80vh'
    }
  }
]
