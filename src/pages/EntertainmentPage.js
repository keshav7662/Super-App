import React from 'react'
import EntertainmentCard from '../components/Entertainment/EntertainmentCard'
const EntertainmentPage = () => {
  const selectedGenre = JSON.parse(localStorage.getItem('genreChoice'))
  return (
    <>
      <EntertainmentCard genre={selectedGenre} />
    </>
  )
}

export default EntertainmentPage
