import { projects } from "../assets/assets"
import Project from "./Project"


const Projects = () => {
  return (
    <div id="projects" className="text-white md:mt-7 gap-4 pt-1">
        <div className="flex items-center justify-center mb-6 md:mb-12 mt-8 lg:justify-start  lg:space-x-5">
           <h1 className="font-[Manrope] font-extrabold text-2xl lg:text-4xl">My Projects</h1> 
           <hr className='hidden lg:block border w-[80%]' />
        </div>
        <div className="bg-[#0c0c0c]">
            {projects.map((project, index)=>(
                <Project key={index} img={project.img} title={project.title} description={project.description} task={project.task} skills={project.skills} date={project.date} two_buttons={project.two_buttons} link={project.link} />
            ))}
        </div>
        
    </div>
  )
}

export default Projects