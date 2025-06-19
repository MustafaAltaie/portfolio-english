'use cLient';
import React, { useState } from 'react';
import { FSkill } from '../../../../../types/Skills';
import Skill from '../Skill';

const Frontend = () => {
    const [frontend] = useState<FSkill[]>([
        {
            id: '1',
            imageLink: '/images/tech-icons/html.png',
            title: 'HTML5',
            level: 90,
        },
        {
            id: '2',
            imageLink: '/images/tech-icons/css.png',
            title: 'CSS3',
            level: 85,
        },
        {
            id: '3',
            imageLink: '/images/tech-icons/js.png',
            title: 'JavaScript',
            level: 80,
        },
        {
            id: '4',
            imageLink: '/images/tech-icons/ts.png',
            title: 'TypeScript',
            level: 80,
        },
        {
            id: '5',
            imageLink: '/images/tech-icons/next.png',
            title: 'Next.js',
            level: 70,
        },
        {
            id: '6',
            imageLink: '/images/tech-icons/react.png',
            title: 'React.js',
            level: 70,
        },
        {
            id: '7',
            imageLink: '/images/tech-icons/redux.png',
            title: 'Redux',
            level: 80,
        },
        {
            id: '8',
            imageLink: '/images/tech-icons/vue.png',
            title: 'Vue.js',
            level: 50,
        },
        {
            id: '9',
            imageLink: '/images/tech-icons/tailwind.png',
            title: 'Tailwind',
            level: 80,
        },
    ]);

    return (
        <div>
            <h1 className='text-xl mb-3'>Frontend</h1>
            <div className='frontendSkillWrapper flex flex-wrap'>
                {frontend.map((skill: FSkill) =>
                <Skill key={skill.id} skill={skill} />)}
            </div>
        </div>
    )
}

export default Frontend;