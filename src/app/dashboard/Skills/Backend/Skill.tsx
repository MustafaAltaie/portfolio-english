import React from 'react';
import { FSkill } from '../../../../../types/Skills';
import Image from 'next/image';

interface SkillProps {
    skill: FSkill
}

const Skill = React.memo(({ skill }: SkillProps) => {
    return (
        <div
            className='skillCard p-3 flex flex-col gap-2 rounded-sm'
            
        >
            <div className='flex gap-1 items-center'>
                <Image
                    src={skill.image}
                    alt='Image'
                    width={20}
                    height={20}
                    loading='lazy'
                />
                <h1 className='text-sm'>{skill.title}</h1>
            </div>
            <div className='skillLevel w-full h-1'>
                <div style={{ width: `${skill.level}%` }}></div>
            </div>
        </div>
    )
});

Skill.displayName = 'Skill';

export default Skill;