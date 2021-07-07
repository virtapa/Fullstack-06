import React from 'react'
import { connect } from 'react-redux'
//import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

//import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
  //const dispatch = useDispatch()

  const createNewAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.text.value
    event.target.text.value = ''
    props.createAnecdote(anecdote)
    props.setNotification(`New anecdote '${anecdote}' created`, 4)
  }
  return (
    <>
      <h3>create new</h3>
      <form onSubmit={createNewAnecdote}>
        <div>
          <input name="text" />
        </div>
        <button>create</button>
      </form>
    </>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
