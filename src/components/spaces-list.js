import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'

import Space from './space.js'

class SpaceList extends React.Component {
  render() {
    return (
      <div>
        <ul className='spaces-container'>
          {this.props.spaces.map((space) => {
            return <Space key={space.id} {...space}/>
          })}
        </ul>
        <Link className='floating-action-button' to='/spaces/new'title='New Space'>+</Link>
      </div>
    )
  }
}

SpaceList.propTypes = {
  spaces: React.PropTypes.array
}

const mapStateToProps = ({spaces}) => {
  return { spaces }
}

export default connect(mapStateToProps)(SpaceList)
