import './App.css';
// import Posts from './Posts';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Diets from './components/Diet/Diets';
import DietItem from './components/Diet/DietItem'
import Home from './components/Home/Home';
import Navbar from './components/common/Navbar/Navbar'
import { Footer } from './components/common/Footer/Footer'
import Recipe from './components/Recipe/Recipes'
import RecipeItem from './components/Recipe/RecipeItem'
import Blogs from './components/Blogs/Blogs'
import BlogItem from './components/common/Blog/BlogItem'
import Category from './components/Category/Category'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/przepisy' element={<Recipe />} />
        <Route path='/przepisy/:slug' element={<RecipeItem />} />
        <Route path='/diety' element={<Diets />} />
        <Route path='/diety/:slug' element={<DietItem />} />
        <Route path='/artykuly' element={<Blogs />} />
        <Route path='/artykuly/:slug' element={<BlogItem />} />
        <Route path='/kategorie/:slug' element={<Category />} />
      </Routes>
      <Footer />
  </BrowserRouter>

  );
};

export default App;
