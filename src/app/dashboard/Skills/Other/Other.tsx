'use client';
import React, { useState } from 'react';
import { FSkill } from '../../../../../types/Skills';
import Skill from './Skill';

const Other = () => {
    const [other] = useState<FSkill[]>([
        {
            id: '1',
            image: '/images/tech-icons/cicd.png',
            title: 'CI/CD',
            level: 60,
        },
        {
            id: '2',
            image: '/images/tech-icons/github.png',
            title: 'Github',
            level: 70,
        },
        {
            id: '3',
            image: '/images/tech-icons/postman.png',
            title: 'Postman',
            level: 80,
        },
        {
            id: '4',
            image: '/images/tech-icons/language.png',
            title: 'Arabic',
            level: 95,
        },
        {
            id: '5',
            image: '/images/tech-icons/language.png',
            title: 'English',
            level: 90,
        },
        {
            id: '6',
            image: '/images/tech-icons/language.png',
            title: 'Swedish',
            level: 85,
        }
    ]);

    return (
        <div className='mt-5'>
            <h1 className='text-xl mb-3'>Other skills</h1>
            <div className='otherSkillWrapper flex flex-wrap'>
                {other.map((skill: FSkill) => 
                <Skill key={skill.id} skill={skill} />
                )}
            </div>
        </div>
    )
}

export default Other;