
import React, { useState } from 'react';
import Image from 'next/image';
import '../../components/Profile/Profile.css';
import { UserCircleIcon, PencilIcon } from '@heroicons/react/24/solid';
import Form from './Form';

const Section1 = () => {
    const [form, setForm] = useState(false);
    const [text, setText] = useState<string>('');

    const handleSaveProfile = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

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
                    {!form && <PencilIcon className='w-5 ml-5 cursor-pointer' onClick={() => setForm(true)} />}
                </div>
                {!form &&
                <p>I am a fullstack JavaScript developer focused on building scalable and responsive web applications using Next.js with TypeScript and the MERN stack (MongoDB, Express, React, Node.js). I write clean, optimized code that follows best practices, and I work with modern tools like Tailwind CSS, Next.js, and TypeScript. I am always eager to learn new technologies and quickly adapt to new challenges.</p>}
                {form &&
                <Form
                    handleSaveProfile={handleSaveProfile}
                    text={text}
                    setText={setText}
                    setForm={setForm}
                />}
            </div>
        </section>
    )
}

export default Section1;