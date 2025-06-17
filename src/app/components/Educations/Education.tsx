import React from 'react';
import Image from 'next/image';
import { EducationType } from '../../../../types/Educations';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

interface EducationProps {
    education: EducationType
}

const Education = ({ education }: EducationProps) => {
    return (
        <motion.div
            className='educationCard border-thin-2 backdrop-blur-sm p-5 relative'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <p className='educationDate text-sm absolute'>{education.dateFrom} - {education.dateTo}</p>
            <p className='border-b-thin pb-4 mb-4 text-sm'>Sweden - Linkoping</p>
            <div className='flex items-center gap-4 pb-4 mb-4 border-b-thin'>
                <div>
                    <Image
                        src={education.imageLink}
                        alt='Alrafidain'
                        width={100}
                        height={100}
                        priority
                    />
                </div>
                <div>
                    <h1 className='text-xl text-blue-500'>{education.school}</h1>
                    <h3 className='text-sm text-yellow-600'>{education.title}</h3>
                </div>
            </div>
            <p className='text-sm'>{education.description}</p>
            <button className='ml-auto flex items-end gap-2 mt-2 text-neutral-500'>See the attchment <ArrowLongRightIcon className='w-5' /></button>
        </motion.div>
    )
}

export default Education;