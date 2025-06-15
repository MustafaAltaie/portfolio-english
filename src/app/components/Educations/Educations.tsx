import React from 'react';
import './Educations.css';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const Educations = () => {
    return (
        <div className='educations p-7 flex flex-col gap-5'>
            <div className='flex items-center gap-2'>
                <AcademicCapIcon className='w-7 text-yellow-600' />
                <h1 className='text-2xl text-yellow-600'>Educations</h1>
            </div>
            {/* Educations */}
            <div className='educationWrapper flex flex-col lg:flex-row lg:flex-wrap'>
                {/* card */}
                <div className='educationCard border-thin-2 backdrop-blur-sm p-5 rounded-3xl'>
                    <p className='border-b-thin pb-2 mb-2 text-sm'>Sweden - Linkoping</p>
                    <div className='flex items-center gap-4 pb-2 mb-2 border-b-thin'>
                        <Image
                            src='/images/chas.png'
                            alt='Alrafidain'
                            width={50}
                            height={50}
                            priority
                        />
                        <div>
                            <h1 className='text-xl text-blue-500'>Chas-Academy</h1>
                            <h3 className='text-lg text-yellow-600'>Two-year vocational program in Fullstack JavaScript Development</h3>
                        </div>
                    </div>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam similique facilis necessitatibus? Nesciunt, maiores facere. Earum iusto perferendis voluptatem ullam ipsum, unde ut quisquam maxime, voluptatibus porro perspiciatis aperiam!</p>
                </div>
                {/* card */}
                <div className='educationCard border-thin-2 backdrop-blur-sm p-5 rounded-3xl'>
                    <p className='border-b-thin pb-2 mb-2 text-sm'>Iraq - Baghdad</p>
                    <div className='flex items-center gap-4 pb-2 mb-2 border-b-thin'>
                        <Image
                            src='/images/rafidain.png'
                            alt='Alrafidain'
                            width={50}
                            height={50}
                            priority
                        />
                        <div>
                            <h1 className='text-xl text-blue-500'>Alrafidain University</h1>
                            <h3 className='text-lg text-yellow-600'>Bachalor's Degree in computer technique engineering.</h3>
                        </div>
                    </div>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam similique facilis necessitatibus? Nesciunt, maiores facere. Earum iusto perferendis voluptatem ullam ipsum, unde ut quisquam maxime, voluptatibus porro perspiciatis aperiam!</p>
                </div>
            </div>
        </div>
    )
}

export default Educations;