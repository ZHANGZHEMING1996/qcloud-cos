import axios from 'axios'
import Settings from '../../settings'

const getFirstDir = allFiles => allFiles[0].Key.split('/')[0]

export const loadAllFiles = () => {
  return dispatch => {
    axios.get(Settings.bucketUrl).then(
      res => {
        const allFiles =res.data.Contents
        dispatch({type:'LOAD_ALL_FILES',allFiles})
        dispatch(setCurrentDir(getFirstDir(allFiles)))
      }
    )
  }
}

export const setCurrentDir = (dir) => ({
  type: 'SET_CURRENT_DIR',
  dir
})

export const addFile = (filePath) => {
  return dispatch => {
    axios.get(Settings.bucketUrl).then(
      res => {
        const newFile = res.data.Contents.find(
          t => t.Key === filePath
       )
        dispatch({ type: 'ADD_FILE', newFile })
      }
    )
  }
}

export const addProgressBar = file => {
  const progressBar = {
    percent: 0,
    name: file.name,
    status: 'normal',
    uid: file.uid,
  }
  return dispatch => {
    dispatch({
      type: 'ADD_PROGRESS_BAR',
      progressBar
    })
  }
}

export const setProgressPercent = (percent, file) => {
  return dispatch => {
    dispatch({
      type: 'SET_PROGRESS_PERCENT',
      percent,
      file
    })
  }
}