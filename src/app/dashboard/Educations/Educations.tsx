'use client';
import React, { useState } from 'react';
import '../../components/Educations/Educations.css';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { EducationType } from '../../../../types/Educations';
import Education from './Education';
import Form from './Form';

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
            logoLink: '/images/chas.png',
            docLink: '',
        },
        {
            id: '2',
            location: 'Iraq - Baghdad',
            dateFrom: '2011',
            dateTo: '2015',
            school: 'Alrafidain University',
            title: "Bachalor's Degree in computer techniques engineering.",
            description: "I studied for four years at the Faculty of Computer Engineering. The degree has been validated and recognized in Sweden by the Swedish Council for Higher Education (UHR), and is equivalent to a Bachelor's degree in Computer Engineering.",
            logoLink: '/images/rafidain.png',
            docLink: '',
        },
    ]);
    const [form, setForm] = useState(false);
    const [obj, setObj] = useState<EducationType>({
        id: '',
        location: '',
        dateFrom: '',
        dateTo: '',
        school: '',
        title: '',
        description: '',
        logoLink: '',
        docLink: '',
    });

    const prepareObj = (edu: EducationType) => {
        setObj(edu);
    }

    return (
        <section className='educations p-7 flex flex-col gap-5 border-b-thin bg-url-fixed pb-10'>
            <div className='flex items-center gap-2'>
                <AcademicCapIcon className='w-7 text-yellow-600' />
                <h1 className='text-2xl text-yellow-600'>Educations</h1>
            </div>
            <div className='educationWrapper flex flex-col lg:flex-row lg:flex-wrap'>
                {educationObj.map(education =>
                <Education
                    key={education.id}
                    education={education}
                    setForm={setForm}
                    prepareObj={prepareObj}
                />)}
            </div>
            <h1 className={`transition-all w-5 h-5 flexCenter pb-2 mx-auto text-4xl ${form ? 'rotate-45' : ''}`} onClick={() => setForm(!form)}>+</h1>
            <Form form={form} setObj={setObj} obj={obj} />
        </section>
    )
}

export default Educations;