import React from 'react'
import styled from 'styled-components'

export const LoadingIndicator = () => {
  return <LargeLabel>Loading...</LargeLabel>
}

const LargeLabel = styled.label`
  font-size: 50px;
`
