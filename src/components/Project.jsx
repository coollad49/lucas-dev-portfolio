import PropTypes from 'prop-types';

const Project = ({img, title, description, task, skills, link, date, two_buttons, demo_link}) => {
  return (
    <div className="bg-gray-900 p-1 md:p-5 rounded-xl flex flex-col mb-5 md:flex-row-reverse md:justify-between">
        <div className="flex justify-center my-5 md:items-center">
            <img src={img} alt="" className="w-40 md:w-80  hover:scale-105 transition"/>
        </div>
        <div className=''>
            <div className="flex flex-col items-center md:items-start md:p-2">
                <h1 className="font-bold text-3xl">{title}</h1>
                <h3 className="my-2">{date}</h3>
            </div>
            <p className="p-2 text-gray-200 font-medium md:max-w-md">{description}</p>
            <p className="p-2 text-gray-200 font-medium">
                <b>During the course of this project,</b><br />
                <div dangerouslySetInnerHTML={{ __html: task }} />
            </p>
            <div className="p-2 flex flex-wrap gap-2">
                {skills.map((skill, index)=>(
                    <div key={index} className="bg-gray-700 px-2 rounded-lg font-semibold">{skill}</div>
                ))}
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:space-x-4 mt-3'>
                {two_buttons ? <a href={demo_link} className="flex justify-center my-3 cursor-pointer"><span className="bg-white border-2 font-bold rounded-full py-3 px-4 text-blue-900">View Demo</span></a> : ''}
                <a href={link} className="flex justify-center my-3 cursor-pointer"><span className="bg-gray-800 border-2 font-bold rounded-full py-3 px-4">View Project Details</span></a>
            </div>
            
        </div>
    </div>
  )
}


Project.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    demo_link: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    two_buttons: PropTypes.bool.isRequired,
};

export default Project