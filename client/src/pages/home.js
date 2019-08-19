import React from 'react'
import { compose } from 'recompose'

import { withFirebase } from '@components/hoc'

import { MainLayout } from '@components/layout/main-layout'

export const HomePage = props => {
  const { user } = props
  return <MainLayout user={user}>HomePage</MainLayout>
}

export default compose(withFirebase)(HomePage)
