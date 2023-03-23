import React, { useEffect, useState } from 'react';
import css from './Job.module.scss'
import Image from 'next/image';
import CardVacancy from '@/components/Card/Vacancy/CardVacancy';
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';
import cx from 'classnames'
const step = [
    {
        id: 0,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 1,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 2,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 3,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 4,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 5,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
]

const Job = () => {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;



    return (
        <div className={css.wrapper}>
            <p className={css.title}><span>{t.job.title__left}</span> {t.job.title__right}</p>
            <p className={css.descr}>{t.job.descr}</p>
            <div className={css.blocks}>
                {/* {step.map((item, index) => (
                    <CardVacancy item={item} key={index} />
                ))} */}
            </div >
        </div >
    );
};

export default Job;