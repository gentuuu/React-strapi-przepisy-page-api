import './Diet.scss'
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Diets = () => {

  const [diety, setPosts] = useState([]);
  const [przepisy, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/diety?populate=*');
        setPosts(response.data.data);

        const recipeResponse = await axios.get('http://localhost:1337/api/przepisy?populate=*');
        setRecipes(recipeResponse.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

return (
<>
    <div className="page-diet">
        <div className="container">
            <div className="page-diet-content">
                <div className="recipe-left">
                    <div className="recipe-left-primary">Popularne przepisy</div>
                    <div className="recipe-left-items">
                      {przepisy.map(recipe =>(
                            <Link key={recipe.id} to={`/przepisy/${recipe.attributes.slug}`} className="recipe-left-item">
                                <div className="recipe-left-item__img">
                                    <img src={recipe.attributes.Image.data.attributes.url} alt="" />
                                </div>
                                <div className="recipe-left-item__text">
                                    <div className="recipe-left-item__text-title">{recipe.attributes.title}</div>
                                    {/* <div className="recipe-left-item__text-text">{recipe.attributes.Description.substring(0, 30)}</div> */}
                                </div>
                            </Link>

                        ))} 
                    </div>
                </div>
                <div className="diet-items-content">
                  <div className="diet-title">
                    Zdrowe odżywianie: Smaczne i Zrównoważone Diety dla Twojego Codziennego Dobrostanu
                  </div>
                  <div className="diet-items">
                    {diety.map(diet =>(
                      <Link key={diet.id} to={`/diety/${diet.attributes.slug}`} className="diet-item"> 
                          <div className="diet-item__img">
                              <img src={diet.attributes.Image.data.attributes.url} alt="" />
                          </div>
                          <div className="diet-item__title">
                              {diet.attributes.title}
                          </div>
                          <div className="diet-item__category">
                              {parse(diet.attributes.Description.substring(0, 50))}
                          </div>
                          <div className="diet-item__btn"><img src="img/arrow-right-recipe.png" alt=""/></div>
                      </Link>
                    ))}
                  </div>
                </div>
                
            </div>
        </div>
    </div>
</>
)
}

export default Diets