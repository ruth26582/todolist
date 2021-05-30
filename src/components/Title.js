import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <h2>代辦事項清單({this.props.todos.length})</h2>
        )
    }
}
