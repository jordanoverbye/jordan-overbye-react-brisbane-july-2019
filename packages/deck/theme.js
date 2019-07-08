export default {
  font: 'system-ui, sans-serif',
  colors: {
    text: '#f0f',
    background: '#000',
    link: '#0ff'
  },
  css: {
    fontSize: '16px',
    lineHeight: 1.4,
    textAlign: 'center',
    padding: '0 10vw',
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
    padding: '1em',
    backgroundColor: '#2d262d',
    width: '80vw'
  }
}
