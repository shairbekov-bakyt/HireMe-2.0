import React from 'react';
import cx from 'classnames'
import css from '../Recommended.module.scss'
import Link from 'next/link';
import CardCompany from '../../Card/Company/CardCompany';
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';


const RecommendedCompany = ({ item }: any) => {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    return (
        <div className={css.wrapper}>
            <div className={css.card__block}>
                <p className={css.card__title}>{t.recommendation.title}</p>
                <Link href="/company" className={cx(css.web__btn, css.btn)}>{t.recommendation.view}</Link>
            </div>
            <div className={css.cards}>
                {item.map((ix: any, index: number) => (
                    <CardCompany item={ix} key={index} />
                ))}
            </div>
            <Link href="/vacancy" className={cx(css.mobile__btn, css.btn)}>{t.recommendation.view}</Link>
        </div>
    );
};

export default RecommendedCompany;