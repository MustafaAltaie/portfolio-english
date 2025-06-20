'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import '../../components/Profile/Profile.css';
import { UserCircleIcon, PencilIcon } from '@heroicons/react/24/solid';
import Form from './Form';
import { useCreateProfileMutation, useReadProfileQuery } from '../../../../features/profile/profileApi';

const Section1 = () => {
    const [form, setForm] = useState(false);
    const [text, setText] = useState<string>('');
    const [createProfile] = useCreateProfileMutation();
    const { data: profile, isLoading } = useReadProfileQuery();

    if (isLoading) return <p>...loading</p>;

    const handleSaveProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await createProfile(text).unwrap();
        } catch (err) {
            console.error(err);
            alert('Error saving profile');
        }
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
                <p>{profile?.profile}</p>}
                {form &&
                <Form
                    handleSaveProfile={handleSaveProfile}
                    text={text}
                    setText={setText}
                    setForm={setForm}
                    profile={profile?.profile}
                />}
            </div>
        </section>
    )
}

export default Section1;