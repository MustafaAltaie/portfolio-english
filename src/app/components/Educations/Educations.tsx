import React, { useState, useEffect } from 'react';
import './Educations.css';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { EducationType } from '../../../../types/Educations';
import Education from './Education';
import { useReadEducationsQuery } from '../../../../features/educations/educationApi';

const Educations = () => {
    const [educationList, setEducationList] = useState<EducationType[]>([]);
    const { data, isLoading, isError } = useReadEducationsQuery();

    useEffect(() => {
        if(!isLoading && data) {
            const transformed: EducationType[] = data.map(edu => ({
                id: edu._id,
                location: edu.location,
                dateFrom: edu.dateFrom,
                dateTo: edu.dateTo,
                school: edu.school,
                title: edu.title,
                description: edu.description, 
                logoLink: edu.logoLink,
                docLink: edu.docLink,
            }));
            setEducationList(transformed);
        }
    }, [isLoading, data]);

    if (isError) return <p>Error loading experiences</p>
    if (isLoading) return <p>...Loading experiences</p>

    return (
        <section className='educations p-7 flex flex-col gap-5 border-b-thin bg-url-fixed pb-10'>
            <div className='flex items-center gap-2'>
                <AcademicCapIcon className='w-7 text-yellow-600' />
                <h1 className='text-2xl text-yellow-600'>Educations</h1>
            </div>
            {/* Educations */}
            <div className='educationWrapper flex flex-col lg:flex-row lg:flex-wrap'>
                {/* card */}
                {educationList.map(education =>
                <Education key={education.id} education={education} />)}
            </div>
        </section>
    )
}

export default Educations;