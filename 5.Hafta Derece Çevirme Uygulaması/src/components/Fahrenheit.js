import React, { Component } from 'react'

export default class Fahrenheit extends Component {
  render() {
    return (
      <div className='center'>
        <h4> {(this.props.count*(9/5)+32).toFixed(2)} Fahrenheit</h4>
      </div>
    )
  }
}
