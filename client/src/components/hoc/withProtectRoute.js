import React from 'react'
import { Redirect } from 'react-router-dom'
import { firebase } from '@myfirebase'

export default protectRoute => Component => props => {
  const user = firebase.auth().currentUser

  if (!user && protectRoute) {
    return <Redirect to="/login" />
  }

  return (
    <React.Fragment>
      <Component {...props} />
    </React.Fragment>
  )
}
