import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom';

import Header from '../header'
import PopUp from '../popUpLog'

import News from '../../pages/news'
import Main from '../../pages/main'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Switch>
            <Route path='/' component={Main} exact/>
            <Route path='/news' component={News} exact/>
        </Switch>

        <PopUp/>
      </div>
    )
  }
}
