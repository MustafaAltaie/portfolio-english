
import React from 'react';
import Image from 'next/image';
import './Profile.css';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Section1 = () => {
    return (
        <section className='section1 overflow-x-hidden flex flex-col lg:flex-row pt-10'>
            <div className="mainImageWrapper flex items-end justify-center overflow-hidden lg:w-1/2 mt-10">
                <Image
                    className='lg:object-cover'
                    src='/images/empty.png'
                    alt='homeImage'
                    width={350}
                    height={400}
                    priority
                />
            </div>
            <div className="profileWrapper p-7 lg:w-1/2 lg:p-30">
                <div className='flex items-center gap-2 pb-4'>
                    <h1><UserCircleIcon className='w-7 text-yellow-600' /></h1>
                    <span className='text-2xl text-yellow-600'>Profile</span>
                </div>
                <p>I am a fullstack JavaScript developer focused on building scalable and responsive web applications using Next.js with TypeScript and the MERN stack (MongoDB, Express, React, Node.js). I write clean, optimized code that follows best practices, and I work with modern tools like Tailwind CSS, Next.js, and TypeScript. I am always eager to learn new technologies and quickly adapt to new challenges.</p>
            </div>
        </section>
    )
}

export default Section1;