import React, { Component } from 'react'
import Settings from '../settings'
import cos from '../lib/qcloud'
import Uploader from '../components/Uploader'
import { getCurrentDir } from '../redux/reducers'
import { connect } from 'react-redux'

class UploaderContainer extends Component {
  handleChange = (info) => {
    const { currentDir } = this.props
    const file = info.file.originFileObj
    const params = {
      Bucket: Settings.Bucket,
      Region: Settings.Region,
      Key: `${currentDir}/${file.name}`,
      Body: file
    }

    return new Promise (
      (resolve, reject) => {
        cos.sliceUploadFile(params, (err, data) => {
          if (err) {
            reject(file.name)
            console.log(err)
          }else {
            resolve(file.name)
            console.log(data)
         }
        })
       }
    )
  }

  render () {
    return (
      <div>
        <Uploader onChange={this.handleChange} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentDir: getCurrentDir(state)
})

export default connect(mapStateToProps)(UploaderContainer)