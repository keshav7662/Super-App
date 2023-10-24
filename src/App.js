import { Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage';
import GenrePage from './pages/GenrePage';
import Browse from './pages/Browse';
import './Global.css'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RegisterPage />} />
        <Route path='/genre' element={<GenrePage />} />
        <Route path='/browse' element={<Browse />} />
      </Routes>
    </>
  );
}

export default App;
