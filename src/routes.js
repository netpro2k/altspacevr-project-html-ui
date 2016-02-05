import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app'
import SpaceList from './components/spaces-list.js'
import SpaceEdit from './components/spaces-edit.js'

const routes = (
<Route path='/' component={App}>
  <IndexRoute component={SpaceList} />
  <Route path='spaces' component={SpaceList} />
  <Route path='spaces/:id' component={SpaceEdit} />
</Route>
)

export default routes
