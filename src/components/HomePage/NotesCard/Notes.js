import React, { useEffect, useState } from 'react'
import './Notes.css'

const Notes = () => {
  const[notes,setNotes] = useState('');
  const handleNotes = (e) => {
    const saveNotes = e.target.value;
    setNotes(saveNotes);
    localStorage.setItem('notes',notes);
  }
  //loaing the notes when component re-renders
  useEffect(() => {
    setNotes(localStorage.getItem('notes') || '')
  },[])
  return (
    <div className="notes-card">
      <h1 className="notes-title">All Notes</h1>
      <div className="notes-text">
        <textarea placeholder="Write your notes here"
          onChange={handleNotes}
          value={notes}
        />
      </div>
    </div>
  )
}

export default Notes
