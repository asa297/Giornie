import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Icon, Button } from 'antd'
import styled from 'styled-components'
import { Formik, Field } from 'formik'
import { Redirect } from 'react-router-dom'

import { Action } from '@stores/actions'
import { authSelectors } from '@stores/selectors'
import { FieldInput } from '@components/input'
import { LoginSchema } from '@helpers/validators'
import { withFirebase } from '@components/hoc'

class LoginPage extends React.PureComponent {
  render() {
    const { isLoading, Login, isUserSignedIn } = this.props
    if (isUserSignedIn) {
      return <Redirect to="/" />
    }

    return (
      <Container>
        <LoginFormContainer>
          <Formik
            initialValues={{}}
            validationSchema={LoginSchema}
            onSubmit={values => Login(values)}
            render={props => (
              <form onSubmit={props.handleSubmit}>
                <Field
                  name="email"
                  component={FieldInput}
                  value={props.values.email}
                  onChange={props.handleChange}
                  placeholder="email"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
                <Field
                  name="password"
                  component={FieldInput}
                  value={props.values.password}
                  onChange={props.handleChange}
                  type="password"
                  placeholder="password"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />

                <SubmitContainer>
                  <SubbmitButton type="primary" htmlType="submit" icon="login" loading={isLoading}>
                    Login
                  </SubbmitButton>
                </SubmitContainer>
              </form>
            )}
          />
        </LoginFormContainer>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
`

const LoginFormContainer = styled.div`
  width: 60%;
  margin: auto;
`

const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
`

const SubbmitButton = styled(Button)``

const mapStateToProps = state => {
  return {
    isLoading: authSelectors.isLoadingSelector(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Login: value => dispatch(Action.loginAction(value)),
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withFirebase,
)(LoginPage)
