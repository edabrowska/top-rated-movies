import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store/index'

import './styles/index.sass'

import List from './components/List'
import Modal from './components/Modal'

const App = () => {
  return <Provider store={store}>
    <div className='container'>
      <h1 className='container__title'>Top 20 most popular movies</h1>
      <List />
    </div>
    <Modal />
  </Provider>
}

ReactDOM.render(<App />, document.querySelector('#root'))
