import React, { useEffect, useState } from 'react';
import css from './FindJob.module.scss';
import github from '@/media/icons/github.svg';
import linkidin from '@/media/icons/in.svg';
import telegram from '@/media/icons/telegram.svg';
import amaz from '@/media/icons/amaz.png';
import figma from '@/media/icons/figma.png';
import micros from '@/media/icons/micros.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';
import cx from 'classnames'

const companies = [
    {
        img: github,
        top: '58%',
        left: '10%'
    },
    {
        img: linkidin,
        top: '37%',
        left: '87%'
    },
    {
        img: telegram,
        top: '20%',
        left: '73%'
    },
    {
        img: amaz,
        top: '65%',
        left: '85%'
    },
    {
        img: figma,
        top: '80%',
        left: '20%'
    },
    {
        img: micros,
        top: '20%',
        left: '20%'
    },

]


const FindJob = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;



    return (
        <div className={css.wrapper}>
            {companies.map((item, i) => (
                <Image
                    key={i}
                    src={item.img}
                    alt={item.img}
                    className={css.icons}
                    style={{
                        transform: `translateY(${(offsetY - 0) * 0.05}px)`,
                        left: item.left,
                        top: item.top

                    }}
                />
            ))}
            <p className={css.number}>{t.countless.top}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99983 22H15.9998C20.0198 22 20.7398 20.39 20.9498 18.43L21.6998 10.43C21.9698 7.99 21.2698 6 16.9998 6H6.99983C2.72983 6 2.02983 7.99 2.29983 10.43L3.04983 18.43C3.25983 20.39 3.97983 22 7.99983 22Z" stroke="#6a38c2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6" stroke="#6a38c2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z" stroke="#6a38c2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02" stroke="#6a38c2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.62012 11.27C4.87012 12.81 7.41012 13.74 10.0001 14.03" stroke="#6a38c2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </p>
            <p className={css.title}>{t.findJob.title__left}
                <br /> {t.findJob.title__center} <span>{t.findJob.title__right}</span></p>
            <p className={css.descr}>{t.findJob.descr}</p>
            <div className={css.btns}>
                <Link href={'/auth/sign-in'} className={css.login}>{t.findJob.login}</Link>
                <Link href={'/auth/sign-up'} className={css.register}>{t.findJob.register}</Link>
            </div>
        </div>
    );
};

export default FindJob;