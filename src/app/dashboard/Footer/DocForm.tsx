import React, { useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { DocsObj } from '../../../../types/Footer';

interface DocFormProps {
    DocFormRef: React.RefObject<HTMLFormElement | null>
    handleSaveDocs: (e: React.FormEvent<HTMLFormElement>) => void
    docForm: boolean
    setDocForm: React.Dispatch<React.SetStateAction<boolean>>
    docs: DocsObj
    prepareDocs: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const DocForm = ({ DocFormRef, handleSaveDocs, docForm, setDocForm, docs, prepareDocs }: DocFormProps) => {

    useEffect(() => {
        const currentForm = DocFormRef.current;
        if (!currentForm) return;
        if (docForm) {
            currentForm.style.height = `${currentForm.scrollHeight}px`;
        } else {
            currentForm.style.height = '0px';
        }
    }, [docForm, DocFormRef]);

    return (
        <form ref={DocFormRef} onSubmit={handleSaveDocs} className={`${docForm && 'mb-5'}`}>
            <XMarkIcon className='w-9 ml-auto p-2' onClick={() => setDocForm(false)} />
            <div className="formInnerDiv">
                <label>
                    Bachalors degree image
                    <input type="file" name='doc1' value={docs.doc1} onChange={prepareDocs} />
                </label>
                <label>
                    Validated Bachalors Degree
                    <input type="file" name='doc2' value={docs.doc2} onChange={prepareDocs} />
                </label>
                <label>
                    Swedish Vocational Program (Full stack JS)
                    <input type="file" name='doc3' value={docs.doc3} onChange={prepareDocs} />
                </label>
                <label>
                    Resume (CV)
                    <input type="file" name='doc4' value={docs.doc4} onChange={prepareDocs} />
                </label>
                <label>
                    Personal Letter
                    <input type="file" name='doc5' value={docs.doc5} onChange={prepareDocs} />
                </label>
                <button type='submit'>Save</button>
            </div>
        </form>
    )
}

export default DocForm;