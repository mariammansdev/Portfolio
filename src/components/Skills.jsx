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
  const cardsWrapperRef = useRef(null);
  const staticCardsRef = useRef(null);
  
  // Generate random rotation angles for each card
  const cardRotations = useMemo(() => 
    skills.map(() => (Math.random() - 0.5) * 20), // Random rotation between -10 and 10 degrees
    []
  );

  useGSAP(() => {
    const cards = gsap.utils.toArray('.skill-card');
    const totalDuration = skills.length * 300; // 100vh per card
    
    // Create a master timeline for all card animations
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardsWrapperRef.current,
        start: 'top top',
        end: `+=${totalDuration}vh`,
        pin: true,
        pinSpacing: true,
        scrub: 1.5,
      }
    });
    
    // Add each card animation to the timeline
    cards.forEach((card, index) => {
      masterTimeline.to(card, {
        y: -200,
        rotation: cardRotations[index] + (Math.random() > 0.5 ? 20 : -20),
        opacity: 0,
        scale: 0.6,
        ease: 'power1.out',
        duration: 1,
      }, index); // Position in timeline
    });

    // Animate static cards to appear after all cards are gone
    gsap.fromTo(staticCardsRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: staticCardsRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      className='py-20 align-element' 
      id='skills' 
      ref={containerRef}
    >
      <SectionTitle text='tech stack' />
      
      {/* Cards Container - This gets pinned */}
      <div ref={cardsWrapperRef} className='relative flex items-center justify-center mt-4 lg:mt-2 min-h-screen'>
        <div className='w-full max-w-xl' style={{ perspective: '1000px', minHeight: '70vh' }}>
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
                  <div className={'card flex flex-col bg-white rounded-xl shadow-2xl hover:shadow-3xl duration-300 border-8 border-white overflow-hidden h-full min-h-[600px] max-w-[380px] mx-auto p-8'}
                      style={skill.image ? {
                        backgroundImage: `url(${skill.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      } : {}}>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Static Cards Grid - Appears below the animation */}
      <div 
        ref={staticCardsRef} 
        className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3' 
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
