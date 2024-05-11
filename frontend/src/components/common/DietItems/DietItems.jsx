import './DietItems.scss'
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const DietItems = () => {

  const [diety, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/diety?populate=*');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
        <div className="diet">
            <div className="container">
                <div className="diet-title">Odkryj Siłę Zdrowego Żywienia: Nasze Wyjątkowe Diety dla Twojego Lepszego Ja</div>
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
    </>
  )
}

export default DietItems


