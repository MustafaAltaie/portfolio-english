'use client';
import React, { useState } from 'react';
import './Projects.css';
import { CodeBracketIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { ProjectType } from '../../../../types/Projects';
import Project from './Project';

const Projects = () => {
    const [list] = useState<ProjectType[]>([
        {
            id: '1',
            title: 'Gruvan, Fullstack',
            description: 'I developed this fullstack application for Järvenskolorna in Katrineholm, where I worked. The purpose was to make it easier for students to order from the school cafeteria using their mobile phones or directly from a screen in the cafeteria. Orders are received by staff in real time via Socket.io.',
            date: '5/1/2020',
            isProfessional: true,
            techList: ['MongoDB', 'Express', 'JavaScript', 'Node.js', 'Socket.js', 'CSS3 & HTML5'],
            link: 'https://github.com/MustafaAltaie/Gruvan.git',
        },
        {
            id: '2',
            title: 'E-commerce app, Fullstack',
            description: 'I developed this app as a hobby project. The application is designed for ordering electronics online and includes an admin dashboard where products can be created, updated, and deleted.',
            date: '3/30/2025',
            isProfessional: false,
            techList: ['MongoDB', 'Express', 'React.js', 'Node.js', 'Redux & RTK Query', 'Resend', 'CSS3 & HTML5'],
            link: 'https://github.com/MustafaAltaie/redux_commerce_app.git',
        },
        {
            id: '3',
            title: 'Restaurant app',
            description: 'I developed this restaurant app in my free time as a hobby project. The app includes a dashboard where the admin can perform CRUD operations. Users can place food orders, and staff have a view to see order details.',
            date: '6/5/2025',
            isProfessional: false,
            techList: ['Next.js', 'Typescript', 'Redux & RTK Query', 'MongoDB', 'HTML5, CSS3'],
            link: 'https://github.com/MustafaAltaie/next-ts-redux-restaurant-app.git',
        },
        {
            id: '4',
            title: 'Driving School App, Fullstack',
            description: 'I developed this application using the MERN stack. The app includes an admin dashboard where the owner can create, update, and delete content.',
            date: '5/5/2025',
            isProfessional: true,
            techList: ['React.js', 'Redux & RTK Query', 'MongoDB', 'Express', 'Node.js', 'Vonage', 'CSS3 & HTML5'],
            link: 'https://github.com/MustafaAltaie/trafikskola-katrineholm.git',
        },
        {
            id: '5',
            title: 'Social media app, Frontend',
            description: 'I developed this frontend application using plain JavaScript. The app works like a social media or dating app where users can find people. The search feature is already prepared to connect to a backend if I choose to turn it into a fullstack application in the future.',
            date: '1/30/2024',
            isProfessional: false,
            techList: ['JavaScript', 'CSS3 & HTML5'],
            link: 'https://github.com/MustafaAltaie/social-media-app.git',
        },
        {
            id: '6',
            title: 'Scrum Board, Frontend',
            description: 'I developed this frontend application during my studies. The app follows Scrum principles and allows users to add tasks and move them between columns. All data is saved in the browser’s localStorage.',
            date: '4/20/2024',
            isProfessional: false,
            techList: ['React.js', 'Redux', 'CSS3 & HTML5', 'localStorage'],
            link: 'https://github.com/MustafaAltaie/scrum.git',
        },
    ]);

    return (
        <section className='projects bg-url-fixed py-7 px-3'>
            <div className='flex gap-2 mb-3 pb-3'>
                <CodeBracketIcon className='w-7 text-yellow-600' />
                <h1 className='text-2xl text-yellow-600'>My projects</h1>
            </div>
            {/* wrapper */}
            <div className='projectWrapper flex flex-wrap'>
                {/* card */}
                {list.map(app =>
                <Project key={app.id} app={app}  />
                )}
            </div>
            <p className='flex gap-1 items-end cursor-pointer mt-5'
                onClick={() => window.open('https://github.com/MustafaAltaie', '_blank', 'noopener,noreferrer')}
            >Check out these and other applications on GitHub <ArrowLongRightIcon className='w-5' /></p>
        </section>
    )
}

export default Projects;