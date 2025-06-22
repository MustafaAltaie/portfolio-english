import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './Profile.css';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useReadProfileQuery } from '../../../../features/profile/profileApi';

const Section1 = () => {
    const { data: profile, isLoading, isError } = useReadProfileQuery();
    const [text, setText] = useState<string>('');

    useEffect(() => {
        if (!isLoading && profile) {
            setText(profile.profile);
        }
    }, [profile, isLoading]);

    if (isLoading) return <p>...Loading profile</p>
    if (isError) return <p>Error loading profile</p>

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
                >{text}</motion.p>
            </div>
        </section>
    )
}

export default Section1;