import React, { useState } from 'react'
import CategoryGenerator from './CategoryGenerator'
import Action from '../../assets/action.png'
import Drama from '../../assets/drama.png'
import Romance from '../../assets/romance.png'
import Thriller from '../../assets/thriller.png'
import Western from '../../assets/western.png'
import Horror from '../../assets/horror.png'
import Fantasy from '../../assets/fantasy.png'
import Music from '../../assets/music.png'
import Fiction from '../../assets/fiction.png'
import Cross from '../../assets/Cross.svg'
import Emergency from '../../assets/Emergency.svg'
import './Category.css'
import { useNavigate } from 'react-router-dom'
function SelectCategory() {
  const CategoriesData = [
    { title: 'Action', image: Action, backgroundColor: '#FF5209' },
    { title: 'Drama', image: Drama, backgroundColor: '#D7A4FF' },
    { title: 'Romance', image: Romance, backgroundColor: '#148A08' },
    { title: 'Thriller', image: Thriller, backgroundColor: '#84C2FF' },
    { title: 'Western', image: Western, backgroundColor: '#902500' },
    { title: 'Horror', image: Horror, backgroundColor: '#7358FF' },
    { title: 'Fantasy', image: Fantasy, backgroundColor: '#FF4ADE' },
    { title: 'Music', image: Music, backgroundColor: '#E61E32' },
    { title: 'Fiction', image: Fiction, backgroundColor: '#6CD061' },
  ];
  const [categories, setCategories] = useState([]);
  const[error,setError] = useState(false);
  const navigate = useNavigate();
  const handleCategory = (categoryName) => {
    // if selected category not present in array
    if (!categories.includes(categoryName)) {
      setCategories([...categories, categoryName]);
    }
    // if selected category present in an array
    else if(categories.includes(categoryName)) {
      const updatedCategories = categories.filter((category) => category !== categoryName);
      setCategories(updatedCategories);
    } 
  }
  const submitHandler = () => {
    if(categories.length < 3) {
      setError(true);
    }else {
      setError(false);
      localStorage.setItem('genreChoice',JSON.stringify(categories));
      navigate('/browse');
    }
  }
  return (
    <>
      <div className="wrapper">
        <div className="genre-category">
          <div className="show-category">
            <div className="title-caption">
              <h2 >Super app</h2>
              <p >Choose your entertainment category</p>
            </div>
            <div className="chosen-category">
            {
              categories.map((item) => (
                <div className="chosen-block">
                <p>{item}</p>
                <img src={Cross} alt="Cross-logo" 
                style={{ width: '1rem', height: '1rem' }} 
                onClick={() => handleCategory(item)} />
              </div>
              ))
            }
            { 
              error ? <p style={{color:'red'}}>
              <span ><img src={Emergency} alt="Reuired-symbol"
               style={{height:'1rem',width:'1rem',marginTop:'5%'}} />
              </span> Minimum three categories required!</p>:null 
            } 
            </div>
          </div>

          <div className='select-category'>

            {
              CategoriesData.map((data, index) => (
                <CategoryGenerator
                  key={index}
                  title={data.title}
                  image={data.image}
                  backgroundColor={data.backgroundColor}
                  onClick={() => handleCategory(data.title)}
                  isSelected = {categories.includes(data.title)}
                />
              ))
            }
          </div>
        </div>
        <div className='next-button'onClick={submitHandler}>
          <button>Next Page</button>
        </div>
      </div>

    </>

  )
}

export default SelectCategory
