import React from 'react';
import {useLocation} from 'react-router-dom';
import Appbar from './components/AppBar';
import './Recipe.css';
/**
 * Simple component with no state.
 *
 * See the basic-react example for an example of adding and reacting to
 * changes in state and lecture 10 for details on Material-UI
 *
 * @return {object} JSX
 */
export default function Recipe() {
  const location = useLocation();
  const data = location.state;
  const ingredients = data.recipe.extendedIngredients;
  const instructions = data.recipe.analyzedInstructions;
  console.log(data.recipe);
  return (
    <div className='recipe'>
      <Appbar></Appbar>
      <div className='recipeName'>{data.recipe.title}</div>
      <img className='recipeImg' src={data.recipe.image} alt={''} />
      <div
        className='recipeSummary'
        dangerouslySetInnerHTML={{__html: data.recipe.summary}}
      ></div>
      <div className='ingredientsTitle'>Ingredients</div>
      <div className='ingredientContainerList'>
        {ingredients?.map((ingredient) => (
          <span className='ingredientContainer' key={ingredient.id}>
            <div className='ingredientMeasure'>
              {' '}
              {ingredient.measures.us.amount} {ingredient.measures.us.unitShort}
            </div>
            <img
              className='ingredientImg'
              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
              alt={''}
            />
            <div className='ingredientName'> {ingredient.name}</div>
          </span>
        ))}
      </div>
      <div className='instructionsTitle'>Instructions</div>
      {instructions?.map((instruction) => (
        <div className='instructionsContainerList'>
          {/* <span className='recipeContainer'
          key={instruction.number}></span> */}
          <div className='instructionName'>{instruction.name}</div>
          {instruction.steps?.map((step) => (
            // <span className='instructionsContainer' key={step.number}>
            <div className='instructionStep'>
              {' '}
              {step.number + ')        '}
              {step.step}
            </div>
            // </span>
          ))}
        </div>
      ))}
    </div>
  );
}
