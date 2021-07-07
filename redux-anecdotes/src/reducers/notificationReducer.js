let notifTimer = null

const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.message
    case 'REMOVE_MESSAGE':
      return null
    default:
      return state
  }
}

export const setNotification = (content, sec) => {
  if (notifTimer != null) {
    clearInterval()
  }
  return async (dispatch) => {
    dispatch({
      type: 'SET_MESSAGE',
      message: content,
    })
    notifTimer = setTimeout(() => {
      dispatch(removeNotification())
    }, sec * 1000)
  }
}

export const removeNotification = () => {
  return { type: 'REMOVE_MESSAGE' }
}

export default notificationReducer
