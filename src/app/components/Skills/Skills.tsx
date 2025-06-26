import React, { forwardRef } from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import './Skills.css';
import Frontend from './Frontend/Frontend';
import Backend from './Backend/Backend';
import Other from './Other/Other';
import { FSkill } from '../../../../types/Skills';

interface SkillsProps {
    backend: FSkill[] | undefined
    frontend: FSkill[] | undefined
    other: FSkill[] | undefined
}

const Skills = forwardRef<HTMLElement, SkillsProps>(({ backend, frontend, other }, ref) => {
    return (
        <section ref={ref} className='skills py-7 px-3 pb-10 bg-url-fixed'>
            <div className='flex gap-2 mb-3 pb-3'>
                <Cog6ToothIcon className='w-7 text-yellow-600' />
                <h1 className='text-2xl text-yellow-600'>Skills and knowledge</h1>
            </div>
            {/* skills main wrapper */}
            <div>
                <Backend backend={backend} />
                <Frontend frontend={frontend} />
                <Other other={other} />
            </div>
        </section>
    )
});

Skills.displayName = 'Skills';

export default Skills;