import { Vacansy } from '@/interface';
import en from '@/locales/en';
import ru from '@/locales/ru';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import cx from 'classnames'
import css from '../card.module.scss'

interface ICardVacancy {
    item: any
}
const CardResume = ({ item }: ICardVacancy) => {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;

    return (
        <div className={css.block} key={item.id}>
            <div className={css.company}>
                <img
                    src={item.company.img}
                    alt="bold__icon"
                    className={css.company__icon}
                />
                <div className={css.company__descr}>
                    <p className={css.company__name}>{item.company.name}</p>
                    <p className={css.company__location}>{item.company.location}</p>
                </div>
            </div>
            <p className={css.company__title}>{item.title}</p>
            <p className={css.company__descr}>{item.descr}</p>
            <ul className={css.condition}>
                <li className={css.remote}>{item.condition.remote}</li>
                <li className={css.sale}>{item.condition.sale} $</li>
                <li className={css.type}>{item.condition.type}</li>
                <li className={css.year}>{item.condition.year} {t.card.exp}</li>
            </ul>
            <Link href="/resume/1" className={css.view}>{t.card.more}</Link>
        </div>
    );
};

export default CardResume;