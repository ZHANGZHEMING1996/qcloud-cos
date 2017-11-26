import axios from 'axios'

export const loadAllFiles = () => {
  return dispatch => {
    axios.get('http://localhost:3008/bucket').then(
      res => {
        const allFiles =res.data.Contents
        dispatch({type:'LOAD_ALL_FILES',allFiles})
      }
    )
  }
}