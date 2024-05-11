import './RecipeSidebar.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RecipeSidebar = () => {
 
  const [kategorie, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://strapi-render-1-h1tv.onrender.com/api/kategorie?populate=*');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="recipe-left">
        <div className="recipe-left-primary">Kategorie przepisów</div>
        <div className="recipe-left-items">
          {kategorie.map(category => (
            <Link key={category.id} to={`/kategorie/${category.attributes.slug}`} className="recipe-left-item">
              <div className="recipe-left-item__img">
                <img src={category.attributes.image.data.attributes.url} alt="" />
              </div>
              <div className="recipe-left-item__text">
                <div className="recipe-left-item__text-title">{category.attributes.title}</div>
                <div className="recipe-left-item__text-text">{category.attributes.text.substring(0, 50)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecipeSidebar;
