import './Blogs.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Blogs = () => {

  const [artykuly, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/artykuly?populate=*');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
        <div className="page-blogs">
            <div className="container">
                <div className="page-blogs-content">
                    <div className="page-blogs-title">Nasze artykuły</div>
                    <div className="page-blogs-items">
                        {artykuly.map(blog =>(
                            <Link key={blog.id} className="page-blogs-item" to={`/artykuly/${blog.attributes.slug}`}> 
                                <div className="page-blogs-item__img">
                                    <img src={blog.attributes.Image.data.attributes.url} alt="" />
                                </div>
                                <div className="page-blogs-item-row">
                                    <div className="page-blogs-item__title">
                                        {blog.attributes.title}
                                    </div>
                                    <div className="page-blogs-item__text">{blog.attributes.Description}</div>
                                </div>  
                            </Link>
                        ))}     
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blogs
