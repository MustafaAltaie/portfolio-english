import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './Profile.css';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

interface Section1Props {
    profile: string | undefined
}

const Section1 = ({ profile }: Section1Props) => {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        if (profile) {
            setText(profile || '');
        }
    }, [profile]);

    return (
        <section className='section1 overflow-x-hidden flex flex-col lg:flex-row pt-10'>
            <div className="mainImageWrapper flex items-end justify-center overflow-hidden lg:w-1/2">
                <Image
                    className='lg:object-cover'
                    src='/images/empty.png'
                    alt='homeImage'
                    width={350}
                    height={400}
                    priority
                />
            </div>
            <div className="profileWrapper p-7 lg:w-1/2 lg:p-30 border-b-1 lg:border-b-0">
                <div className='flex items-center gap-2 pb-4'>
                    <h1><UserCircleIcon className='w-7 text-yellow-600' /></h1>
                    <span className='text-2xl text-yellow-600'>Profile</span>
                </div>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0 }}
                >{text === 'hello' || 'Full-Stack JavaScript Developer with a strong focus on frontend development in React/Preact and experience in building modern user interfaces.  I’m urrently learning about secure coding practices and video streaming technologies to strengthen knowledge in TV platforms.  Team player with a problem-solving mindset. Adaptable and eager to learn new technologies.'}</motion.p>
            </div>
        </section>
    )
}

export default Section1;