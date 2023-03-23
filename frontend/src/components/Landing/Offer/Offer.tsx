import en from '@/locales/en';
import ru from '@/locales/ru';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import css from './Offer.module.scss'
import cx from 'classnames'



const Offer = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    const step = [
        {
            img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            number: '01',
            title: t.offer.job,
        },
        {
            img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
            number: '02',
            title: t.offer.create,
        },
        {
            img: "https://images.unsplash.com/photo-1653669486356-2de0c7ceaceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            number: '03',
            title: t.offer.career,
        }
    ]

  

    return (
        <div className={css.wrapper}>
            <p className={css.title}><span>{t.offer.title__left}</span> {t.offer.title__center} <br /> {t.offer.title__right}</p>
            <div className={css.blocks}>
                {step.map((item, index) => (
                    <div className={css.block} key={index}
                        style={{
                            opacity: `${offsetY >= 540 ? 1 : 0}`,
                        }}
                    >
                        <img src={item.img} alt="img" className={css.icons} />
                        <div className={css.block__descr}>
                            <p className={css.number}>{item.number}</p>
                            <p className={css.title}>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Offer;