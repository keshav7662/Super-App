import React from 'react'
import './UserCard.css'
import UserImage from '../../../assets/UserImage.png'
const UserCard = () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  const genreChoice = JSON.parse(localStorage.getItem('genreChoice'))
  return (
    <>
      <div className="user-card">
        <div className="user-image">
          <img src={UserImage} alt="" />
        </div>
        <div className="user-data">
          <p className="name">{formData.name}</p>
          <p className="email">{formData.email}</p>
          <h1 className="username">{formData.userName}</h1>
          <div className="selected-genre-block">
          {
            genreChoice.map((genreName,index) => (
              <div className="selected-genre" key={index}>
              <p>{genreName}</p>
            </div>
            ))
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCard
