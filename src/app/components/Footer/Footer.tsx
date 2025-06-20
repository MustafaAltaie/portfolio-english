'use client';
import React, { useState } from 'react';
import './Footer.css';
import { Social, Message } from '../../../../types/Footer';

const Footer = () => {
    const docList: string[] = [
        'Bachalors Degree',
        'Validated Bachalors Degree',
        'Swedish Vocational Program (Full stack JS)',
        'Resume (CV)',
        'Personal Letter',
    ];
    const socialList: Social = {
        linkedIn: 'mustafa-altaie-b35356178',
        mobile: '+46763122455',
        email: 'mustafaphoto111@email.com',
        github: 'MustafaAltaie',
    }
    const [message, setMessage] = useState<Message>({
        name: '',
        email: '',
        message: '',
    });

    const handlePrepareMessage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setMessage(prev => ({
            ...prev, [name]: value
        }));
    }

    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <footer className='bg-black px-10'>
            <div>
                {/* Upper */}
                <div className='fotterUpper flex gap-5 justify-center p-3 lg:p-2 border-b-thin mb-2 mt-2'>
                    <a href={`https://www.linkedin.com/in/${socialList.linkedIn}`} target="_blank" rel="noopener noreferrer" className='flex flex-col items-center gap-1'>
                        <div className='w-7 h-7 flexCenter rounded-full'>
                            <i className="fa-brands fa-linkedin-in text-white text-sm"></i>
                        </div>
                        <p className='text-sm'>LinkedIn</p>
                    </a>
                    <a href={`tel:${socialList.mobile}`} rel="noopener" className='flex flex-col items-center gap-1'>
                        <div className='w-7 h-7 flexCenter rounded-full'>
                            <i className="fa-solid fa-phone text-white text-sm"></i>
                        </div>
                        <p className='text-sm'>Call me</p>
                    </a>
                    <a href={`mailto:${socialList.email}`} className='flex flex-col items-center gap-1'>
                        <div className='w-7 h-7 flexCenter rounded-full'>
                            <i className="fa-solid fa-envelope text-white text-sm"></i>
                        </div>
                        <p className='text-sm'>Email me</p>
                    </a>
                    <a href={`https://github.com/${socialList.github}`} target="_blank" rel="noopener noreferrer" className='flex flex-col items-center gap-1'>
                        <div className='w-7 h-7 flexCenter rounded-full'>
                            <i className="fa-brands fa-github text-white text-sm"></i>
                        </div>
                        <p className='text-sm'>Github</p>
                    </a>
                </div>
                {/* Documents */}
                <div className='border-b-thin pb-2 mb-2'>
                    <p className='mb-3 flex gap-3'><span>You can find all relevant documents below.</span></p>
                    <ul className='flex flex-col gap-2'>
                        {docList.map(doc => <li key={doc} className='italic pl-1 text-sm'>{doc}</li>)}
                    </ul>
                </div>
                {/* Middle */}
                <div className='lg:flex lg:gap-20 pb-2 lg:pb-0 border-b-thin'>
                    <div className='lg:w-1/2 lg:flex lg:flex-col lg:justify-center'>
                        <p className='mb-2 pb-2 border-b-thin text-sm'>Dedicated to delivering top results, always eager to grow through new challenges — available for remote or on-site opportunities.</p>
                        <p className='mb-2 text-sm'>Have an idea or a job opportunity? Do not hesitate to get in touch — I am fluent in
                            <span> English, </span>
                            <span>Swedish</span> and
                            <span> Arabic.</span>
                        </p>
                    </div>
                    <form onSubmit={handleSendMessage} className='flex flex-col gap-2 lg:gap-1 mb-2 lg:w-1/2'>
                        <input className='p-2 rounded-lg lg:p-1 text-sm' type="text" name='name' placeholder='Name' value={message.name} onChange={handlePrepareMessage} />
                        <input className='p-2 rounded-lg lg:p-1 text-sm' type="text" name='email' placeholder='Email' value={message.email} onChange={handlePrepareMessage} />
                        <textarea className='p-2 rounded-lg lg:p-1 text-sm' name="message" placeholder='Message' value={message.message} onChange={handlePrepareMessage}></textarea>
                        <button type='submit' className='bg-blue-800 p-2 text-white rounded-lg text-sm'>Send</button>
                    </form>
                </div>
                {/* Lower */}
                <div>
                    <p className='border-b-thin pb-2 mt-2 text-sm'>This portfolio is built using modern technologies such as
                        <span> Next.js, </span>
                        <span>TypeScript, </span>
                        <span>RTK-Query </span>and
                        <span> Resend.</span>
                    </p>
                    <h5 className='py-3 text-center text-sm'>© 2025 Mustafa Altaie. Alla rättigheter förbehållna.</h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer;