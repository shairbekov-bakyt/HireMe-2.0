import Link from 'next/link';
import React from 'react';
import css from '../RecruiterCard.module.scss'
import telegram from '@/media/icons/telegram.svg'
import github from '@/media/icons/github.svg'
import linkedin from '@/media/icons/in.svg'
import email from '@/media/icons/mail.svg'
import Image from 'next/image';
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';

const EmployerCard = ({ item }: any) => {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    return (
        <div className={css.company__card}>
            <p className={css.company__title}>{t.detailCard.about}</p>
            <p className={css.company__descr}>{item.user_ambition.about_myself}</p>
            <p className={css.company__title}>{t.detailCard.links}</p>
            <div className={css.company__employees}>
                <div className={css.employees__block}>
                    <Image
                        src={email}
                        alt={email}
                    />
                    <a target={'_blank'} href={`mailto:${item.email}`} className={css.employees__title}>Email</a>
                </div>
                <div className={css.employees__block}>
                    <Image
                        src={linkedin}
                        alt={linkedin}
                    />
                    <Link target={'_blank'} href={item.linkedIn} className={css.employees__title}>Linkedin</Link>
                </div>
                <div className={css.employees__block}>
                    <Image
                        src={github}
                        alt={github}
                    />
                    <Link target={'_blank'} href={item.github} className={css.employees__title}>GitHub</Link>
                </div>
                <div className={css.employees__block}>
                    <Image
                        src={telegram}
                        alt={telegram}
                    />
                    <Link target={'_blank'} href={item.telegram} className={css.employees__title}>Telegram</Link>
                </div>
            </div>
        </div >
    );
};

export default EmployerCard;