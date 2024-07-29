import GitHubCalendar from 'react-github-calendar';
import PropTypes from 'prop-types';

const Contribution = ({dark}) => {
  return (
    <div id="github" className="dark:text-white md:mt-7 gap-4 pt-1">
        <div className="flex items-center justify-center mb-6 md:mb-8 mt-8 lg:justify-start  lg:space-x-5">
           <h1 className="font-[Manrope] font-extrabold text-2xl lg:text-4xl">GitHub Contributions</h1> 
           <hr className='hidden lg:block border w-[65%] dark:border-white border-black' />
        </div>
        <div className="dark:bg-gray-800 bg-gray-100 p-12 flex justify-center rounded-lg">
          <GitHubCalendar username="coollad49" colorScheme={`${dark? 'dark': 'light'}`} />
        </div>
        
    </div>
  )
}

export default Contribution

Contribution.propTypes = {
  dark: PropTypes.bool.isRequired,
};