import React from 'react'
import { auth } from '@myfirebase'
import FirebaseContext from './context'

export default class FirebaseAuthProvider extends React.PureComponent {
  state = {
    authStatus: false,
    isUserSignedIn: false,
    user: undefined,
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({
        authStatus: true,
        isUserSignedIn: !!user,
        user,
      })
    })
  }

  render() {
    const { children } = this.props
    const { authStatus, isUserSignedIn, user } = this.state
    return <FirebaseContext.Provider value={{ isUserSignedIn, authStatus, user }}>{authStatus && children}</FirebaseContext.Provider>
  }
}
