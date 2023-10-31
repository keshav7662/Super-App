import React, { useEffect, useState } from 'react'
import profileImage from '../../assets/user-entertainment.png'
import './EntertainmentCard.css'
import { useNavigate } from 'react-router-dom'
const EntertainmentCard = ({ genre }) => {
    const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?'
    const API_KEY = 'api_key=af1b76109560756a2450b61eff16e738'
    const IMG_URL = 'http://image.tmdb.org/t/p/w500'
    const [genreId, setGenreId] = useState([]);
    const [recievedResponse, setRecievedResponse] = useState([]);
    const navigate = useNavigate();
    const genres = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]
    useEffect(() => {
        const getId = genre.map((name) => {
            const matching = genres.find((item) => item.name === name)
            return matching ? matching.id : null
        })
        setGenreId(getId);

        const fetchMovie = async () => {
            const fullUrl = `${BASE_URL}${API_KEY}&with_genres=${genreId.join(',')}`
            const response = await fetch(fullUrl)
            const data = await response.json();
            setRecievedResponse(data.results.splice(4,4));
        }
        fetchMovie();
    }, [])
    const profileToggle = () => {
        navigate('/browse')
    }
    return (
        <>
            <div className="wrapper">
                <nav id='navbar'>
                    <h2>Super app</h2>
                    <img src={profileImage} alt="" 
                        onClick={profileToggle}
                        style={{cursor:'pointer'}}
                    />
                </nav>
                <div className="hero">
                    <p style={{ fontSize: '1.2rem', letterSpacing: '0.1rem' }}>Entertainment according to choice!</p>
                    <div className="genre-card">
                        {
                            genre.map((name) => (
                                <>
                                    <h3>{name}</h3>
                                    <div className="movie-cards">
                                    {
                                        recievedResponse.map((data) => (
                                            
                                            <img src={IMG_URL+data.poster_path} alt="" />
                                        ))
                                    }
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default EntertainmentCard
