'use client';
import React, { useState } from 'react';
import './Experiences.css';
import { BriefcaseIcon } from '@heroicons/react/24/solid';
import Experience from './Experience';

import { Exp } from '../../../../types/Experiences';

const Experiences = () => {
    const [expObj] = useState<Exp[]>([
        {
            id: '1',
            dateFrom: '2023-10',
            dateTo: '',
            title: 'Programming and IT managment',
            company: 'Karthago-Matchning-AB',
            location: 'Sweden - Katrineholm, Flen and Vingåker',
            description: 'At this company, I build personal portfolio websites for job seekers. Each portfolio includes a dashboard that lets users manage content and features. The project is part of a government initiative by the Migration Labor Office to help unemployed people find jobs.',
            techStack: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Express', 'Node.js', 'CSS3', 'HTML5'],
        },
        {
            id: '2',
            dateFrom: '2020-03',
            dateTo: '2021-03',
            title: 'Full stack developer',
            company: 'Karthago-Matchning-AB',
            location: 'Sweden - Katrineholm, Flen and Vingåker',
            description: 'Developed an app for school students to order food from the school cafeteria. The app includes a dashboard, advanced features, and uses Socket for real-time order updates.',
            techStack: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'Socket', 'HTML5', 'CSS3'],
        },
        {
            id: '3',
            dateFrom: '2018',
            dateTo: '2020',
            title: 'Freelancer',
            company: 'Remotely',
            location: 'Sweden - Katrineholm, Flen and Vingåker',
            description: 'I worked as a freelance developer, building apps for various companies. I operated as an independent contractor, sometimes being paid hourly and other times receiving payment upon project completion.',
            techStack: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Express', 'React.js', 'Node.js', 'PostgreSQL', 'MySQL', 'JavaScript', 'CI/CD', 'Scrum', 'CSS3', 'HTML5'],
        },
    ]);
    return (
        <section className='experiences p-7 flex flex-col gap-5 bg-url-fixed pb-10 border-b-thin'>
            <div className='flex gap-2'>
                <BriefcaseIcon className='w-7 text-yellow-600' />
                <h1 className='text-yellow-600 text-2xl'>Experiences</h1>
            </div>
            {/* Experiences wrapper */}
            <div className='expWrapper flex flex-col lg:flex-row lg:flex-wrap'>
                {/* Card */}
                {expObj.map((exp: Exp) => 
                    <Experience key={exp.id} exp={exp} />
                )}
            </div>
        </section>
    )
}

export default Experiences;