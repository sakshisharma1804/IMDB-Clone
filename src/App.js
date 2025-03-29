
import './App.css';

//components

import Home from './pages/Home';
import CategoryMovies from './pages/CategoryMovies';
import { routhPath } from './constants/route';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
<Router>
 <Routes>
  <Route path={routhPath.home} element ={<Home/>}/>
  <Route path={routhPath.categories} element={<CategoryMovies />}/>
  <Route path={routhPath.invalid} element={<Home />}/>
  
  </Routes>
  </Router>

    );
}
export default App;

