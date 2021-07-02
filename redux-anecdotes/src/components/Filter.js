import React from 'react'
import { useDispatch } from 'react-redux'
import { filter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const filterValue = event.target.value
    dispatch(filter({ filter: filterValue }));
  }
  const filterStyle = {
    marginBottom: 10,
  }

  return (
    <div style={filterStyle}>
      filter <input id='filter' type="text" onChange={handleChange} />
    </div>
  )
}

export default Filter