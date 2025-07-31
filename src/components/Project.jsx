import PropTypes from 'prop-types';
import * as LucideIcons from 'lucide-react';

const Project = ({icon, title, description, task, skills, link, date, two_buttons, demo_link}) => {
  const IconComponent = LucideIcons[icon] || LucideIcons['Box'];
  return (
    <div className="dark:bg-gray-900 bg-gray-100 dark:border-none border shadow-xl p-1 md:p-5 rounded-xl flex flex-col mb-5 md:flex-row-reverse md:justify-between">
        <div className="flex justify-center my-5 md:items-center">
            <IconComponent className="w-24 h-24 md:w-40 md:h-40 hover:scale-105 transition" />
        </div>
        <div className=''>
            <div className="flex flex-col items-center md:items-start md:p-2 dark:text-white text-gray-900">
                <h1 className="font-bold text-3xl">{title}</h1>
                <h3 className="my-2">{date}</h3>
            </div>
            <p className="p-2 dark:text-gray-200 text-gray-800 font-medium md:max-w-md">{description}</p>
            <div className="p-2 dark:text-gray-200 text-gray-800 font-medium" style={{marginTop: 0}}>
                <b>During the course of this project,</b><br />
                <div dangerouslySetInnerHTML={{ __html: task }} />
            </div>
            <div className="p-2 flex flex-wrap gap-2">
                {skills.map((skill, index)=>(
                    <div key={index} className="bg-gray-700 px-2 rounded font-semibold">{skill}</div>
                ))}
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:space-x-4 mt-3'>
                {two_buttons ? <a href={demo_link} target='_blank' className="flex justify-center my-3 cursor-pointer"><span className="dark:bg-white bg-gray-900 dark:border-2 font-bold rounded-full py-3 px-4 text-white dark:text-blue-900">View Demo</span></a> : ''}
                <a href={link} className="flex justify-center my-3 cursor-pointer"><span className="dark:bg-gray-800 bg-gray-900 font-bold rounded-full py-3 px-4">View Project Details</span></a>
            </div>
        </div>
    </div>
  )
}

Project.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    demo_link: PropTypes.string,
    date: PropTypes.string.isRequired,
    two_buttons: PropTypes.bool.isRequired,
};

export default Project