import React from 'react'
import {Link} from 'react-router'
import {reduxForm} from 'redux-form'
import cx from 'classnames'

import {fetchSpaces, updateSpace, addSpace, deleteSpace} from '../actions/index.js'
import UserSelector from './user-selector.js'
import UserAvatar from './user-avatar.js'

class SpaceEdit extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  };

  constructor(props) {
    super(props)
    this.state = {
      isNew: props.params.id === 'new'
    }

    if (!this.state.isNew && !props.space) {
      this.props.fetchSpaces()
    }
  }

  componentWillReceiveProps(props) {
    // if the space id does not exist navigate away
    if (this.props.spaces && this.props.spaces.length && !props.space) {
      this.context.router.push('/')
    }
  }

  handleSubmit(values) {
    return this.props[this.state.isNew ? 'addSpace' : 'updateSpace'](values).then(() => this.context.router.push('/'))
  }

  handleDelete(event) {
    event.preventDefault()
    return this.props.deleteSpace(this.props.space.id).then(() => this.context.router.push('/'))
  }

  render() {
    const {id, created_by, title, description, featured, welcome, members} = this.props.fields

    return (<form onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))}>
      {this.state.isNew ? '' : (<div className='form-group'>
        <label>id</label>
        {id.value}
      </div>)}
      <div className='form-group'>
        <label>created by</label>
        <UserAvatar active id={created_by.value}/>
      </div>
      <div className='form-group'>
        <label>title*</label>
        <input className={cx({error: title.touched && title.error})} type='text' {...title}/>
        {title.touched && title.error && <div className='error message'>{title.error}</div>}
      </div>
      <div className='form-group'>
        <label>description*</label>
        <textarea className={cx({error: description.touched && description.error})} type='text' {...description}/>
        {title.touched && description.error && <div className='error message'>{description.error}</div>}
      </div>
      <div className='form-group horizontal'>
        <label>featured</label>
        <input type='checkbox' {...featured}/>
        <label>private</label>
        <input type='checkbox' {...this.props.fields.private}/>
        <label>welcome</label>
        <input type='checkbox' {...welcome}/>
      </div>
      <div className='form-group'>
        <label>members</label>
        <UserSelector multiple {...members}/>
      </div>
      <div className='form-group buttons'>
          {this.state.isNew ? '' : (<div className='left'>
              <div className='button danger' onClick={this.handleDelete.bind(this)}>Delete</div>
          </div>)}
          <Link to='/' className='button'>Cancel</Link>
          <button className='primary' type='submit'>Save</button>
      </div>
    </form>)
  }
}

const mapStateToProps = ({spaces}, ownProps) => {
  let space
  if (ownProps.params.id === 'new') {
    space = {created_by: 1}
  } else {
    space = spaces.find(space => space.id === parseInt(ownProps.params.id, 10))
  }

  return {
    spaces,
    space,
    initialValues: space
  }
}


const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Required'
  }

  if (!values.description) {
    errors.description = 'Required'
  }

  return errors
}

export default reduxForm({
  form: 'spaces-edit',
  fields: ['id', 'created_by', 'title', 'description', 'featured', 'private', 'welcome', 'members'],
  validate
}, mapStateToProps, {fetchSpaces, updateSpace, addSpace, deleteSpace})(SpaceEdit)
