import React from 'react';
import Image from 'next/image';
import { EducationType } from '../../../../types/Educations';
import { ArrowLongRightIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

interface EducationProps {
    education: EducationType
    setForm: React.Dispatch<React.SetStateAction<boolean>>
    prepareObj: (edu: EducationType) => void
}

const Education = ({ education, setForm, prepareObj }: EducationProps) => {
    const handleDelete = async (id: string) => {
        alert(id);
    }

    return (
        <div className='educationCard border-thin-2 p-5 relative flex flex-col justify-between'>
            <p className='educationDate text-sm absolute'>{education.dateFrom} - {education.dateTo}</p>
            <div className='flex gap-5 border-b-thin pb-4 mb-4'>
                <PencilIcon className='w-5 cursor-pointer' onClick={() => {setForm(true); prepareObj(education)}} />
                    <TrashIcon className='w-5' onClick={() => handleDelete(education.id!)} />
                <p className='text-sm'>{education.location}</p>
            </div>
            <div className='flex items-center gap-4 pb-4 mb-4 border-b-thin'>
                {education.logoLink &&
                <div>
                    <Image
                        src={education.logoLink}
                        alt='Alrafidain'
                        width={100}
                        height={100}
                        priority
                    />
                </div>}
                <div>
                    <h1 className='text-xl text-blue-500'>{education.school}</h1>
                    <h3 className='text-sm text-yellow-600'>{education.title}</h3>
                </div>
            </div>
            <p className='text-sm'>{education.description}</p>
            <button className='ml-auto flex items-end gap-2 mt-2 text-blue-500'>See the attchment <ArrowLongRightIcon className='w-5' /></button>
        </div>
    )
}

export default Education;