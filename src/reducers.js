const initialState = {
    listNames:[]
}
const todos = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO_SAGA':
        return {
            ...state,
            listNames : action.payload
        }
        case 'OPEN_WINDOW_SAGA':
          return{
            ...state,
            bodyText: action.payload
          }
      default:
        return state
    }
  }
  export default todos