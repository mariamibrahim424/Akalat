import * as React from 'react';
import Appbar from './components/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import RecipeList from './components/RecipeList';
import ingredientsImage from './images/ingredients.jpeg';
import './Ingredients.css';
/**
 *
 * establishes all the routes in the app
 *
 * @return {object}
 */
export default function Ingredients() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipiesInfo] = useState([]);
  const regex = new RegExp('[^,]+ ');

  const getIngredients = (event) => {
    if (event.key === 'Enter') {
      setIngredients(event.target.value);
      if (regex.test(ingredients)) {
        console.log(ingredients);
        axios
          .get(`https://api.spoonacular.com/recipes/findByIngredients`, {
            params: {
              apiKey: 'c33d1c92ed8343d7b6522ddb630cdfd4',
              ingredients: ingredients,
            },
          })
          .then((res) => {
            console.log(res.data);
            recipiesFound(res.data);
          });
      } else {
        console.log('*list ingredients separated by commas');
        // modal giving user right format
      }
      console.log('Enter key pressed ✅');
      // setIngredients('');
    } else {
      setIngredients(event.target.value);
    }
  };

  /**
   * @return {object} JSX
   * @param {*} recipes
   */
  async function recipiesFound(recipes) {
    const promises = [];
    const recipeIds = recipes.map((recipe) => recipe.id);
    for (const id of recipeIds) {
      const result = axios.get(
        `https://api.spoonacular.com/recipes/${id}/information`,
        {
          params: {apiKey: 'c33d1c92ed8343d7b6522ddb630cdfd4'},
        },
      );
      promises.push(result);
    }
    const results = await Promise.all(promises);
    const actualDatas = results.map((result) => result.data);
    setRecipiesInfo(actualDatas);
  }

  return (
    <div className='Ingredients'>
      <Appbar></Appbar>
      <img className='ingredientsImage' src={ingredientsImage} alt='React' />
      <span className='searchBar'>
        <input
          className='searchInput'
          type='text'
          value={ingredients}
          placeholder='Ingredients'
          onChange={getIngredients}
          onKeyUp={getIngredients}
        />
        <span className='searchIcon'>
          {ingredients === '' ? (
            <SearchIcon></SearchIcon>
          ) : (
            <CloseIcon></CloseIcon>
          )}
        </span>
      </span>
      <RecipeList recipesInfo={recipes}></RecipeList>
    </div>
  );
}
