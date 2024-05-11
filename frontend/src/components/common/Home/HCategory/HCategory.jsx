/* eslint-disable react/jsx-key */
import './HCategory.scss'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const HCategory = () => {

  const [kategorie, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/kategorie?populate=*');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
         <div className="category">
            <div className="container">
                <div className="category-items">
                    <Swiper 
                    navigation={true} 
                    modules={[Navigation]} 
                    slidesPerView={4}
                    spaceBetween={30}
                    className="mySwiper">
                        {kategorie.map(category =>(
                            <SwiperSlide>
                                <Link key={category.id} to={`/kategorie/${category.attributes.slug}`} className="category-item">
                                    <div className="category-item__img">
                                      <img src={category.attributes.image.data.attributes.url} alt="" />
                                    </div>
                                    <div className="category-item__title">{category.attributes.title}</div>
                                    <div className="category-item__all"> {category.attributes.przepisy.data.length} przepisów</div>
                                </Link>
                            </SwiperSlide>
                        ))} 
                    </Swiper>
                </div>
            </div>
        </div>
    </>
  )
}

export default HCategory
