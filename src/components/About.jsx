import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
import { useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const terminalRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  // const [displayText, setDisplayText] = useState('');
  const [terminalText, setTerminalText] = useState('');
  
  const fullText = "Over the past 4 years, I've been building digital solutions in the tourism industry — from creating company-owned websites that serve hotels across Egypt to contributing to international projects with teams abroad. I've worked with JavaScript frameworks (including Ext JS), Node.js for a transportation system, and even dipped into Flutter applications, contributing to cross-platform experiences. Beyond development, I've built a solid foundation in testing and quality assurance for unit and automated testing, using Jasmine framework and tools like Playwright and Cypress, all while following Agile practices and Kanban systems to manage tasks and ensure smooth development workflows. But my journey doesn't stop at the office. About 2 years ago, I began exploring React in my own time — experimenting with HTML, CSS, Vanilla JS, and React to create personal projects. That self-driven curiosity has been my way of growing beyond daily tasks, turning ideas into working apps. I see myself not just as a frontend developer, but as someone who enjoys the craft of building, collaborating across cultures, and always learning the next thing that makes the web more interactive, scalable, and human-friendly.";
  
  const bashCommands = "$ whoami\ndeveloper\n$ cat passion.txt\n"+fullText;
  
  useGSAP(() => {
    const terminal = terminalRef.current;
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
    // setDisplayText('');
    setTerminalText('');
    
    // Calculate responsive scale based on viewport width
    const viewportWidth = window.innerWidth;
    const responsiveScale = viewportWidth < 768 ? 1 : viewportWidth < 1024 ? 1 : 1.9;
    
    // Terminal appears gradually
    tl.fromTo(
      terminal,
      {
        opacity: 0,
        scale: 0.8,
        y: 30
      },
      {
        opacity: 1,
        scale: responsiveScale,
        y: 0,
        duration: 1.5,
        ease: 'power2.out'
      }
    );
    
    // Bash commands typing animation
    tl.to({}, {
      duration: bashCommands.length * 0.05,
      ease: 'none',
      onUpdate: function() {
        const progress = this.progress();
        const currentLength = Math.floor(progress * bashCommands.length);
        setTerminalText(bashCommands.slice(0, currentLength));
      },
    });
    
    // Paragraph typing animation - starts after terminal is complete
    tl.to(text, {
      duration: fullText.length * 0.03,
      ease: 'none',
    });
  });
 
  
  return (
    <section ref={sectionRef} className=' w-full h-full py-20' id='about'>
      {/* Bash Terminal */}
      <div className='max-w-3xl mx-auto mt-16 align-element' ref={terminalRef}>
        <div className='bg-gray-800 rounded-lg shadow-2xl overflow-hidden'>
          {/* Terminal Header */}
          <div className='bg-gray-700 px-4 py-2 flex items-center gap-2'>
            <div className='flex gap-2'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-green-500'></div>
            </div>
            <span className='text-gray-300 text-sm ml-4'>bash</span>
          </div>
          
          {/* Terminal Body */}
          <div className='p-6 min-h-[200px] font-mono text-sm'>
            <pre className='text-green-400 whitespace-pre-wrap'>
              {terminalText}
              <span className='animate-pulse'>▊</span>
            </pre>
          </div>
        </div>
      </div>
      
    </section>
  );
};
export default About;
