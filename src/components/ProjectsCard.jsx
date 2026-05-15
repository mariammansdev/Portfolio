import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className='card flex bg-white rounded-xl shadow-2xl hover:shadow-3xl duration-300 border-8 border-white overflow-hidden h-full'>
       <div className='capitalize p-8 flex-1 flex flex-col'>
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
      <div className='flex-1 img-wrapper'>
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
