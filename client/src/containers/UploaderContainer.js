import React, { Component } from 'react'

class UploaderContainer extends Component {
  handleChange = (e) => {
    const file = e.target.files[0]
    console.log('UploaderContainer', file)
  }

  render () {
    return (
      <div>
        <input type="file" onChange={ this.handleChange } />
      </div>
    )
  }
}

export default UploaderContainer