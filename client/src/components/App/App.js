import React from 'react';
import TodoItems from '../TodoItems/TodoItems';
import './App.css'

export default class App extends React.Component {
  render() {
    return <div className="app">
      <TodoItems />
    </div>
  }
}