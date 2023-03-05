import React, { Component } from 'react'

export default class Celcius extends Component {
  render() {
    return (
      <div className='center'>
        <h4>{this.props.count}°Celcius</h4>
      </div>
    )
  }
}
