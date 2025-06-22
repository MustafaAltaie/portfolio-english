'use client';
import React, { useEffect, useState } from 'react';
import { FSkill } from '../../../../../types/Skills';
import Skill from './Skill';
import { useReadOtherSkillsQuery } from '../../../../../features/skills/skillsApi';

const Other = () => {
    const [other, setOther] = useState<FSkill[]>([]);
    const { data, isLoading, isError } = useReadOtherSkillsQuery();

    useEffect(() => {
        if (data && !isLoading) {
            const transformed: FSkill[] = data.map(skill => ({
                id: skill._id,
                imageLink: skill.imageLink,
                title: skill.title,
                level: skill.level,
            }));
            setOther(transformed);
        }
    }, [data, isLoading]);

    if (isLoading) return <p>...Loading skills</p>
    if (isError) return <p>Error loading skills</p>

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