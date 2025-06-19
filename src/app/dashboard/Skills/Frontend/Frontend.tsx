'use cLient';
import React, { useState } from 'react';
import { FSkill } from '../../../../../types/Skills';
import Skill from '../Skill';
import Form from '../Form';
import SkillTemplate from '../SkillTemplate';

const Frontend = () => {
    const [frontend] = useState<FSkill[]>([
        {
            id: '1',
            imageLink: '/images/tech-icons/html.png',
            title: 'HTML5',
            level: 90,
        },
        {
            id: '2',
            imageLink: '/images/tech-icons/css.png',
            title: 'CSS3',
            level: 85,
        },
        {
            id: '3',
            imageLink: '/images/tech-icons/js.png',
            title: 'JavaScript',
            level: 80,
        },
        {
            id: '4',
            imageLink: '/images/tech-icons/ts.png',
            title: 'TypeScript',
            level: 80,
        },
        {
            id: '5',
            imageLink: '/images/tech-icons/next.png',
            title: 'Next.js',
            level: 70,
        },
        {
            id: '6',
            imageLink: '/images/tech-icons/react.png',
            title: 'React.js',
            level: 70,
        },
        {
            id: '7',
            imageLink: '/images/tech-icons/redux.png',
            title: 'Redux',
            level: 80,
        },
        {
            id: '8',
            imageLink: '/images/tech-icons/vue.png',
            title: 'Vue.js',
            level: 50,
        },
        {
            id: '9',
            imageLink: '/images/tech-icons/tailwind.png',
            title: 'Tailwind',
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
        <div>
            <h1 className='text-xl mb-3'>Frontend</h1>
            <div className='frontendSkillWrapper flex flex-wrap'>
                {frontend.map((skill: FSkill) =>
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
            <Form
                form={form}
                setForm={setForm}
                skillObj={skillObj}
                setSkillObj={setSkillObj}
                fileImage={fileImage}
                setFileImage={setFileImage}
                clearSkillObj={clearSkillObj}
            />
        </div>
    )
}

export default Frontend;