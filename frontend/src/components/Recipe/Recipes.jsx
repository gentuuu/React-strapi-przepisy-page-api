import { RecipeItems } from "../common/RecipeItems/RecipeItems"
import RecipeSidebar from "../common/RecipeSidebar/RecipeSidebar"


const Recipe = () => {
  return (
    <>
        <div className="recipe">
            <div className="container">
                <div className="recipe-content">
                    <RecipeSidebar />
                    <RecipeItems />
                </div>
            </div>
        </div>
    </>
  )
}

export default Recipe
