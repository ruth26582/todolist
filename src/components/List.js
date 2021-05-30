import React, { Component } from 'react'
import {TextBorder} from './StyledComponents'

export default class List extends Component {
  render() {
    return (
      <ol>
        {
          this.props.todos.map((todo, index) => {
            return (
              <TextBorder
                key={todo.id}
                onClick={() => this.props.removeTodo(todo.id)}
              >
                {todo.text}
              </TextBorder>
            )
          })
        }
      </ol>
    )
  }
}
