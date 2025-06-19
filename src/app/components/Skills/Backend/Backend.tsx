'use client';
import React, { useState } from 'react';
import Skill from '../Skill';
import { FSkill } from '../../../../../types/Skills';

const Backend = () => {
    const [backend] = useState<FSkill[]>([
        {
            id: '1',
            imageLink: '/images/tech-icons/node.png',
            title: 'Node.js',
            level: 80,
        },
        {
            id: '2',
            imageLink: '/images/tech-icons/next.png',
            title: 'Next.js',
            level: 70,
        },
        {
            id: '3',
            imageLink: '/images/tech-icons/mongo.png',
            title: 'MongoDB',
            level: 80,
        },
        {
            id: '4',
            imageLink: '/images/tech-icons/postgres.png',
            title: 'PostgreSQL',
            level: 60,
        },
        {
            id: '5',
            imageLink: '/images/tech-icons/express.png',
            title: 'Express.js',
            level: 80,
        },
    ]);

    return (
        <div className='mt-5'>
            <h1 className='text-xl mb-3'>Backend</h1>
            <div className='backendSkillWrapper flex flex-wrap'>
                {backend.map((skill: FSkill) =>
                <Skill key={skill.id} skill={skill} />)}
            </div>
        </div>
    )
}

export default Backend;