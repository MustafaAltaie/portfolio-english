import React, { forwardRef } from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import './Skills.css';
import Frontend from './Frontend/Frontend';
import Backend from './Backend/Backend';
import Other from './Other/Other';

const Skills = forwardRef<HTMLElement, {}>((_, ref) => {
    return (
        <section ref={ref} className='skills py-7 px-3 pb-10 bg-url-fixed'>
            <div className='flex gap-2 mb-3 pb-3'>
                <Cog6ToothIcon className='w-7 text-yellow-600' />
                <h1 className='text-2xl text-yellow-600'>Skills and knowledge</h1>
            </div>
            {/* skills main wrapper */}
            <div>
                <Frontend />
                <Backend />
                <Other />
            </div>
        </section>
    )
});

Skills.displayName = 'Skills';

export default Skills;