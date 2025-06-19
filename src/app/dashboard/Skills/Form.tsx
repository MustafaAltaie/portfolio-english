import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { FSkill } from '../../../../types/Skills';

interface FormProps {
    setForm: React.Dispatch<React.SetStateAction<boolean>>
    skillObj: FSkill
    setSkillObj: React.Dispatch<React.SetStateAction<FSkill>>
    fileImage: File | null
    setFileImage: React.Dispatch<React.SetStateAction<File | null>>
    clearSkillObj: () => void
    form: boolean
}

const Form = ({ setForm, skillObj, setSkillObj, fileImage, setFileImage, clearSkillObj, form }: FormProps) => {

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSave} className={`${form ? 'max-h-100' : 'max-h-0'}`}>
            <h1 className='w-fit ml-auto px-5 py-2' onClick={() => {setForm(false); clearSkillObj()}}>X</h1>
            <div className="formInnerDiv">
                <label>
                    Title
                    <input type="text" required placeholder='e.g. JavaScript' name='title' value={skillObj.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setSkillObj(prev => ({
                            ...prev, title: e.target.value
                        }));
                    }} />
                </label>
                <label>
                    Level of knowledge
                    <input type="number" required min={1} max={100} placeholder='1 - 100' name='title' value={skillObj.level} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setSkillObj(prev => ({
                            ...prev, level: e.target.value
                        }));
                    }} />
                </label>
                <div className='labelImage'>
                    <label>
                        {fileImage ? 'Replace skill image icon' : 'Upload skill image icon'}
                        <input type="file" accept='.png,.jpg,.bmp,.JPEG,.jpeg' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setFileImage(file);
                                setSkillObj((prev: FSkill) => ({
                                    ...prev, imageLink: file.name
                                }));
                            }
                        }} />
                    </label>
                    <div className='formImageWrapper'>
                        <Image
                            src={
                                fileImage ?
                                URL.createObjectURL(fileImage) :
                                skillObj.id && skillObj.imageLink?.startsWith('/') ?
                                skillObj.imageLink :
                                "/images/image-icon.png"}
                            alt="image-icon"
                            width={30}
                            height={30}
                        />
                    </div>
                    {fileImage && <TrashIcon className='w-5' onClick={() => setFileImage(null)} />}
                </div>
                <button type='submit' className={`${(!skillObj.title || !skillObj.level) ? '' : 'activeFormButton'}`}>{skillObj.id ? 'Update' : 'Save'}</button>
            </div>
        </form>
    )
}

export default Form;