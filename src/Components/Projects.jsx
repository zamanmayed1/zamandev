import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaEye } from 'react-icons/fa';
import SwiperCore from 'swiper';

// Register the Autoplay module
SwiperCore.use([Autoplay]);


const projects = [
  { title: 'Seraton - Chrome Extention', description: 'Simplify Your Lead Generation with One Click', image: 'https://i.ibb.co/vkqWQyJ/Seraton.png' },
  { title: 'Project Two', description: 'Description for project two.', image: 'https://i.ibb.co/vkqWQyJ/Seraton.png' },
  { title: 'Project Three', description: 'Description for project three.', image: 'https://via.placeholder.com/150?text=Project+3' },
  { title: 'Project Four', description: 'Description for project four.', image: 'https://via.placeholder.com/150?text=Project+4' },
  { title: 'Project Five', description: 'Description for project five.', image: 'https://via.placeholder.com/150?text=Project+5' },
  { title: 'Project Six', description: 'Description for project six.', image: 'https://via.placeholder.com/150?text=Project+6' },
  { title: 'Project Seven', description: 'Description for project seven.', image: 'https://via.placeholder.com/150?text=Project+7' }
];
function Projects() {
  return (
    <div className="min-h-screen p-5 flex items-center animate-fade-in">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // Adjust the delay for smoother transitions
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className="py-10"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="p-5">
            <div className="relative bg-glass rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-5">
            <img
                src={project.image}
                alt={project.title}
                className="mb-4 w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl text-gr font-semibold mb-2">{project.title}</h3>
              <p className="text-wh">{project.description}</p>
              <div className='w-6 h-6  rounded-full absolute right-2 bottom-2 flex justify-center items-center shadow'>
                <FaEye className='text-[#ffffff] cursor-pointer' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
