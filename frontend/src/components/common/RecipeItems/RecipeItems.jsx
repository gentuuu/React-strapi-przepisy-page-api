import './RecipeItems.scss'
import { FaChartSimple, FaClock, FaUserLarge  } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const RecipeItems = () => {

  const [przepisy, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/przepisy?populate=*');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

    return (
    <>
        <div className="recipe-right">
            <div className="recipe-right-primary">Kulinarne Inspiracje: Odkryj Nasze Wyborne Przepisy na Zdrowe i Pyszne Posiłki</div>
            <div className="recipe-right-items">
                {przepisy.map(recipe =>(
                    <Link key={recipe.id} to={`/przepisy/${recipe.attributes.slug}`} className="recipe-item" >
                    <div className="recipe-item__img">
                        <img src={recipe.attributes.Image.data.attributes.url} alt="" />
                        <div className="recipe-item__category">
                            {recipe.attributes.kategoria.data.map(category => (
                                <div key={category.id} className="recipe-item__category-item">{category.attributes.title}</div>
                            ))}
                        </div>
                        <div className="recipe-item__hover">
                            <div className="recipe-item__hover-items">
                                <div className="recipe-item__hover-item lavel">
                                    <FaChartSimple />
                                    <p>{recipe.attributes.Level}</p>
                                </div>
                                <div className="recipe-item__hover-item time">
                                    <FaClock />
                                    <p>{recipe.attributes.Time}</p>
                                </div>
                                <div className="recipe-item__hover-item person">
                                    <FaUserLarge />
                                    <p>{recipe.attributes.Person} osoby</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-item__title">
                        {recipe.attributes.title}
                    </div>
                </Link>
                ))}
                
           
            </div>
        </div>
    </>
    )
}
