import React, { Component } from 'react'

export default class Kelvin extends Component {
  render() {
    return (
      <div className='center'>
        <h4>{(this.props.count+273.15).toFixed(2)} Kelvin  </h4>
      </div>
    )
  }
}
