import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store/index'

import './styles/index.sass'

import List from './components/List'

const App = () => {
  return <Provider store={store}>
    <div className='container'>
      <p className='container__title'>Top 20 most popular movies</p>
      <List />
    </div>
  </Provider>
}

ReactDOM.render(<App />, document.querySelector('#root'))
