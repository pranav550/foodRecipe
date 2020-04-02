import React from 'react';
import ReacipeItem from './RecipeItem';

const Recipes = (props) => {
    const { recipes } = props
    return (
        <div className="card-columns">
            {
                recipes.map(recipe => <ReacipeItem 
                    key={Math.random()*1000}
                    name={recipe.recipe.label} 
                    image={recipe.recipe.image} 
                    ingredientLines={recipe.recipe.ingredientLines} 
                    />)
            }
        </div>
    )

}

export default Recipes