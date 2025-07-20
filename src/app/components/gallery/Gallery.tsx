'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const [images, setImages] = useState<string[]>([]);
    const [column1, setColumn1] = useState<string[]>([]);
    const [column2, setColumn2] = useState<string[]>([]);
    const [column3, setColumn3] = useState<string[]>([]);
    const column1Ref = useRef<HTMLDivElement | null>(null);
    const column2Ref = useRef<HTMLDivElement | null>(null);
    const column3Ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const loadedImages = [];
        for (let i = 1; i <= 33; i++) {
            loadedImages.push(`/images/design/${i}.png`);
        }
        setImages(loadedImages);
    }, []);

    const addToTexts = async () => {
        for (const img of images){
            await new Promise(resolve => setTimeout(resolve, 200));
            const heigh1 = column1Ref.current?.offsetHeight;
            const heigh2 = column2Ref.current?.offsetHeight;
            const heigh3 = column3Ref.current?.offsetHeight;

            if (heigh1! <= heigh2! && heigh1! <= heigh3!) {
                setColumn1(prev => [...prev, img]);
            } else if (heigh2! <= heigh1! && heigh2! <= heigh3!) {
                setColumn2(prev => [...prev, img]);
            } else  {
                setColumn3(prev => [...prev, img]);
            }
        }
    }

    return (
        <section className='border-t-[0.5px]'>
            <div className={`flex items-start gap-1 ${column1.length ? 'p-5' : ''} bg-[#aaa]`}>
                <div ref={column1Ref} className={`w-1/2 ${column1.length ? 'p-1' : ''} flex flex-col gap-3`}>
                    {column1.map((img, index) =>
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <img className='shadow-2xl rounded-xl' src={img} alt='img' />
                    </motion.div>)}
                </div>
                <div ref={column2Ref} className={`w-1/2 ${column1.length ? 'p-1' : ''} flex flex-col gap-3`}>
                    {column2.map((img, index) =>
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <img className='shadow-2xl rounded-xl' src={img} alt='img' />
                    </motion.div>)}
                </div>
                <div ref={column3Ref} className={`w-1/2 ${column1.length ? 'p-1' : ''} flex flex-col gap-3`}>
                    {column3.map((img, index) =>
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <img className='shadow-2xl rounded-xl' src={img} alt='img' />
                    </motion.div>)}
                </div>
            </div>
            {!column1.length && <button className='p-5 ml-2' onClick={addToTexts}>View frontend design photos</button>}
            {column1.length > 0 && <button className='p-5 ml-2' onClick={() => {setColumn1([]); setColumn2([]); setColumn3([])}}>Hide images</button>}
        </section>
    )
}

export default Gallery;