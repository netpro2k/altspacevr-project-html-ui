import React from 'react'
import SpaceList from './spaces-list.js'
import {connect} from 'react-redux'

import {fetchUsers, fetchSpaces} from '../actions/index.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    props.fetchSpaces()
    props.fetchUsers()
  }

  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    )
  }
}
export default connect(null, {fetchSpaces, fetchUsers})(App)
