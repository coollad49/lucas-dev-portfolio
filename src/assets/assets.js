import code from './code.png'
import brand from './brand.png'
import menu from './menu.png'
import me from './me.jpeg'
import djangoproject from './djangoproject.svg'
import cloudserver from './cloudserver.png'
import box from './box.png'

export const assets = {
    code,
    brand,
    menu,
    me,
    djangoproject,
    cloudserver,
    box,
}

export const projects = [
    {
        title : "HTTP Server",
        description: 'I developed a custom HTTP server using Python. The server could handle GET and POST requests, serve static files, and manage multiple client connections concurrently.',
        task: `
            - Built a custom HTTP server using Python from scratch <br />
            - Implemented functionalities to handle basic HTTP requests (GET and POST) <br />
            - Served static files efficiently <br />
            - Managed multiple client connections concurrently
            `,
        skills: ['Python', 'REST', 'HTTP'],
        date: 'June 2024',
        img: cloudserver,
        two_buttons: false,
        link: 'https://github.com/coollad49/Http_server',
    },
    {
        title : "PEAMS",
        description: 'The Product Expiry Alert Management System is a web application designed to track and manage the expiration dates of products in inventory. It provides proactive alerts and notifications to ensure timely action on expiring products, thereby minimizing waste and optimizing inventory management.',
        task: `
            - Developed a system to monitor product expiry dates <br />
            - Implemented automated alerts for nearing expiration <br />
            - Integrated with inventory management for real-time updates <br />
            - Enabled customizable alert thresholds and notifications
            `,
        skills: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
        date: 'May 2024',
        img: box,
        two_buttons: true,
        link: 'https://github.com/coollad49/PEAMS/',
    },
    {
        title : "Task Management",
        description: "Task Management Dashboard: A user-friendly tool for efficient task organization, with features like drag-and-drop management, priority setting, and due date tracking for effective project and daily task management.",
        task: `
            - Developed a comprehensive task management dashboard <br />
            - Enabled task creation, tracking, and organization <br />
            - Integrated drag-and-drop management, priority setting, and due date tracking <br />
            - Enhanced project and daily task management efficiency
            `,
        skills: ['Python', 'HTML', 'Tailwind', 'Jquery', 'REST API', 'Javascript', 'CSS'],
        date: 'Jun - Jul 2024',
        img: cloudserver,
        two_buttons: true,
        link: 'https://github.com/coollad49/task-management-dashboard-application',
    },
    
]