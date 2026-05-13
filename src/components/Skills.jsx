import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useMemo } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);
  const staticCardsRef = useRef(null);
  
  // Generate random rotation angles for each card
  const cardRotations = useMemo(() => 
    skills.map(() => (Math.random() - 0.5) * 20), // Random rotation between -10 and 10 degrees
    []
  );

  useGSAP(() => {
    const cards = gsap.utils.toArray('.skill-card');
    const scrollDistance = 150;
    
    cards.forEach((card, index) => {
      const isLastCard = index === cards.length - 1;
      
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top+=${index * scrollDistance}vh top`,
          end: `top+=${(index + 1) * scrollDistance}vh top`,
          scrub: 2,
          ease: 'power1.inOut',
        }
      })
      .to(card, {
        y: -200,
        rotation: cardRotations[index] + (Math.random() > 0.5 ? 30 : -30),
        opacity: 0,
        scale: 0.8,
        ease: 'power1.out',
      });
    });

    // Animate static cards to appear after all UNO cards are gone
    gsap.fromTo(staticCardsRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: -190,
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top+=${skills.length * 150}vh top`,
          end: `top+=${skills.length * 150 + 100}vh top`,
          scrub: 2,
          ease: 'power1.inOut',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      className='py-10 align-element' 
      id='skills' 
      ref={containerRef}
      style={{ minHeight: `${skills.length * 150 + 120}vh` }}
    >
      <SectionTitle text='tech stack' />
      
      {/* Cards Container */}
      <div className='relative flex items-center justify-center' style={{ minHeight: '100vh' }}>
        <div className='sticky top-20 w-full max-w-6xl' style={{ perspective: '1000px', minHeight: '70vh' }}>
          {/* Animated Card Stack */}
          {skills.map((skill, index) => {
            return (
              <div 
                key={skill.id} 
                className='skill-card absolute inset-0 flex items-center justify-center'
                style={{ 
                  zIndex: skills.length - index,
                  transform: `rotate(${cardRotations[index]}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className='w-full'>
                  <SkillsCard {...skill} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Static Cards Grid - Appears below the animation */}
      <div 
        ref={staticCardsRef} 
        className='py-2 grid gap-8 md:grid-cols-2 lg:grid-cols-3' 
        style={{ opacity: 0 }}
      >
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
