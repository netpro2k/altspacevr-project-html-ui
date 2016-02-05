import React from 'react'

import {connect} from 'react-redux'
import cx from 'classnames'

export default class UserAvatar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.user) {
      return <div/>
    }
    const {email, first_name, last_name} = this.props.user
    const {active} = this.props

    const userClass = cx('user-avatar', {
      'inactive': !active,
      'active': active
    })
    return (
      <div className={userClass}>
        <img onClick={this.props.onClick} title={`${first_name} ${last_name}`} src={`http://api.adorable.io/avatars/32/${email}${first_name}${last_name}`}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(user => user.id === parseInt(ownProps.id, 10))
  return { user }
}

export default connect(mapStateToProps)(UserAvatar)
