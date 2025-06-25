'use client';
import React, { useState, useEffect, forwardRef } from 'react';
import './Experiences.css';
import { BriefcaseIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Experience from './Experience';
import { useReadExpsQuery } from '../../../../features/experiences/experienceApi';
import { Exp } from '../../../../types/Experiences';

type ExperiencesProps = React.HTMLAttributes<HTMLElement>;

const Experiences = forwardRef<HTMLElement, ExperiencesProps>((_, ref) => {
    const [experienceList, setExperienceList] = useState<Exp[]>([]);
    const { data, isLoading, isError } = useReadExpsQuery();

    useEffect(() => {
        if (data && !isLoading) {
            const transformed: Exp[] = data.map(experience => ({
                id: experience._id,
                dateFrom: experience.dateFrom,
                dateTo: experience.dateTo,
                title: experience.title,
                company: experience.company,
                location: experience.location,
                description: experience.description,
                techStack: experience.techStack,
            }));
            setExperienceList(transformed);
        }
    }, [data, isLoading]);

    if (isError) return <p>Error loading experiences</p>
    if (isLoading) return <p>...Loading experiences</p>

    return (
        <section ref={ref} className='experiences p-7 flex flex-col gap-5 bg-url-fixed pb-10 border-b-thin'>
            <div className='flex gap-2'>
                <BriefcaseIcon className='w-7 text-yellow-600' />
                <h1 className='text-yellow-600 text-2xl'>Experiences</h1>
            </div>
            {/* Experiences wrapper */}
            <div className='expWrapper flex flex-col lg:flex-row lg:flex-wrap'>
                {/* Card */}
                {experienceList.map((exp: Exp) => 
                    <Experience key={exp.id} exp={exp} />
                )}
            </div>
            <p className='flex gap-1 items-end cursor-pointer' onClick={() => window.open('https://github.com/MustafaAltaie', '_blank', 'noopener,noreferrer')}>Check out these and other applications on GitHub <ArrowLongRightIcon className='w-5' /></p>
        </section>
    )
});

Experiences.displayName = 'Experiences';

export default Experiences;