'use client';
import React, { useState } from 'react';
import Skill from '../Skill';
import { FSkill } from '../../../../../types/Skills';
import Form from '../Form';
import SkillTemplate from '../SkillTemplate';

const Backend = () => {
    const [backend] = useState<FSkill[]>([
        {
            id: '1',
            imageLink: '/images/tech-icons/node.png',
            title: 'Node.js',
            level: 80,
        },
        {
            id: '2',
            imageLink: '/images/tech-icons/next.png',
            title: 'Next.js',
            level: 70,
        },
        {
            id: '3',
            imageLink: '/images/tech-icons/mongo.png',
            title: 'MongoDB',
            level: 80,
        },
        {
            id: '4',
            imageLink: '/images/tech-icons/postgres.png',
            title: 'PostgreSQL',
            level: 60,
        },
        {
            id: '5',
            imageLink: '/images/tech-icons/express.png',
            title: 'Express.js',
            level: 80,
        },
    ]);
    const [form, setForm] = useState(false);
    const [skillObj, setSkillObj] = useState<FSkill>({
        id: '',
        imageLink: '',
        title: '',
        level: '',
    });
    const [fileImage, setFileImage] = useState<File | null>(null);

    const clearSkillObj = () => {
        setSkillObj({
            id: '',
            imageLink: '',
            title: '',
            level: '',
        });
        setFileImage(null);
    }

    return (
        <div className='mt-5'>
            <h1 className='text-xl mb-3'>Backend</h1>
            <div className='backendSkillWrapper flex flex-wrap'>
                {backend.map((skill: FSkill) =>
                <Skill
                    key={skill.id}
                    skill={skill}
                    setForm={setForm}
                    setSkillObj={setSkillObj}
                />)}
                {!skillObj.id &&
                <SkillTemplate
                    form={form}
                    setForm={setForm}
                    skillObj={skillObj}
                    fileImage={fileImage}
                />}
            </div>
            {form &&
            <Form
                setForm={setForm}
                skillObj={skillObj}
                setSkillObj={setSkillObj}
                fileImage={fileImage}
                setFileImage={setFileImage}
                clearSkillObj={clearSkillObj}
            />}
        </div>
    )
}

export default Backend;