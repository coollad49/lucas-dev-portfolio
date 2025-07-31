import { Cloud, Box, ListTodo, Bot } from 'lucide-react'
import me from './me.jpeg'
import code from './code.png'

export const assets = {
    me,
    code,
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
        icon: 'Cloud',
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
        icon: 'Box',
        two_buttons: true,
        link: 'https://github.com/coollad49/PEAMS/',
        demo_link: 'https://peams.onrender.com',
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
        icon: 'ListTodo',
        two_buttons: true,
        link: 'https://github.com/coollad49/task-management-dashboard-application',
        demo_link: 'https://task-management-dashboard-application.onrender.com/',
    },
    {
        title: "Customer Support Chatbot",
        description: "A customer support app for Living Well Hospital using Meta LLaMA, deployed via EC2. Built with Next.js, Tailwind CSS, and shadcn-ui, it provides intelligent, real-time support for hospital customers.",
        task: `
            - Developed a customer support chatbot using Meta LLaMA <br />
            - Integrated with hospital systems for real-time support <br />
            - Deployed on AWS EC2 for scalability <br />
            - Built with Next.js, Tailwind CSS, and shadcn-ui <br />
            - Provides intelligent, context-aware responses to user queries
            `,
        skills: ['Next.js', 'JavaScript', 'Meta LLaMA', 'Tailwind CSS', 'shadcn-ui', 'AWS EC2'],
        date: '2024',
        icon: 'Bot',
        two_buttons: true,
        link: 'https://github.com/coollad49/customer_support_chatbot',
        demo_link: 'http://35.183.131.3/',
    },
]