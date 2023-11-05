import * as React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import homeImage from './images/homeImage.jpeg';
import Appbar from './components/AppBar';
import RecipeList from './components/RecipeList';
import './Home.css';

/**
 *
 * See the basic-react example for an example of adding and reacting to
 * changes in state and lecture 10 for details on Material-UI
 *
 * @return {object} JSX
 */
export default function Home() {
  const [recipesList, setRecipesList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.spoonacular.com/recipes/random`, {
        params: {apiKey: 'c33d1c92ed8343d7b6522ddb630cdfd4', number: 15},
      })
      .then((res) => {
        setRecipesList(res.data.recipes);
      });
  }, []);

  return (
    <div>
      <Appbar></Appbar>
      <div className='homePage'>
        <img className='homeImage' src={homeImage} alt='React' />
        <div className='homeIntro'>
          <h2 style={{fontSize: '1.7vw'}} className='intro'>
            {/* over 300,000 delicious recipes
            available from various cuisines */}
          </h2>
        </div>
      </div>
      <h2 className='explore'>Explore Recipes</h2>
      <RecipeList recipesInfo={recipesList}></RecipeList>
    </div>
  );
}
