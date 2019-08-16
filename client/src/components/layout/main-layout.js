import React from 'react'
import styled from 'styled-components'
import { Header } from '@components/_Shared/header'

export const MainLayout = ({ children, user }) => {
  return (
    <React.Fragment>
      <Container>
        <Header user={user} />
        {children}
      </Container>
    </React.Fragment>
  )
}

const Container = styled.div`
  overflow-y: hidden;
  background-color: #f2f2f2;

  width: 100%;
  min-height: calc(100vh - 50px);
`
