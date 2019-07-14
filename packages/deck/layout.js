export const Light = props => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      padding: '10%',
      backgroundColor: 'white',
      overflow: 'hidden'
    }}
    {...props}
  />
)
