import firebase from 'firebase/app'

export const getAuthHeader = async () => {
  const acessToken = await firebase.auth().currentUser.getIdToken()
  if (!acessToken) return {}
  return {
    headers: {
      authorization: `Bearer ${acessToken}`,
    },
  }
}
