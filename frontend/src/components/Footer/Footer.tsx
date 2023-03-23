import en from '@/locales/en';
import ru from '@/locales/ru';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import css from './footer.module.scss'
import logoName from '@/media/icons/logoName.svg'

const Footer = () => {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <Image
                    src={logoName}
                    alt='HireMe'
                    className={css.logoName}
                />
                <ul className={css.blogBlock}>
                    <li className={css.link}>{t.footer.term}</li>
                    <li className={css.link}>{t.footer.politics}</li>
                    <li className={css.link}>{t.footer.idea}</li>
                    <li className={css.link}>{t.footer.me}</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;