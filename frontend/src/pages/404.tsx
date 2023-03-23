import React from 'react';
import css from '@/styles/pages/found.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';

const NotFoundPage = () => {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    return (
        <div className={css.wrapper}>
            <div className={css.scene}>
                <div className={css.planet}>
                    <div className={css.crater}></div>
                    <div className={css.crater}></div>
                    <div className={css.crater}></div>
                    <div className={css.crater}></div>
                    <div className={css.crater}></div>
                    <div className={css.rover}>
                        <div className={css.body}></div>
                        <div className={css.wheels}></div>
                        <div className={css.trace}></div>
                    </div>
                    <Link href={'/'} className={css.flag}>404</Link>
                </div>
            </div>
            <div className={css.message}>
                <p>{t.notFound.title_left} <Link href={'/'}>{t.notFound.title}</Link></p>
            </div>
        </div>
    );
};

export default NotFoundPage;