import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Cuisine from './Cuisine';
import Recipe from './Recipe';
import Ingredients from './Ingredients';
/**
 *
 * establishes all the routes in the app
 *
 * @return {router}
 */
export default function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine' element={<Cuisine />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/ingredients' element={<Ingredients />} />
        </Routes>
      </Router>
    </div>
  );
}
