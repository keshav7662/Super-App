import RegisterPage from './pages/RegisterPage';
import { Routes, Route } from 'react-router-dom'
import CategoryPage from './pages/CategoryPage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RegisterPage />} />
        <Route path='/genre' element={<CategoryPage />} />
      </Routes>
    </>
  );
}

export default App;
