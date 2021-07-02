import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementVote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  removeNotification,
} from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter.filter === '') return state.anecdotes

    return state.anecdotes
    .filter((anecdote) =>
      anecdote.content
        .toLowerCase()
        .includes(state.filter.filter.toLowerCase())
    )
  })
  const dispatch = useDispatch()

  dispatch({ type: 'SORT_ORDER' })
  const vote = (anecdote) => {
    console.log('vote', anecdote.id)
    dispatch(incrementVote(anecdote.id))
    dispatch(setNotification(`You voted for ${anecdote.content}`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
