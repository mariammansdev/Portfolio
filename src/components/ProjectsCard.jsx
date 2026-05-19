import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsCard = ({ url, img, github, title, text, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    if (index === 0) {
        gsap.fromTo(
        card,
        {
          opacity: 0,
          // y:50
        },
        {
          opacity: 1,
          // y:0,
          ease: 'sine.inOut'
        }
      );
      return;
    }
    
    
    gsap.fromTo(
      card,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
        },
      }
    );
  }, [index]);

  return (
    <article 
      ref={cardRef}
      className='flex rounded-xl hover:shadow-3xl duration-300 overflow-hidden h-screen w-full sticky top-0 bg-white'
      style={{ zIndex: index }}
    >
       <div 
         className='capitalize p-8 flex-1 flex flex-col'
       >
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        <p className='mt-4 text-slate-700 leading-loose flex-1'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url}>
            <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
          <a href={github}>
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>
      <div 
        className='flex-1 img-wrapper'
      >
        <img
          src={img}
          alt={title}
          className='w-full object-cover h-full'
        />
      </div>
    </article>
  );
};
export default ProjectsCard;
