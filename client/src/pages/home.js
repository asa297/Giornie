import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import styled from 'styled-components'
import { Action } from '@stores/actions'
import { authSelectors } from '@stores/selectors'

class HomePage extends React.PureComponent {
  render() {
    return (
      <Container>
        HomePage
        <Button type="primary" onClick={() => this.props.history.push('/login')}>
          Login
        </Button>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
`

const mapStateToProps = state => {
  return {
    test: authSelectors.isLoadingSelector(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Login: value => dispatch(Action.loginAction(value)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage)
