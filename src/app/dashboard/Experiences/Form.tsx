'use client';
import React, { useEffect, useRef, useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Exp } from '../../../../types/Experiences';

interface FormProps {
    form: boolean
    obj: Exp
    setObj: React.Dispatch<React.SetStateAction<Exp>>
}

const Form = ({ form, obj, setObj }: FormProps) => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const techRef = useRef<HTMLInputElement | null>(null);
    const [techText, setTechText] = useState<string>('');
    const [thisTech, setThisTech] = useState<string>('');

    useEffect(() => {
        const currentForm = formRef.current;
        if (!currentForm) return;
        if (form) {
            currentForm.style.height = `${currentForm.scrollHeight}px`;
            const timeout = setTimeout(() => {
                currentForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
            return () => clearTimeout(timeout);
        } else {
            clearObj();
            currentForm.style.height = '0px';
        }
    }, [form, formRef, obj.techStack.length]);

    const prepareObj = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setObj(prev => ({
            ...prev, [name]: value
        }));
    }

    const clearObj = () => {
        setObj({
            id: '',
            dateFrom: '',
            dateTo: '',
            title: '',
            company: '',
            location: '',
            description: '',
            techStack: []
        });
    }

    const blinkTwice = (trimmed: string) => {
        setThisTech(trimmed);
        setTimeout(() => {
            setThisTech('');
            setTimeout(() => {
                setThisTech(trimmed);
                setTimeout(() => {
                    setThisTech('');
                }, 200);
            }, 200);
        }, 200);
    }

    const prepareTechList = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const trimmed = techText.trim();
        if (!trimmed) return;
        if(obj.techStack.includes(trimmed)) {
            blinkTwice(trimmed);
            return;
        }
        setObj(prev => ({
            ...prev, techStack: [...prev.techStack, trimmed]
        }));
        setTechText('');
        techRef.current?.focus();
    }

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form ref={formRef} onSubmit={handleSave}>
            <div className="formInnerDiv">
                <label>
                    Title
                    <input type="text" required placeholder='e.g. Web-developer' name='title' value={obj.title} onChange={prepareObj} />
                </label>
                <label>
                    Company name
                    <input type="text" required placeholder='e.g. Microsoft' name='company' value={obj.company} onChange={prepareObj} />
                </label>
                <label>
                    Work location
                    <input type="text" required placeholder='e.g. Iraq-Baghdad' name='location' value={obj.location} onChange={prepareObj} />
                </label>
                <label>
                    Job description
                    <textarea required placeholder='Job details' name='description' value={obj.description} onChange={prepareObj}></textarea>
                </label>
                <label>
                    Starting date
                    <input type="text" required placeholder='e.g. 1/6/2025' name='dateFrom' value={obj.dateFrom} onChange={prepareObj} />
                </label>
                <label>
                    Ending date
                    <input type="text" placeholder='e.g. 1/6/2027' name='dateTo' value={obj.dateTo} onChange={prepareObj} />
                </label>
                <p>Tech or tools you have worked with</p>
                <div className='inputButton'>
                    <input ref={techRef} type="text" value={techText} placeholder='e.g. JavaScript' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTechText(e.target.value)} />
                    <button onClick={prepareTechList}>Add</button>
                </div>
                {obj.techStack.length > 0 &&
                <div className='formTechWrapper'>
                    {obj.techStack.map((tech: string) =>
                    <div key={tech} className={`${tech === thisTech ? 'bg-green-600' : ''}`}>{tech}
                        <TrashIcon className='w-5' onClick={() => setObj(prev => ({
                            ...prev, techStack: prev.techStack.filter(t => t !== tech)
                        }))} />
                    </div>)}
                </div>}
                <button type='submit'>Save</button>
            </div>
        </form>
    )
}

export default Form;