'use client';
import React, { useEffect, useState, useRef } from 'react';
import { ProjectType } from '../../../../types/Projects';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Tech from './Tech';

interface ProjectProps {
    app: ProjectType
}

const Project = ({ app }: ProjectProps) => {
    const [clicked, setClicked] = useState(false);
    const projectRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const clickOutside = (e: MouseEvent) => {
            if (projectRef.current && !projectRef.current.contains(e.target as Node)) {
                setClicked(false);
            }
        }

        window.addEventListener('click', clickOutside);
        return () => window.removeEventListener('click', clickOutside);
    }, []);

    return (
        <motion.div
            ref={projectRef}
            title={app.description}
            className='project relative p-3 flex flex-col justify-between gap-2 rounded-xl'
            onClick={() => setClicked(true)}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div>
                <h1 className='font-bold text-sm mb-2'>{clicked ? app.title : app.title.slice(0, 15) + '...'}</h1>
                <p className='text-sm mb-1 pb-2 border-b-thin'>{clicked ? app.description : app.description.slice(0, 40)}...</p>
            </div>
            <ul className={`flex flex-wrap gap-1 ${!clicked && 'max-h-10 overflow-hidden'}`}>
                {app.techList.map(tech =>
                <Tech key={tech} tech={tech} />
                )}
            </ul>
            <p className='text-[10px] absolute bottom-1 right-2 opacity-40'>{app.date}</p>
            <p className='text-[11px] flex items-end gap-1' onClick={() => window.open(app.link, '_blank', 'noopener,noreferrer')}>See project in github<ArrowLongRightIcon className='w-3' /></p>
        </motion.div>
    )
}

export default Project;