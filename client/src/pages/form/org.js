import React from 'react'
import styled from 'styled-components'

const OrgForm = () => {
  return <FormContainer>test</FormContainer>
}

export default OrgForm

const FormContainer = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 5% 5% 60px 5%;
  }
  padding: 3% 5% 60px 5%;
`
