import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Logo from '../assets/portfolio-image.webp';
import younessPort from '../assets/younessPort.png'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className=' h-screen  bg-black flex flex-col sm:flex-row justify-center items-center '>
      {/* Image */}
      <div className='flex-none rounded-3xl overflow-hidden mr-0 sm:mr-44 mb-8 sm:mb-0 sm:order-2'>
        <img src={younessPort} alt='Your Name' className=' h-96 rounded-3xl  w-80' />
      </div>
      {/* Content */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center text-center sm:text-left'>
        <p className='text-[#EEC33F]'>Hi, I am </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#EEC33F]'>
          Youness Manyani
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#E7E6E6]'>
          
        </h2>
        <p className='text-[#E7E6E6] py-4 max-w-[700px]'>
          Je suis un développeur full-stack spécialisé dans la création 
          d'expériences numériques exceptionnelles. Actuellement, je me concentre sur la création d'applications
          web full-stack réactives.
        </p>
        <div className="flex justify-center sm:justify-start">
          <Link to='spotlight-section' smooth={true} duration={500}>
            <button className='text-white group border-2  px-6 py-3 my-2 flex items-center hover:bg-[#EEC33F] hover:border-[#EEC33F]'>
              Voir le travail
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
