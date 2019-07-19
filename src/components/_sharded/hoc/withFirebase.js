import React from 'react'
import { FirebaseContext } from '@components/auth'

export default Component => props => (
  <FirebaseContext.Consumer>
    {auth => {
      return <Component {...props} {...auth} />
    }}
  </FirebaseContext.Consumer>
)
