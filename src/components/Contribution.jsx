import GitHubCalendar from 'react-github-calendar';

const Contribution = () => {
  return (
    <div id="github" className="text-white md:mt-7 gap-4 pt-1">
        <div className="flex items-center justify-center mb-6 md:mb-8 mt-8 lg:justify-start  lg:space-x-5">
           <h1 className="font-[Manrope] font-extrabold text-2xl lg:text-4xl">GitHub Contributions</h1> 
           <hr className='hidden lg:block border w-[65%]' />
        </div>
        <div className="bg-gray-800 p-12 flex justify-center rounded-lg">
          <GitHubCalendar username="coollad49"/>
        </div>
        
    </div>
  )
}

export default Contribution