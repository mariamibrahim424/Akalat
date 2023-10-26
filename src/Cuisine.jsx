import React from 'react';
import Appbar from './components/AppBar';
import axios from 'axios';
import {useState} from 'react';
import './Cuisine.css';
import RecipeList from './components/RecipeList';

/**
 * Simple component with no state.
 *
 * See the basic-react example for an example of adding and reacting to
 * changes in state and lecture 10 for details on Material-UI
 *
 * @return {object} JSX
 */
export default function Cuisine() {
  const [cuisineSelected, setCuisine] = useState('');
  const [cuisinesInfo, setCuisinesInfo] = useState([]);
  const possibleCuisines = [
    {name: 'African', image: require('./images/Africa.png')},
    {name: 'Asian', image: require('./images/Asia.png')},
    {name: 'American', image: require('./images/American.webp')},
    {name: 'British', image: require('./images/British.webp')},
    {name: 'Cajun', image: require('./images/Cajun.png')},
    {name: 'Caribbean', image: require('./images/Carribean.jpeg')},
    {name: 'Chinese', image: require('./images/China.webp')},
    {name: 'Eastern European', image: require('./images/EasternEurope.png')},
    {name: 'European', image: require('./images/Europe.png')},
    {name: 'French', image: require('./images/french.png')},
    {name: 'German', image: require('./images/German.webp')},
    {name: 'Greek', image: require('./images/Greek.webp')},
    {name: 'Indian', image: require('./images/Indian.png')},
    {name: 'Irish', image: require('./images/Irish.webp')},
    {name: 'Italian', image: require('./images/Italian.png')},
    {name: 'Japanese', image: require('./images/Japanese.png')},
    {name: 'Jewish', image: require('./images/Jewish.webp')},
    {name: 'Korean', image: require('./images/Korean.jpeg')},
    {name: 'Latin American', image: require('./images/LatinAmerica.jpeg')},
    {name: 'Mediterranean', image: require('./images/Mediterranean.jpeg')},
    {name: 'Mexican', image: require('./images/Mexican.jpeg')},
    {name: 'Middle Eastern', image: require('./images/MiddleEast.jpeg')},
    {name: 'Noradic', image: require('./images/Noradic.png')},
    {name: 'Southern', image: require('./images/Southern.png')},
    {name: 'Spanish', image: require('./images/spanish.webp')},
    {name: 'Thai', image: require('./images/Thai.webp')},
    {name: 'Vietnamese', image: require('./images/Vietnamese.webp')},
  ];
  const viewCuisine = (cuisine) => {
    axios
      .get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {apiKey: 'c33d1c92ed8343d7b6522ddb630cdfd4', cuisine: cuisine},
      })
      .then((res) => {
        cuisineViewed(res.data.results, cuisine);
      });
  };
  /**
   * @return {object} JSX
   * @param {*} recipes
   * @param {*} cuisine
   */
  async function cuisineViewed(recipes, cuisine) {
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
    setCuisinesInfo(actualDatas);
    setCuisine(cuisine);
  }

  return (
    <div>
      <Appbar></Appbar>
      <h1 className='cuisinesTitle'>Cuisines</h1>
      <div className='cuisineOptions'>
        {possibleCuisines?.map((cuisine) => (
          <div className='container'>
            <button
              style={{
                backgroundImage: `url(${cuisine.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              key={cuisine.name}
              onClick={() => viewCuisine(cuisine.name)}
              className='cuisineButton'
            ></button>
            <div className='cuisineName'>{cuisine.name}</div>
          </div>
        ))}
      </div>
      <div className='cuisineSelected'>{cuisineSelected}</div>
      <RecipeList recipesInfo={cuisinesInfo}></RecipeList>
    </div>
  );
}
