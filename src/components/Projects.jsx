import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
  //REVEAL CONTENT ON SCROLL - GSAP Elementor Scrolltrigger
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='web creations' />
      <div className='relative'>
        {projects.map((project, index) => {
          return <ProjectsCard key={project.id} {...project} index={index} />;
        })}
      </div>
    </section>
  );
};
export default Projects;

