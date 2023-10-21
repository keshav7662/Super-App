import RegisterPage from './pages/RegisterPage';
import { Routes, Route } from 'react-router-dom'
import GenrePage from './pages/GenrePage';
import './Global.css'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RegisterPage />} />
        <Route path='/genre' element={<GenrePage />} />
      </Routes>
    </>
  );
}

export default App;
