import './Diet.scss'
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';




const DietItem = () => {

    const [diety, setPost] = useState(null);
    const { slug } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:1337/api/diety?filters[slug]=${slug}&populate=*`);
          setPost(response.data.data[0]);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
  
      fetchData();
    }, [slug]);
  
    if (!diety) {
      return <div>Loading...</div>;
    }


  return (
    <>
        <div className="single-diet">
            <div className="container">
                <div className="single-diet-row">
                <div className="single-diet-content">
                        <div className="single-diet__title">{diety.attributes.title}</div>
                        <div className="single-diet-details">
                            <div className="single-diet__img">
                                <img src={diety.attributes.Image.data.attributes.url} alt="" />
                            </div>
                            <div className="single-diet__info">
                                {parse(diety.attributes.Description)}
                            </div>
                        </div>
                    </div>
                    <div className="single-diet-text">
                            {parse(diety.attributes.Text)}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DietItem
