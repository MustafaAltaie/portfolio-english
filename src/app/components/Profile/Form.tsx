import React from 'react';

interface FormProps {
    handleSaveProfile: (e: React.FormEvent<HTMLFormElement>) => void
    form: boolean
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
    setForm: React.Dispatch<React.SetStateAction<boolean>>
}

const Form = ({ handleSaveProfile, form, text, setText, setForm }: FormProps) => {
    return (
        <form onSubmit={handleSaveProfile} className={`${form ? 'max-h-50' : 'max-h-0'}`}>
            <h1 className='my-2 w-fit ml-auto text-xl cursor-pointer' onClick={() => setForm(false)}>X</h1>
            <div className="formInnerDiv">
                <textarea name="" placeholder='Profile text' value={text} onChange={e => setText(e.target.value)}></textarea>
                <button type='submit'>Save</button>
            </div>
        </form>
    )
}

export default Form;