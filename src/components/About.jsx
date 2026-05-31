import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
import typingImage from '../assets/typing.png'
import { useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  
  const fullText = "Over the past 3 years, I've been building digital solutions in the tourism industry — from creating company-owned websites that serve hotels across Egypt to contributing to international projects with teams abroad. I've worked with JavaScript frameworks (including Ext JS), Node.js for a transportation system, and even dipped into Flutter applications, contributing to cross-platform experiences. Beyond development, I've built a solid foundation in testing and quality assurance for unit and automated testing, using Jasmine framework and tools like Playwright and Cypress, all while following Agile practices and Kanban systems to manage tasks and ensure smooth development workflows. But my journey doesn't stop at the office. About 2 years ago, I began exploring React in my own time — experimenting with HTML, CSS, Vanilla JS, and React to create personal projects. That self-driven curiosity has been my way of growing beyond daily tasks, turning ideas into working apps. I see myself not just as a frontend developer, but as someone who enjoys the craft of building, collaborating across cultures, and always learning the next thing that makes the web more interactive, scalable, and human-friendly.";
  
  useGSAP(() => {
    const card = cardRef.current;
    const text = textRef.current;
    const section = sectionRef.current;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reset"
      }
    });
    
    // Reset text before animation starts
    setDisplayText('');
    
    // Image animation
    tl.fromTo(
      card,
      {
        opacity: 0,
        y: 0,
        scale: 1
      },
      {
        opacity: 1,
        y: 90,
        duration: 4,
        scale: 0.4,
        ease: 'sine.inOut'
      }
    );
    
    // Typing animation - starts after image animation
    tl.to(text, {
      duration: fullText.length * 0.03,
      ease: 'none',
      onUpdate: function() {
        const progress = this.progress();
        const currentLength = Math.floor(progress * fullText.length);
        setDisplayText(fullText.slice(0, currentLength));
      },
    });
  });
 
  
  return (
    <section ref={sectionRef} className=' w-full h-full py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        {/* <img src={aboutSvg} className='w-full h-64' /> */}
        <article>
          <SectionTitle text='code and coffee' />
          <p ref={textRef} className='text-slate-600 mt-8 leading-loose'>
            {displayText}
            <span className='typing-cursor'>|</span>
          </p>
        </article>
      </div>
      <div className='max-w-2xl flex align-element' ref={cardRef}>
        <img src={typingImage}></img>
      </div>
      
    </section>
  );
};
export default About;
