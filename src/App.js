import { Routes, Route} from 'react-router-dom';
import './App.css';

import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
<>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/recipe/:id' element={<Recipe/>}></Route>
  <Route path='/create' element={<Create/>}></Route>
  <Route path='/search' element={<Search/>}></Route>
  </Routes>
</>
    </div>
  );
}

export default App;
