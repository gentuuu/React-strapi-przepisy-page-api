import './Blog.scss';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';




const BlogItem = () => {

  const [artykuly, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/artykuly?filters[slug]=${slug}&populate=*`);
        setPost(response.data.data[0]);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [slug]);

  if (!artykuly) {
    return <div>Loading...</div>;
  }


  return (
    <>
        <div className="page-blog">
            <div className="container">
                <div className="page-blog-row">
                    <div className="page-blog-content">
                        <div className="page-blog__img">
                            <img src={artykuly.attributes.Image.data.attributes.url} alt="" />
                        </div>
                        <div className="page-blog-right">
                            <div className="page-blog__title">{artykuly.attributes.title}</div>
                            <div className="page-blog__desc">{parse(artykuly.attributes.Description)} </div>
                        </div>
                    </div>
                    <div className="page-blog__text">
                        {parse(artykuly.attributes.Text)}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


export default BlogItem
