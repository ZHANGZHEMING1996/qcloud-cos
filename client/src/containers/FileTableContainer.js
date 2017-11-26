import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentDirFiles } from '../redux/reducers'
import FileTable from '../components/FileTable'

class FileTableContainer extends Component {
  render () {
    return (
      <div>
      	 <FileTable currentDirFiles={this.props.currentDirFiles} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
	currentDirFiles: getCurrentDirFiles(state)
})
export default connect(mapStateToProps)(FileTableContainer)