import './Blog.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Blog = () => {
  
  const [artykuly, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://strapi-render-1-h1tv.onrender.com/api/artykuly?populate=*');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
        <div className="article">
            <div className="container">
                <div className="article-title">Rozwijaj Świadomość Żywieniową: Przegląd Naszych Artykułów o Zdrowym Odżywianiu</div>
                <div className="article-items">
                    {artykuly.slice(0, 3).sort(() => Math.random() - 0.5).map(blog =>(
                        <Link key={blog.id} className="article-item" to={`/artykuly/${blog.attributes.slug}`}> 
                            <div className="article-item__img">
                                <img src={blog.attributes.Image.data.attributes.url} alt="" />
                            </div>
                            <div className="article-item__title">
                                {blog.attributes.title}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog
