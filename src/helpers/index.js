import firebase from 'firebase/app'
import 'firebase/auth'

export const getAuthHeader = async () => {
  const acessToken = await firebase.auth().currentUser.getIdToken()
  if (!acessToken) return {}
  return {
    'Content-Type': 'application/json',
    authorization: `Bearer ${acessToken}`,
  }
}
