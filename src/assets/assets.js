import { Cloud, Box, ListTodo, Bot } from 'lucide-react'
import me from './me.jpg'
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
        iconColorClass: 'text-indigo-600', // Indigo for HTTP Server
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
        iconColorClass: 'text-green-600', // Green for PEAMS
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
        iconColorClass: 'text-orange-400', // Orange for Task Management
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
        date: 'July 2024',
        icon: 'Bot',
        iconColorClass: 'text-sky-500', // Sky blue for Chatbot
        two_buttons: true,
        link: 'https://github.com/coollad49/customer_support_chatbot',
        demo_link: 'http://35.183.131.3/',
    },
    {
        title: "Flashcard SaaS App",
        description: "A flashcard-based learning web application. It allows users to create, manage, and review flashcards.",
        task: `
            - Developed a full-stack application for flashcard-based learning <br />
            - Enabled users to create, edit, and organize flashcards into decks <br />
            `,
        skills: ['Next.js', 'Tailwind CSS', 'Prisma', 'Shadcn-UI'],
        date: 'September 2024',
        icon: 'Library',
        iconColorClass: 'text-purple-600', // Purple for Flashcards SaaS
        two_buttons: false,
        link: 'https://github.com/coollad49/flashcardsaas',
    },
    {
        title: "E‑Commerce API Server",
        description: "A secure, scalable backend REST API for an e‑commerce platform, implementing JWT authentication, product and order management, reviews, bookmarks, and admin-level controls.",
        task: `
            - Built a backend REST API for e‑commerce using Node.js and Express <br />
            - Set up JWT‑based authentication and authorization flows <br />
            - Implemented endpoints for managing products, orders, users <br />
            - Deployed a production-ready server with security best practices in place
        `,
        skills: ['Node.js', 'Express', 'REST API', 'JWT', 'Prisma'],
        date: 'October 2024',
        icon: 'ShoppingCart',
        iconColorClass: 'text-red-600', // Red for e‑commerce backend
        two_buttons: false,
        link: 'https://github.com/coollad49/ecommerce_api_server',
    },
    {
        title: "Learn‑Your‑Facts App",
        description: "An AI-powered facts generator tailored for students. It fetches and displays curated facts using a clean, engaging UI to spark curiosity and support learning.",
        task: `
            - Built a Next.js and Tailwind CSS web app for discovering daily facts<br />
            - Integrated Pexels API to enrich each fact with relevant imagery<br />
            - Designed UI components using shadcn‑ui for smooth user experience<br />
            - Implemented AI‑powered fact generation via OpenRouter and Acertinity UI<br />
        `,
        skills: ['Next.js', 'Tailwind CSS', 'Pexels API', 'shadcn‑ui', 'OpenRouter', 'AI Integration'],
        date: 'December 2024',
        icon: 'Zap',
        iconColorClass: 'text-yellow-500', // Yellow for learning/insight
        two_buttons: false,
        link: 'https://github.com/coollad49/learn-your-facts-app',
    },    
        
]