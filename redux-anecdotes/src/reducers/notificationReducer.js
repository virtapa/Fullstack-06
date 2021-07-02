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

export const setNotification = (content) => {
  return {
    type: 'SET_MESSAGE',
    message: content,
  }
}

export const removeNotification = () => {
  return { type: 'REMOVE_MESSAGE' }
}

export default notificationReducer
