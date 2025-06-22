import React from 'react';
import { BriefcaseIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { Exp } from '../../../../types/Experiences';
import { motion } from 'framer-motion';

interface ExperienceProps {
    exp: Exp
}

const Experience = ({ exp }: ExperienceProps) => {
    return (
        <motion.div
            className='experienceCard border-thin-2 flex flex-col gap-2 p-5 rounded-xl'
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className='flex gap-5 items-center justify-between'>
                <BriefcaseIcon className='w-7 bg-blue-600 text-white rounded-full p-1.5' />
                <p className='text-sm text-blue-500 font-bold'>{exp.dateFrom} - {exp.dateTo ? exp.dateTo : 'Ongoing'}</p>
            </div>
            <p>{exp.title} in <span className='italic'>{exp.company}</span></p>
            <p className='text-yellow-600'>{exp.location}</p>
            <p className='text-sm text-neutral-500'>{exp.description}</p>
            {exp.techStack?.length !== 0 && <p className='mt-1 text-sm flex items-end gap-1'>I worked with the following tech stack <ArrowLongRightIcon className='w-4' /></p>}
            <div className='flex flex-wrap gap-2'>
                {exp.techStack?.map((tech: string) => 
                <p key={tech} className='expTech px-2 py-1 rounded-xl text-sm'>{tech}</p>
                )}
            </div>
        </motion.div>
    )
}

export default Experience;