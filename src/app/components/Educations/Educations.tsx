import React, { useState } from 'react';
import './Educations.css';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { EducationType } from '../../../../types/Educations';
import Education from './Education';

const Educations = () => {
    const [educationObj] = useState<EducationType[]>([
        {
            id: '1',
            location: 'Sweden - Linkoping',
            dateFrom: '2023',
            dateTo: '2025',
            school: 'Chas-Academy',
            title: 'Two-year vocational program in Fullstack JavaScript Development',
            description: 'I completed a two-year full-time vocational program in Fullstack JavaScript Development at Chas Academy (remote). The program was conducted in both Swedish and English.',
            imageLink: '/images/chas.png',
            link: '',
        },
        {
            id: '2',
            location: 'Iraq - Baghdad',
            dateFrom: '2011',
            dateTo: '2015',
            school: 'Alrafidain University',
            title: "Bachalor's Degree in computer techniques engineering.",
            description: "I studied for four years at the Faculty of Computer Engineering. The degree has been validated and recognized in Sweden by the Swedish Council for Higher Education (UHR), and is equivalent to a Bachelor's degree in Computer Engineering.",
            imageLink: '/images/rafidain.png',
            link: '',
        },
    ]);

    return (
        <div className='educations p-7 flex flex-col gap-5 border-b-thin bg-url-fixed pb-10'>
            <div className='flex items-center gap-2'>
                <AcademicCapIcon className='w-7 text-yellow-600' />
                <h1 className='text-2xl text-yellow-600'>Educations</h1>
            </div>
            {/* Educations */}
            <div className='educationWrapper flex flex-col lg:flex-row lg:flex-wrap'>
                {/* card */}
                {educationObj.map(education =>
                <Education key={education.id} education={education} />)}
            </div>
        </div>
    )
}

export default Educations;