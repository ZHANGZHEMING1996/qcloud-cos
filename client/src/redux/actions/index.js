import axios from 'axios'
import Settings from '../../settings'
import { ACTIVE, EXCEPTION, SUCCESS } from '../../constants/ProgressStatus'
import cos from '../../lib/qcloud'

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

export const addProgressBar = (file, currentDir) => {
  const progressBar = {
    percent: 0,
    name: file.name,
    status: ACTIVE,
    uid: file.uid,
    currentDir
  }
  return dispatch => {
    dispatch({
      type: 'ADD_PROGRESS_BAR',
      progressBar
    })
  }
}

const setProgressStatus = (status, file) => ({
  type: 'SET_PROGRESS_STATUS',
  status,
  file
})

export const handleException = file => {
  return dispatch => {
    dispatch(setProgressStatus(EXCEPTION, file))
  }
}

export const setProgressPercent = (percent, file) => {
  return dispatch => {
    if (percent === 100) dispatch(setProgressStatus(SUCCESS, file))
    dispatch({
      type: 'SET_PROGRESS_PERCENT',
      percent,
      file
    })
  }
}

export const removeFile = (record) => {
  const params = {
    Bucket: Settings.Bucket,
    Region: Settings.Region,
    Key : record.Key
  }
  const key = record.Key

  return dispatch => {
    return new Promise(
      (resolve, reject) => {
        cos.deleteObject(params, (err, data) => {
          if(err) {
            reject(key)
         } else {
            dispatch({ type: 'REMOVE_FILE',key})
            resolve(key)
          }
        })
      }
    )
  }
}