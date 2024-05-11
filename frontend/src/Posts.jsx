import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [przepisy, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://strapi-render-1-h1tv.onrender.com/api/przepisy');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {przepisy.map((post) => (
         <li key={post.id}>
         <Link to={`/posts/${post.attributes.slug}`}>
           <h2>{post.attributes.title}</h2>
         </Link>
         <p>{post.attributes.content}</p>
       </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
