const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className='card relative flex flex-col bg-white rounded-xl shadow-2xl hover:shadow-3xl duration-300 border-8 border-white overflow-visible h-full min-h-[500px] max-w-[380px] mx-auto p-8 pt-16 pt-8'>
      <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[65%] text-customPurple">{icon}</span>
      <div className='flex-1 flex flex-col text-center'>
        <h4 className='font-bold text-xl tracking-wide'>{title}</h4>
        <p className='mt-4 text-slate-700 leading-loose flex-1'>{text}</p>
      </div>
    </article>
  );
};
export default SkillsCard;
