const LIGHT = {
  button: {
    color: '#24292e',
    bg: '#eff3f6',
    bgImage: 'linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%)',
    border: '1px solid rgba(27, 31, 35, 0.2)',
    boxShadow: 'none',
    bgPosition: '-0.5em',
    hover: {
      bg: '#e6ebf1',
      bgImage:
        'linear-gradient(-180deg, rgb(240, 243, 246) 0%, rgb(230, 235, 241) 90%)',
      border: 'rgba(27, 31, 35, 0.35)'
    },
    active: {
      bg: '#e9ecef',
      bgImage: 'none',
      border: 'rgba(27, 31, 35, 0.35)',
      boxShadow: 'inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15)'
    }
  },
  tooltip: {
    bg: '#1b1f23',
    color: '#fff'
  }
}

const DARK = {
  button: {
    color: '#fff',
    bg: '#24292e',
    bgImage: 'linear-gradient(-180deg, #3b424a 0%, #24292e 90%)',
    border: '1px solid rgba(27, 31, 35, 0.2)',
    bgPosition: '-1px -1px',
    hover: {
      bg: '#1f2428',
      bgImage: 'linear-gradient(-180deg, #333b42 0%, #1f2428 90%)',
      border: '1px solid rgba(27, 31, 35, 0.5)',
      bgPosition: '-0.5em'
    },
    active: {
      bg: '#202428',
      border: '1px solid rgba(27, 31, 35, 0.5)',
      boxShadow: 'inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15)'
    }
  },
  tooltip: {
    bg: '#1b1f23',
    color: '#fff'
  }
}

export default theme => (theme === 'dark' ? DARK : LIGHT)
