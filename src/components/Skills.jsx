import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faPython, faJs, faReact, faHtml5, faCss3Alt, faLinux, faDocker } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
  return (
    <div id='skills' className="bg-gray-900 text-white py-5 rounded-md md:mt-5">
        <div className="flex items-center justify-center mb-6 md:mb-12 md:mt-8 lg:justify-start lg:mx-20 lg:space-x-5">
           <h1 className="font-[Manrope] font-extrabold text-2xl lg:text-4xl">Skills Acquired</h1> 
           <hr className='hidden lg:block border w-[75%]' />
        </div>
        <div className="lg:mx-16 grid grid-cols-4 gap-6 pb-5 md:grid-cols-6 mx-2">
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center'>
                    <FontAwesomeIcon icon={faGitAlt} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold text-sm'>Git</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center'>
                    <FontAwesomeIcon icon={faPython} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold text-sm'>Python</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center'>
                    <FontAwesomeIcon icon={faJs} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold text-sm'>JavaScript</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center'>
                    <FontAwesomeIcon icon={faGitAlt} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold'>Git</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center'>
                    <FontAwesomeIcon icon={faReact} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold text-sm'>React</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center'>
                    <FontAwesomeIcon icon={faHtml5} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold'>HTML</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center'>
                    <FontAwesomeIcon icon={faCss3Alt} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold'>CSS</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center'>
                    <FontAwesomeIcon icon={faLinux} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold'>Linux</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center'>
                    <FontAwesomeIcon icon={faDocker} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold'>Docker</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-white p-3 rounded-lg flex items-center'>
                    <svg className='w-8 group-hover:scale-110 transition' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15z"/></svg>
                </div>
                <span className='font-bold'>Tailwind</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='p-3 bg-white rounded-lg flex items-center border'>
                    <svg className='w-6 group-hover:scale-110 transition' preserveAspectRatio="xMidYMid" viewBox="0 0 256 326" xmlns="http://www.w3.org/2000/svg"><g fill="#2ba977"><path d="m114.78426 0h53.277999v244.191113c-27.290404 5.162172-47.381078 7.193079-69.117404 7.193079-65.0718413-.067924-98.944855-29.139102-98.944855-84.972068 0-53.795267 35.9300792-88.7078508 91.6079875-88.7078508 8.6396755 0 15.2222855.6792329 23.1762725 2.7169325zm1.867183 124.426648c-6.239766-2.0377-11.38243-2.716934-17.9650395-2.716934-26.9475597 0-42.5126892 16.437443-42.5126892 45.243722 0 28.045536 14.8794413 43.532053 42.1698442 43.532053 5.8969215 0 10.6967405-.332825 18.3078845-1.351675z"/><path d="m255.186899 84.2605714v122.2619686c0 42.105664-3.154168 62.353604-12.410963 79.809896-8.639675 16.783852-20.022104 27.366305-43.541221 39.055907l-49.438144-23.297697c23.519117-10.928862 34.901547-20.587558 42.169846-35.326917 7.611142-15.072184 10.011052-32.528476 10.011052-78.444637v-104.0585206z"/><path d="m196.608 0h53.277999v54.1348831h-53.277999z"/></g></svg>
                </div>
                <span className='font-bold'>Django</span>
            </div>

        </div>
        
    </div>
  )
}

export default Skills