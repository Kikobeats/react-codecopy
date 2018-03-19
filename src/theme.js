export default props =>
  Object.assign(
    {
      button: {
        color: '#24292e',
        bg: '#eff3f6',
        gradient: 'linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%)',
        border: '1px solid rgba(27, 31, 35, 0.2)',
        hover: {
          bg: 'rgb(230, 235, 241)',
          gradient:
            'linear-gradient(-180deg, rgb(240, 243, 246) 0%, rgb(230, 235, 241) 90%)',
          border: 'rgba(27, 31, 35, 0.35)'
        },
        active: {
          bg: 'rgb(233, 236, 239)',
          border: 'rgba(27, 31, 35, 0.35)'
        }
      },
      tooltip: {
        bg: '#1b1f23',
        color: '#fff'
      }
    },
    props
  )
