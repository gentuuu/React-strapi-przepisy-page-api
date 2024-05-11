import Blog from '../common/Blog/Blog'
import DietItems from '../common/DietItems/DietItems'
import Header from '../common/Header/Header'
import HCategory from '../common/Home/HCategory/HCategory'
import { RecipeItems } from '../common/RecipeItems/RecipeItems'
import RecipeSidebar from '../common/RecipeSidebar/RecipeSidebar'
import './Home.scss'

const Home = () => {
  return (
    <>
        <Header />
        <HCategory />
        <div className="recipe">
            <div className="container">
                <div className="recipe-content">
                    <RecipeSidebar />
                    <RecipeItems />
                </div>
            </div>
        </div>
        <DietItems />
        <Blog />


    </>
  )
}

export default Home
