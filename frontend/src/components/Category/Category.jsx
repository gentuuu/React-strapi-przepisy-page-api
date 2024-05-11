import { FaChartSimple, FaClock, FaUserLarge } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Category = () => {
  const [przepisy, setPost] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/przepisy?filters[kategoria][slug]=${slug}&populate=*`);
        setPost(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [slug]);

  if (!przepisy.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="category-page">
        <div className="container">
          <div className="category-content">
            <div className="recipe-right">
              <div className="recipe-right-primary">Przepisy</div>
              <div className="recipe-right-items">
                {przepisy.map((recipe) => (
                  <Link key={recipe.attributes.slug} to={`/przepisy/${recipe.attributes.slug}`} className="recipe-item">
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
                    <div className="recipe-item__title">{recipe.attributes.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
