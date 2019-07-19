import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'

const FieldInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc
  ...rest
}) => {
  const error = (touched[field.name] && errors[field.name]) || errors[field.name] ? 1 : 0
  return (
    <FieldContainer>
      <InputWrapper {...field} {...rest} error={error} />
      <ErrorText>{(touched[field.name] && errors[field.name]) || errors[field.name]}</ErrorText>
    </FieldContainer>
  )
}

export { FieldInput }

const FieldContainer = styled.div`
  padding-bottom: 15px;
`

const InputWrapper = styled(Input)`
  .ant-input {
    width: 100%;
    border: ${props => (props.error ? '1px solid red' : '1px solid #d9d9d9')};
  }
`

const ErrorText = styled.div`
  color: red;
`
