'use client';
import React, { useEffect, useState } from 'react';
import { FSkill } from '../../../../../types/Skills';
import Skill from './Skill';
import { useReadFrontendSkillsQuery } from '../../../../../features/skills/skillsApi';

const Frontend = () => {
    const [frontend, setFrontend] = useState<FSkill[]>([]);
    const { data, isLoading, isError } = useReadFrontendSkillsQuery();
        
    useEffect(() => {
        if (data && !isLoading) {
            const transformed: FSkill[] = data.map(skill => ({
                id: skill._id,
                imageLink: skill.imageLink,
                title: skill.title,
                level: skill.level,
            }));
            setFrontend(transformed);
        }
    }, [data, isLoading]);

    if (isLoading) return null;
    if (isError) return <p>Error loading skills</p>

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