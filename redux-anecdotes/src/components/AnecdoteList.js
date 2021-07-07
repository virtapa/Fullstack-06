import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter.filter === '') return state.anecdotes

    return state.anecdotes.filter((anecdote) =>
      anecdote.content
        .toLowerCase()
        .includes(state.filter.filter.toLowerCase()),
    )
  })
  const dispatch = useDispatch()

  dispatch({ type: 'SORT_ORDER' })
  const vote = (anecdote) => {
    dispatch(incrementVote(anecdote))
    dispatch(setNotification(`You voted for ${anecdote.content}`, 4))
  }

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes} votes
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
