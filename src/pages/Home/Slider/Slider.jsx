
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Slider/style.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/88WHd79/single-family-home-image.jpg" alt="" /></SwiperSlide>

        <SwiperSlide><img src="https://i.ibb.co/c8ZZd9J/town-house.jpg" alt="" /></SwiperSlide>

        <SwiperSlide><img src="https://i.ibb.co/mvnzJYL/apartment-image.jpg" alt="" /></SwiperSlide>

        <SwiperSlide><img src="https://i.ibb.co/B65dNt4/vacation-rental-image.jpg" alt="" /></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;