import React from 'react'
import {Link} from 'react-router'

import UserAvatar from './user-avatar.js'

export default class Space extends React.Component {
  render() {
    const {id, title, description, welcome, featured, created_by} = this.props
    return (
      <Link to={`/spaces/${id}`} className='space-item' style={{backgroundImage: `url(http://lorempixel.com/300/200/abstract/${id % 10})`}}>
        <UserAvatar active id={created_by} />
        <div className='body'>
          {description}
        </div>
        <div className='header'>
          <h1>{title}</h1>
          <div className='icons'>
            {welcome ? <div title='welcome space' className='welcome'/> : ''}
            {this.props.private ? <div title='private space' className='private'/> : ''}
          </div>
        </div>
        {featured ? <div title='featured space' className='featured'/> : ''}
      </Link>
    )
  }
}
