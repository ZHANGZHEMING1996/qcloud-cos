import React, { Component } from 'react'
import Settings from '../settings'
import cos from '../lib/qcloud'

class UploaderContainer extends Component {
  handleChange = (e) => {
    const file = e.target.files[0]
    const params = {
      Bucket: Settings.Bucket,
      Region: Settings.Region,
      Key: '/aa/zhang.txt',
      Body: file
    }
    cos.sliceUploadFile(params, (err, data) => {
      if(err) {
        console.log(err)
      } else {
        console.log(data)
      }
    })
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