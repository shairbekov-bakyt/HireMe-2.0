import en from '@/locales/en';
import ru from '@/locales/ru';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import css from '../RecruiterCard.module.scss'
import telegram from '@/media/icons/telegram.svg'
import github from '@/media/icons/github.svg'
import linkedin from '@/media/icons/in.svg'
import email from '@/media/icons/mail.svg'
const RecruiterCard = ({ item, mode }: any) => {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    return (
        <div className={css.company__card}>
            <div style={{ display: mode === 1 ? 'block' : 'none' }}>
                <p className={css.company__title}>{t.detailCard.about}</p>
                <p className={css.company__descr}>{item.recruiter.about}</p>
                <p className={css.company__title}>{t.detailCard.links}</p>
                <div className={css.company__employees}>
                    <div className={css.employees__block}>
                        <Image
                            src={email}
                            alt={email}
                        />
                        <a target={'_blank'} href={`mailto:sardor_09062002@mail.ru`} className={css.employees__title}>Email</a>
                    </div>
                    <div className={css.employees__block}>
                        <Image
                            src={linkedin}
                            alt={linkedin}
                        />
                        <Link target={'_blank'} href={"https://www.youtube.com/"} className={css.employees__title}>Linkedin</Link>
                    </div>
                    <div className={css.employees__block}>
                        <Image
                            src={github}
                            alt={github}
                        />
                        <Link target={'_blank'} href={"https://www.youtube.com/"} className={css.employees__title}>GitHub</Link>
                    </div>
                    <div className={css.employees__block}>
                        <Image
                            src={telegram}
                            alt={telegram}
                        />
                        <Link target={'_blank'} href={"https://www.youtube.com/"} className={css.employees__title}>Telegram</Link>
                    </div>
                </div>
            </div>
            <div style={{ display: mode === 2 ? 'block' : 'none' }} >
                <p className={css.company__title}>{t.detailCard.overview}</p>
                <p className={css.company__descr}>{item.company.descr}</p>
                <p className={css.company__title}>{t.detailCard.benefits}</p>
                <ul className={css.company__benefit}>
                    {item.company.benefit.map((x: any, i: any) =>
                        <li key={i}>{x.title}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default RecruiterCard;