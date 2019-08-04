import React from 'react'
import { FirebaseContext } from '@components/firebase-provider'

export default Component => props => (
  <FirebaseContext.Consumer>
    {auth => {
      return <Component {...props} {...auth} />
    }}
  </FirebaseContext.Consumer>
)
