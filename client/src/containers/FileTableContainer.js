import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOnlyFiles } from '../redux/reducers'
import FileTable from '../components/FileTable'

class FileTableContainer extends Component {
  render () {
  	console.log('FileTableContainer',this.props.onlyFiles)
    return (
      <div>
      	FileTableContainer
        <FileTable onlyFiles={this.props.onlyFiles} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
	onlyFiles:getOnlyFiles(state)
})
export default connect(mapStateToProps)(FileTableContainer)