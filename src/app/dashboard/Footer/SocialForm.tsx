import React, { useEffect } from 'react';
import { SocialObj } from '../../../../types/Footer';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface SocialFormProps {
    social: SocialObj
    prepareSocial: (e: React.ChangeEvent<HTMLInputElement>) => void
    socialForm: boolean
    setSocialForm: React.Dispatch<React.SetStateAction<boolean>>
    socialFormRef: React.RefObject<HTMLFormElement | null>
    handleSaveSocial: (e: React.FormEvent<HTMLFormElement>) => void
}

const SocialForm = ({ social, prepareSocial, socialForm, setSocialForm, socialFormRef, handleSaveSocial }: SocialFormProps) => {

    useEffect(() => {
        const currentForm = socialFormRef.current;
        if (!currentForm) return;
        if (socialForm) {
            currentForm.style.height = `${currentForm.scrollHeight}px`;
        } else {
            currentForm.style.height = '0px';
        }
    }, [socialForm, socialFormRef]);

    return (
        <form ref={socialFormRef} onSubmit={handleSaveSocial} className={`${socialForm && 'mb-5'}`}>
            <XMarkIcon className='w-9 ml-auto p-2' onClick={() => setSocialForm(false)} />
            <div className="formInnerDiv">
                <label>
                    LinkedIn link
                    <input type="text" placeholder='LinkedIn' name='linkedIn' value={social.linkedIn} onChange={prepareSocial} />
                </label>
                <label>
                    Mobile
                    <input type="tel" placeholder='e.g +46712345678' name='mobile' value={social.mobile} onChange={prepareSocial} />
                </label>
                <label>
                    Email
                    <input type="email" placeholder='e.g name@gmail.com' name='email' value={social.email} onChange={prepareSocial} />
                </label>
                <label>
                    Github link
                    <input type="text" placeholder='https://github.com/name' name='github' value={social.github} onChange={prepareSocial} />
                </label>
                <button type='submit'>Save</button>
            </div>
        </form>
    )
}
// className={`${(!skillObj.title || !skillObj.level) ? '' : 'activeFormButton'}`}

export default SocialForm;