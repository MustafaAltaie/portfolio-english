'use client';
import React, { useEffect, useState } from 'react';
import Skill from './Skill';
import { FSkill } from '../../../../../types/Skills';
import { useReadBackendSkillsQuery } from '../../../../../features/skills/skillsApi';

const Backend = () => {
    const [backend, setBackend] = useState<FSkill[]>([]);
    const { data, isLoading, isError } = useReadBackendSkillsQuery();

    useEffect(() => {
        if (data && !isLoading) {
            const transformed: FSkill[] = data.map(skill => ({
                id: skill._id,
                imageLink: skill.imageLink,
                title: skill.title,
                level: skill.level,
            }));
            setBackend(transformed);
        }
    }, [data, isLoading]);

    if (isLoading) return <p>...Loading skills</p>
    if (isError) return <p>Error loading skills</p>

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