import { Comapny } from '@/interface';
import en from '@/locales/en';
import ru from '@/locales/ru';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import cx from 'classnames'
import css from '../card.module.scss'
import { URL_IMG } from '@/api/key';
import Image from 'next/image';

interface Props {
    item: Comapny
}

const CardCompany = ({ item }: Props) => {
    const [subscribe, setSubscribe] = useState(false)
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;

    return (
        <div className={css.block} key={item.id}>
            <div className={css.company}>
                <img
                    src={`${URL_IMG}${item.image}`}
                    alt="bold__icon"
                    className={css.company__icon}
                />
                <div className={css.company__descr}>
                    <Link href={'/company/1'} className={css.company__name}>{item.name}</Link>
                    <p className={css.company__location}>{item.location}</p>
                </div>
            </div>
            <p className={css.company__descr}>{item.about_company}</p>
            <ul className={css.condition}>
                <li className={css.sale}>{item.vacancies} {t.card.vacansy}</li>
                <li className={css.type}>{item.employer} {t.card.employees}</li>
                <li className={css.remote}>
                    <Link href={'/resume/1'}>
                        Soso Pavlioshvil, IT-Recruiter
                    </Link>
                </li>
            </ul>
            <div className={css.btns}>
                <button
                    style={{
                        background: subscribe ? "#19f600" : ''
                    }}
                    className={css.apply} onClick={() => setSubscribe(true)}>{subscribe ? t.card.unsubscribe : t.card.subscribe}</button>
                <Link href={`/company/${item.id}`} className={css.view}>{t.card.more}</Link>
            </div>
        </div >
    );
};

export default CardCompany;