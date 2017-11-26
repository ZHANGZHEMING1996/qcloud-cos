const initState = {
  allFiles: []
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOAD_ALL_FILES':
      return {
        ...state,
        allFiles:action.allFiles
      }
    default:
      return state
  }
}

export const getAllFiles =state => state.allFiles
export const getOnlyFiles = state => {
  return state.allFiles.filter(
    t => t.Key.split('/')[1]
    )
}
export default rootReducer