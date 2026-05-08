import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const wrappers = gsap.utils.toArray('.project-card-wrapper');
    
    wrappers.forEach((wrapper, i) => {
      const card = wrapper.querySelector('.card');
      
      // Scale down as you scroll DOWN (card moves up and away)
      gsap.fromTo(card,
        {
          scale: 1,
        },
        {
          scale: 0.8,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
            // markers: true,
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section className='py-20 align-element' id='projects' ref={containerRef}>
      <SectionTitle text='web creations' />
      <div className='relative'>
        {projects.map((project, index) => {
          return (
            <div 
              key={project.id} 
              className='project-card-wrapper h-screen flex items-center justify-center sticky'
              style={{ 
                top: `${index * 40}px`,
                zIndex: projects.length - index
              }}
            >
              <div className='w-full max-w-4xl'>
                <ProjectsCard {...project} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;

