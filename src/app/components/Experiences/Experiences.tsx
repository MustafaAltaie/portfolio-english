'use client';
import React, { useState, useEffect } from 'react';
import './Experiences.css';
import { BriefcaseIcon } from '@heroicons/react/24/solid';
import Experience from './Experience';
import { useReadExpsQuery } from '../../../../features/experiences/experienceApi';
import { Exp } from '../../../../types/Experiences';

const Experiences = () => {
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
        <section className='experiences p-7 flex flex-col gap-5 bg-url-fixed pb-10 border-b-thin'>
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
        </section>
    )
}

export default Experiences;