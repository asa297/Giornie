import React from 'react'
import { compose } from 'recompose'

import { withFirebase, withProtectRoute } from '@components/_sharded/hoc'

class AboutPage extends React.PureComponent {
  render() {
    return <div>AboutPage</div>
  }
}

export default compose(
  withFirebase,
  withProtectRoute(true),
)(AboutPage)
