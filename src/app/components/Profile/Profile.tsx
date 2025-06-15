
import React from 'react';
import Image from 'next/image';
import './Profile.css';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Section1 = () => {
    return (
        <section className='section1 overflow-x-hidden flex flex-col lg:flex-row pt-10'>
            <div className="mainImageWrapper flexCenter overflow-hidden lg:w-1/2 lg:mt-10">
                <Image
                    className='lg:object-cover'
                    src='/images/empty.png'
                    alt='homeImage'
                    width={400}
                    height={400}
                    priority
                />
            </div>
            <div className="profileWrapper p-7 lg:w-1/2 lg:p-30">
                <div className='flex items-center gap-2 pb-4'>
                    <h1><UserCircleIcon className='w-7 text-yellow-600' /></h1>
                    <span className='text-2xl text-yellow-600'>Profile</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, cupiditate quia deserunt, nam sit eius voluptas, reprehenderit qui debitis maxime quaerat enim architecto possimus vero assumenda dolor. Veritatis, numquam mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, cupiditate quia deserunt, nam sit eius voluptas, reprehenderit qui debitis maxime quaerat enim architecto possimus vero assumenda dolor. Veritatis, numquam mollitia.</p>
            </div>
        </section>
    )
}

export default Section1;