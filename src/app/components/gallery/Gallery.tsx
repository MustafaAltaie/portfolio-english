'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Gallery = () => {
    const [images, setImages] = useState<string[]>([]);
    const [column1, setColumn1] = useState<string[]>([]);
    const [column2, setColumn2] = useState<string[]>([]);
    const [column3, setColumn3] = useState<string[]>([]);
    const column1Ref = useRef<HTMLDivElement | null>(null);
    const column2Ref = useRef<HTMLDivElement | null>(null);
    const column3Ref = useRef<HTMLDivElement | null>(null);
    const [selected, setSelected] = useState<string>('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadedImages = [];
        for (let i = 1; i <= 33; i++) {
            loadedImages.push(`/images/design/${i}.png`);
        }
        setImages(loadedImages);
    }, []);

    const addToTexts = async () => {
        try {
            setLoading(true);
            for (const img of images){
                await new Promise(resolve => setTimeout(resolve, 200));
                const heigh1 = column1Ref.current?.offsetHeight;
                const heigh2 = column2Ref.current?.offsetHeight;
                const heigh3 = column3Ref.current?.offsetHeight;
                if (heigh1 != null && heigh2!= null && heigh3 != null) {
                    if (heigh1 <= heigh2 && heigh1 <= heigh3) {
                        setColumn1(prev => [...prev, img]);
                    } else if (heigh2 <= heigh1 && heigh2 <= heigh3) {
                        setColumn2(prev => [...prev, img]);
                    } else  {
                        setColumn3(prev => [...prev, img]);
                    }  
                }
                
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className='border-t-[0.5px]'>
            {column1.length > 0 && !loading && <button className='px-5 py-2 rounded-xl m-6 bg-[#966900] text-white' onClick={() => {setColumn1([]); setColumn2([]); setColumn3([])}}>Hide images</button>}
            {selected &&
            <motion.div
                className='w-full px-6 pt-3 pb-6 fixed top-1/2 -translate-y-1/2 bg-[#aaaaaa77]'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0 }}
            >
                <XMarkIcon className='w-5 mb-3 ml-auto text-white' onClick={() => setSelected('')} />
                <Image
                    src={selected}
                    alt='Image'
                    width={500}
                    height={500}
                    priority
                />
            </motion.div>}
            <div className={`flex items-start gap-1 ${column1.length ? 'p-5' : ''} bg-[#aaa]`}>
                <div ref={column1Ref} className={`w-1/2 ${column1.length ? 'p-1' : ''} flex flex-col gap-3`}>
                    {column1.map((img, index) =>
                    <motion.div
                        key={index}
                        initial={{ scale: 1.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0 }}
                        onClick={() => setSelected(img)}
                    >
                        <Image
                            className='shadow-2xl rounded-xl'
                            src={img}
                            alt='img'
                            width={150}
                            height={150}
                            loading='lazy'
                        />
                    </motion.div>)}
                </div>
                <div ref={column2Ref} className={`w-1/2 ${column1.length ? 'p-1' : ''} flex flex-col gap-3`}>
                    {column2.map((img, index) =>
                    <motion.div
                        key={index}
                        initial={{ scale: 1.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0 }}
                        onClick={() => setSelected(img)}
                    >
                        <Image
                            className='shadow-2xl rounded-xl'
                            src={img}
                            alt='img'
                            width={150}
                            height={150}
                            loading='lazy'
                        />
                    </motion.div>)}
                </div>
                <div ref={column3Ref} className={`w-1/2 ${column1.length ? 'p-1' : ''} flex flex-col gap-3`}>
                    {column3.map((img, index) =>
                    <motion.div
                        key={index}
                        initial={{ scale: 1.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0 }}
                        onClick={() => setSelected(img)}
                    >
                        <Image
                            className='shadow-2xl rounded-xl'
                            src={img}
                            alt='img'
                            width={150}
                            height={150}
                            loading='lazy'
                        />
                    </motion.div>)}
                </div>
            </div>
            {!column1.length && <button className='px-5 py-2 rounded-xl m-6 bg-[#966900] text-white' onClick={addToTexts}>View frontend design photos</button>}
            {column1.length > 0 && !loading && <button className='px-5 py-2 rounded-xl m-6 bg-[#966900] text-white' onClick={() => {setColumn1([]); setColumn2([]); setColumn3([])}}>Hide images</button>}
        </section>
    )
}

export default Gallery;