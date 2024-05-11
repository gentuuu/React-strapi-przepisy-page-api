import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const [post, setPost] = useState(null);
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

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.attributes.title}</h1>
      <p>{post.attributes.Text}</p>
    </div>
  );
};

export default SinglePost;
