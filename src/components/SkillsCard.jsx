const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className='card flex flex-col bg-white rounded-xl shadow-2xl hover:shadow-3xl duration-300 border-8 border-white overflow-hidden h-full min-h-[500px] max-w-[380px] mx-auto p-8'>
      <div className='flex justify-center mb-4'>
        <span>{icon}</span>
      </div>
      <div className='flex-1 flex flex-col text-center'>
        <h4 className='mt-6 font-bold text-xl tracking-wide'>{title}</h4>
        <p className='mt-4 text-slate-700 leading-loose flex-1'>{text}</p>
      </div>
    </article>
  );
};
export default SkillsCard;
