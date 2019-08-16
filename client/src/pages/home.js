import React from 'react'
import { Button } from 'antd'
import { compose } from 'recompose'
import styled from 'styled-components'

import { withFirebase } from '@components/hoc'
import { Action } from '@stores/actions'
import { authSelectors } from '@stores/selectors'
import { MainLayout } from '@components/layout/main-layout'

export const HomePage = props => {
  console.log(props)
  const { user } = props
  return (
    <MainLayout user={user}>
      HomePage
      <Button type="primary" onClick={() => this.props.Login({ email: 'makejack4@gmail.com', password: '026936804' })}>
        Login
      </Button>
    </MainLayout>
  )
}

export default compose(withFirebase)(HomePage)
