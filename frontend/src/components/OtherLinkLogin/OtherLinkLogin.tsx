import en from '@/locales/en';
import ru from '@/locales/ru';
import { useRouter } from 'next/router';
import React from 'react';
import css from './OtherLinkLogin.module.scss'

const OtherLinkLogin = () => {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    return (
        <>
            <p className={css.or}>Or, login with</p>
            <div className={css.otherLogin}>
                <button className={css.otherBtn}>Google</button>
                <button className={css.otherBtn}>Linkedin</button>
                <button className={css.otherBtn}>GitHub</button>
            </div>
        </>
    );
};

export default OtherLinkLogin;