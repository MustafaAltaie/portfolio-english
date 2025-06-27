'use client';
import React, { useEffect, useRef, useState } from 'react';
import { BriefcaseIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { Exp } from '../../../../types/Experiences';
import { motion } from 'framer-motion';

interface ExperienceProps {
    exp: Exp
}

const Experience = ({ exp }: ExperienceProps) => {
    const [clicked, setClicked] = useState(false);
    const expRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const clickOutside = (e: MouseEvent) => {
            if (expRef.current && !expRef.current.contains(e.target as Node)) {
                setClicked(false);
            }
        }

        window.addEventListener('click', clickOutside);
        return () => window.removeEventListener('click', clickOutside);
    }, []);

    return (
        <motion.div
            ref={expRef}
            onClick={() => setClicked(!clicked)}
            className='experienceCard relative border-thin-2 flex flex-col gap-2 p-5 rounded-xl'
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {clicked && <p className='expText absolute top-0 left-0 h-full w-full p-5 rounded-xl border-thin-2'>{exp.description}</p>}
            <div className='flex gap-5 items-center justify-between'>
                <BriefcaseIcon className='w-7 bg-blue-600 text-white rounded-full p-1.5' />
                <p className='text-sm text-blue-500 font-bold'>{exp.dateFrom} - {exp.dateTo ? exp.dateTo : 'Present'}</p>
            </div>
            <p>{exp.title} in <span className='italic'>{exp.company}</span></p>
            <p className='text-yellow-600'>{exp.location}</p>
            <p className='text-sm text-neutral-500'>{exp.description?.slice(0, 100)}...</p>
            {exp.techStack?.length !== 0 && <p className='mt-1 text-sm flex items-end gap-1'>I worked with the following tech stack <ArrowLongRightIcon className='w-4' /></p>}
            <div className='expStachList flex flex-wrap gap-2 max-h-20 overflow-y-scroll'>
                {exp.techStack?.map((tech: string) => 
                <p key={tech} className='expTech px-2 py-1 rounded-xl text-sm'>{tech}</p>
                )}
            </div>
        </motion.div>
    )
}

export default Experience;