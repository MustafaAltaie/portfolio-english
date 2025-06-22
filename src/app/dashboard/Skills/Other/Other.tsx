'use client';
import React, { useState, useEffect } from 'react';
import { FSkill } from '../../../../../types/Skills';
import Skill from './Skill';
import Form from '../Form';
import { v4 as uuidv4 } from 'uuid';
import SkillTemplate from '../SkillTemplate';
import {
    useCreateOtherSkillMutation,
    useReadOtherSkillsQuery,
    // useUpdateOtherSkillMutation,
    useUploadOtherSkillIconMutation,
    // useChangeOtherSkillIconMutation,
} from '../../../../../features/skills/skillsApi';

const Other = () => {
    const [other, setOther] = useState<FSkill[]>([]);
    const [form, setForm] = useState(false);
    const [skillObj, setSkillObj] = useState<FSkill>({
        id: '',
        imageLink: '',
        title: '',
        level: '',
    });
    const [fileImage, setFileImage] = useState<File | null>(null);
    const [createOtherSkill] = useCreateOtherSkillMutation();
    const { data, isLoading, isError } = useReadOtherSkillsQuery();
    const [uploadOtherSkillIcon] = useUploadOtherSkillIconMutation();
    // const [updateOtherSkill] = useUpdateOtherSkillMutation();
    // const [changeOtherSkillIcon] = useChangeOtherSkillIconMutation();

    useEffect(() => {
        if (data && !isLoading) {
            const transformed: FSkill[] = data.map(skill => ({
                id: skill._id,
                imageLink: skill.imageLink,
                title: skill.title,
                level: skill.level,
            }));
            setOther(transformed);
        }
    }, [data, isLoading]);

    if (isLoading) return <p>...Loading skills</p>
    if (isError) return <p>Error loading skills</p>

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let imageLink = fileImage?.name || skillObj.imageLink;
        try {
            if (fileImage) {
                const ext = fileImage.name.includes('.') ?
                    fileImage.name.lastIndexOf('.') :
                    '.png';
                const newName = `${uuidv4()}${ext}`;
                const renamedFile = new File([fileImage], newName, { type: fileImage.type });
                const formData = new FormData();
                formData.append('image', renamedFile);
                imageLink = newName;
                if (skillObj.id) {
                    //await changeOtherSkillIcon({ formData, oldImage: skillObj.imageLink }).unwrap();
                } else {
                    await uploadOtherSkillIcon(formData).unwrap();
                }
            }
            const newItem: FSkill = {
                ...skillObj,
                imageLink
            }
            if (skillObj.id) {
                //await updateOtherSkill({ id: skillObj.id, data: newItem }).unwrap();
            } else {
                await createOtherSkill(newItem).unwrap();
            }
            clearSkillObj();
        } catch (err) {
            console.error(err);
            alert('Error saving skill');
        }
    }

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
            <h1 className='text-xl mb-3'>Other skills</h1>
            <div className='otherSkillWrapper flex flex-wrap'>
                {other.map((skill: FSkill) => 
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
                handleSave={handleSave}
            />
        </div>
    )
}

export default Other;