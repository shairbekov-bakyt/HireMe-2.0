import React from 'react';
import cx from 'classnames'

import css from '../Recommended.module.scss'

import CardVacancy from '../../Card/Vacancy/CardVacancy';
import Link from 'next/link';
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';


const RecommendedVacancy = ({ item }: any) => {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;

    return (
        <div className={css.wrapper}>
            <div className={css.card__block}>
                <p className={css.card__title}>{t.recommendation.title}</p>
                <Link href="/vacancy" className={cx(css.web__btn, css.btn)}>{t.recommendation.view}</Link>
            </div>
            <div className={css.cards}>
                {/* {item.map((ix: any, index: any) => (
                    <CardVacancy item={ix} key={index} />
                ))} */}
            </div>
            <Link href="/vacancy" className={cx(css.mobile__btn, css.btn)}>{t.recommendation.view}</Link>
        </div>
    );
};

export default RecommendedVacancy;