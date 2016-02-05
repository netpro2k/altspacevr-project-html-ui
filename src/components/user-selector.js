import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import UserAvatar from './user-avatar.js'

class UserSelector extends React.Component {
  static propTypes = {
    multiple: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any
  };

  handleClick(id, active) {
    const {multiple, value, onChange} = this.props

    if (multiple) {
      let val = value || []
      if (active) {
        let idx = value.indexOf(id)
        if (idx !== -1) {
          let tmp = [...val]
          tmp.splice(idx, 1)
          onChange(tmp)
        }
      } else {
        onChange([...val, id])
      }
    } else {
      onChange(id)
    }
  }

  render() {
    const users = Array.isArray(this.props.value) ? this.props.value : [this.props.value]
    const {allUsers} = this.props

    if (!users || !allUsers) {
      return <div className='members'/>
    }

    return (
      <div className='members'>
        {(allUsers).map(user => {
          const active = users.indexOf(user.id) !== -1
          return <UserAvatar key={user.id} active={active} {...user} onClick={this.handleClick.bind(this, user.id, active)}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = ({users}) => {
  return {
    allUsers: users
  }
}
export default connect(mapStateToProps)(UserSelector)
