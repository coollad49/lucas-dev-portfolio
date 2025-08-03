import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faPython, faJs, faReact, faHtml5, faCss3Alt, faLinux, faDocker, } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
  return (
    <section id='skills' className="bg-gray-900 text-white py-5 md:mt-5">
        <div className="flex items-center justify-center mb-6 md:mb-12 md:mt-8 lg:justify-start lg:mx-20 lg:space-x-5">
           <h1 className="font-[Manrope] font-extrabold text-2xl lg:text-4xl">Skills Acquired</h1> 
           <hr className='hidden lg:block border w-[75%]' />
        </div>
        <div className="lg:mx-16 grid grid-cols-4 gap-6 pb-5 md:grid-cols-6 mx-2">
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center transition-transform group-hover:scale-110'>
                    <FontAwesomeIcon icon={faGitAlt} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold text-sm'>Git</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center transition-transform group-hover:scale-110'>
                    <FontAwesomeIcon icon={faPython} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold text-sm'>Python</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center transition-transform group-hover:scale-110'>
                    <FontAwesomeIcon icon={faJs} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold text-sm'>JavaScript</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center transition-transform group-hover:scale-110'>
                    <FontAwesomeIcon icon={faReact} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold text-sm'>React</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center transition-transform group-hover:scale-110'>
                    <FontAwesomeIcon icon={faHtml5} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold'>HTML</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center transition-transform group-hover:scale-110'>
                    <FontAwesomeIcon icon={faCss3Alt} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold'>CSS</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center transition-transform group-hover:scale-110'>
                    <FontAwesomeIcon icon={faLinux} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold'>Linux</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-[#2E236C] p-3 rounded-lg flex items-center transition-transform group-hover:scale-110'>
                    <FontAwesomeIcon icon={faDocker} className='text-4xl group-hover:scale-110 transition'/>
                </div>
                <span className='font-bold'>Docker</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='bg-white p-3 rounded-lg flex items-center transition-transform group-hover:scale-110'>
                    <svg className='w-8 group-hover:scale-110 transition' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15z"/></svg>
                </div>
                <span className='font-bold'>Tailwind</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='p-3 bg-white rounded-lg flex items-center border transition-transform group-hover:scale-110'>
                    <svg className='w-6 group-hover:scale-110 transition' preserveAspectRatio="xMidYMid" viewBox="0 0 256 326" xmlns="http://www.w3.org/2000/svg"><g fill="#2ba977"><path d="m114.78426 0h53.277999v244.191113c-27.290404 5.162172-47.381078 7.193079-69.117404 7.193079-65.0718413-.067924-98.944855-29.139102-98.944855-84.972068 0-53.795267 35.9300792-88.7078508 91.6079875-88.7078508 8.6396755 0 15.2222855.6792329 23.1762725 2.7169325zm1.867183 124.426648c-6.239766-2.0377-11.38243-2.716934-17.9650395-2.716934-26.9475597 0-42.5126892 16.437443-42.5126892 45.243722 0 28.045536 14.8794413 43.532053 42.1698442 43.532053 5.8969215 0 10.6967405-.332825 18.3078845-1.351675z"/><path d="m255.186899 84.2605714v122.2619686c0 42.105664-3.154168 62.353604-12.410963 79.809896-8.639675 16.783852-20.022104 27.366305-43.541221 39.055907l-49.438144-23.297697c23.519117-10.928862 34.901547-20.587558 42.169846-35.326917 7.611142-15.072184 10.011052-32.528476 10.011052-78.444637v-104.0585206z"/><path d="m196.608 0h53.277999v54.1348831h-53.277999z"/></g></svg>
                </div>
                <span className='font-bold'>Django</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='p-3 bg-white rounded-lg flex items-center border transition-transform group-hover:scale-110'>
                    <svg className='w-8 group-hover:scale-110 transition' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path d="M19.131 3H4.86944C3.91371 3 3.13867 3.78715 3.13867 4.75781V19.2422C3.13867 20.2129 3.91371 21 4.86944 21H19.131C20.0867 21 20.8617 20.2129 20.8617 19.2422V4.75781C20.8617 3.78715 20.0867 3 19.131 3ZM13.4194 12.9844H11.204V19.418H9.43865V12.9844H7.22328V11.543H13.4194V12.9844ZM19.131 18.2613C18.9925 18.5777 18.7537 18.8133 18.4733 18.9996C18.1964 19.1719 17.8848 19.3055 17.504 19.3863C17.1233 19.4672 16.7425 19.5059 16.3271 19.5059C15.9117 19.5059 15.4964 19.4707 15.1156 19.3969C14.7348 19.323 14.3921 19.2141 14.1117 19.0664V17.3772C14.0899 17.3596 14.0674 17.3423 14.046 17.3241L14.1117 17.3086V17.3772C14.406 17.6145 14.73 17.7973 15.0844 17.9217C15.4306 18.0553 15.8114 18.1221 16.1921 18.1221C16.4344 18.1221 16.6179 18.101 16.7806 18.0623C16.9502 18.0202 17.0852 17.9639 17.196 17.8936C17.3067 17.8233 17.3891 17.7389 17.4418 17.6405C17.4944 17.542 17.5214 17.4366 17.5214 17.3241C17.5214 17.1623 17.4764 17.0217 17.3898 16.9022C17.3102 16.7827 17.1925 16.6702 17.0437 16.5682C16.9052 16.4663 16.7321 16.3678 16.5245 16.2729C16.3168 16.178 16.1056 16.0795 15.8668 15.9811C15.2783 15.6998 14.8145 15.4186 14.5168 15.0319C14.2156 14.6803 14.0668 14.2233 14.0668 13.6959C14.0668 13.2741 14.1464 12.9366 14.3091 12.6412C14.4821 12.3248 14.6864 12.0928 14.9668 11.903C15.2437 11.7096 15.5552 11.569 15.936 11.4811C16.3168 11.3932 16.6975 11.3475 17.1129 11.3475C17.5283 11.3475 17.8745 11.3721 18.186 11.4213C18.4975 11.4705 18.7883 11.5479 19.0514 11.6498V13.3022C18.9302 13.2108 18.7883 13.1299 18.636 13.0596C18.4733 12.9893 18.3141 12.933 18.1514 12.8873C17.9887 12.8416 17.826 12.8075 17.6668 12.7854C17.5145 12.7632 17.3621 12.7523 17.2168 12.7523C17.0056 12.7523 16.8256 12.7699 16.6629 12.8086C16.4968 12.8473 16.3583 12.9 16.2475 12.9703C16.1368 13.0406 16.0506 13.1215 15.9879 13.2199C15.9252 13.3184 15.8944 13.4273 15.8944 13.5469C15.8944 13.677 15.929 13.793 15.9983 13.8984C16.0675 14.0004 16.1644 14.0988 16.2925 14.1937C16.4067 14.2852 16.5625 14.3766 16.7425 14.468C16.9502 14.5594 17.1371 14.6508 17.3656 14.7457C17.6771 14.8793 17.954 15.027 18.1964 15.1676C18.4387 15.3082 18.6429 15.4734 18.8194 15.6598C19.0064 15.8355 19.1414 16.0465 19.2348 16.2926C19.3283 16.5387 19.3767 16.8164 19.3767 17.1363C19.3767 17.5934 19.2694 17.9449 19.131 18.2613Z" fill="#343C54"/></svg>
                </div>
                <span className='font-bold'>TypeScript</span>
            </div>
            <div className='flex flex-col items-center space-y-2 group'>
                <div className='p-3 bg-white rounded-lg flex items-center border transition-transform group-hover:scale-110'>
                <svg className='w-8 group-hover:scale-110 transition' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)"><path d="M11.3451 2.4048C11.3021 2.40871 11.1652 2.42239 11.042 2.43216C8.20137 2.68823 5.54056 4.22075 3.85533 6.57623C2.91691 7.88591 2.31672 9.37151 2.08993 10.9451C2.00978 11.4944 2 11.6566 2 12.4014C2 13.1461 2.00978 13.3084 2.08993 13.8577C2.63343 17.6127 5.30597 20.7677 8.93059 21.9366C9.57966 22.1458 10.2639 22.2885 11.042 22.3745C11.3451 22.4077 12.6549 22.4077 12.958 22.3745C14.3011 22.2259 15.4389 21.8936 16.5611 21.3209C16.7331 21.2329 16.7664 21.2095 16.7429 21.1899C16.7273 21.1782 15.9941 20.1949 15.1144 19.0065L13.5152 16.8465L11.5113 13.8811C10.4086 12.2509 9.50147 10.9177 9.49366 10.9177C9.48581 10.9158 9.478 12.2333 9.47409 13.842C9.46822 16.6588 9.46628 16.7722 9.43109 16.8386C9.38025 16.9344 9.34116 16.9735 9.25903 17.0165C9.19647 17.0478 9.14175 17.0537 8.84653 17.0537H8.50831L8.41837 16.997C8.35972 16.9599 8.31672 16.911 8.28738 16.8543L8.24634 16.7663L8.25025 12.847L8.25612 8.92582L8.31672 8.8496C8.348 8.80854 8.41447 8.75576 8.46137 8.73035C8.54153 8.69126 8.57281 8.68735 8.91103 8.68735C9.30987 8.68735 9.37634 8.70298 9.47997 8.81635C9.50928 8.84763 10.5943 10.4818 11.8925 12.4502C13.1906 14.4187 14.9658 17.1064 15.8377 18.4259L17.4213 20.8244L17.5015 20.7716C18.2112 20.3103 18.9619 19.6535 19.5562 18.9693C20.8211 17.5169 21.6364 15.7459 21.9101 13.8577C21.9902 13.3084 22 13.1461 22 12.4014C22 11.6566 21.9902 11.4944 21.9101 10.9451C21.3666 7.19001 18.694 4.03505 15.0694 2.86612C14.4301 2.65891 13.7498 2.51622 12.9873 2.43021C12.7996 2.41066 11.5073 2.38916 11.3451 2.4048ZM15.4389 8.45279C15.5328 8.4997 15.609 8.5896 15.6364 8.68345C15.652 8.73426 15.6559 9.8211 15.652 12.2704L15.6461 15.785L15.0264 14.835L14.4047 13.885V11.3302C14.4047 9.67841 14.4125 8.74991 14.4242 8.70495C14.4555 8.59548 14.5239 8.50948 14.6178 8.45863C14.6979 8.4176 14.7273 8.4137 15.0342 8.4137C15.3236 8.4137 15.3744 8.4176 15.4389 8.45279Z" fill="#343C54"/></svg>                </div>
                <span className='font-bold'>Nextjs</span>
            </div>

        </div>
        
    </section>
  )
}

export default Skills