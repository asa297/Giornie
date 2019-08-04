import React from 'react'
import { firebase } from '@myfirebase'
import FirebaseContext from './context'

export default class FirebaseAuthProvider extends React.PureComponent {
  state = {
    authStatus: false,
    isUserSignedIn: false,
    user: undefined,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async user => {
      // if (user) {
      // const firestore = firebase.firestore()
      // const userData = await firestore
      //   .collection('users')
      //   .doc(user.uid)
      //   .get()
      //   .then(doc => doc.data())
      // user = { ...user, role: userData.role }
      // }

      // console.log(user)
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
