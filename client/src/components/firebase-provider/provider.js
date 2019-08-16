import React from 'react'
import axios from 'axios'

import { firebase } from '@myfirebase'
import { getAuthHeader } from '@helpers'
import { LoadingIndicator } from '@components/_Shared/loading-indicator'

import FirebaseContext from './context'

export default class FirebaseAuthProvider extends React.PureComponent {
  state = {
    authStatus: false,
    isUserSignedIn: false,
    user: undefined,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const config = await getAuthHeader()
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/user`, config)
        user = { ...data }
      }

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
    return (
      <FirebaseContext.Provider value={{ isUserSignedIn, authStatus, user }}>
        {!authStatus && <LoadingIndicator />}
        {authStatus && children}
      </FirebaseContext.Provider>
    )
  }
}
