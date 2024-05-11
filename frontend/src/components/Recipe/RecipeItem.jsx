import './Recipe.scss'
import { FaChartSimple, FaClock, FaUserLarge  } from "react-icons/fa6";
import DietItems from '../common/DietItems/DietItems';
import Blog from '../common/Blog/Blog';
import { RecipeItems } from '../common/RecipeItems/RecipeItems';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import axios from 'axios';




const RecipeItem = () => {
    
    const [przepisy, setPost] = useState(null);
    const { slug } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://strapi-render-1-h1tv.onrender.com/api/przepisy?filters[slug]=${slug}&populate=*`);
          setPost(response.data.data[0]);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
  
      fetchData();
    }, [slug]);
  
    if (!przepisy) {
      return <div>Loading...</div>;
    }


  return (
    <>
  
        <div className="page-recipe">
            <div className="container">
                <div className="page-recipe-row">
                    <div className="page-recipe-content">
                        <div className="page-recipe__title">{przepisy.attributes.title}</div>
                        <div className="page-recipe-details">
                            <div className="page-recipe__img">
                                <img src={przepisy.attributes.Image.data.attributes.url} alt="" />
                            </div>
                            <div className="page-recipe__info">
                                <div className="page-recipe-items">
                                    <div className="page-recipe-item lavel">
                                        <FaChartSimple />
                                        <p>{przepisy.attributes.Level}</p>
                                    </div>
                                    <div className="page-recipe-item time">
                                        <FaClock />
                                        <p>{przepisy.attributes.Time}</p>
                                    </div>
                                    <div className="page-recipe-item person">
                                        <FaUserLarge />
                                        <p>{przepisy.attributes.Person} osoby</p>
                                    </div>
                                </div>
                                <div className="page-recipe-ingredients">
                                    <h2>Składniki</h2>
                                    {parse(przepisy.attributes.Ingredients)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-recipe-text">
                            {parse(przepisy.attributes.Text)}
                    </div>
                </div>
                <RecipeItems />
             
            </div>
        </div>
        <DietItems />
        <Blog />
    </>
  )
}

export default RecipeItem
