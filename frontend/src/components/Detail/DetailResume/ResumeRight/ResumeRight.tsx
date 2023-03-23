import en from '@/locales/en';
import ru from '@/locales/ru';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import css from './ResumeRight.module.scss'
const ResumeRight = ({ item }: any) => {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    return (
        <div className={css.company__card}>
            <div className={css.experiance}>
                <p className={css.experiance__title}>{t.detailCard.description}</p>
                <ul className={css.experiance__list}>
                    <li>{t.detailCard.fio}: {item.recruiter.name}</li>
                    <li>{t.detailCard.post}: {item.recruiter.post}</li>
                    <li>{t.detailCard.number}: {item.recruiter.number}</li>
                    <li>{t.detailCard.email}: {item.recruiter.email}</li>
                    <li>{t.detailCard.experience}: {item.recruiter.experience} лет</li>
                    <li>{t.detailCard.salaryExpectation}: {item.recruiter.salary} $</li>
                </ul>
            </div>
            <p className={css.company__title}>{t.detailCard.links}</p>
            <div className={css.company__employees}>
                {item.recruiter.links.map((x: any, i: any) =>
                    <div key={i} className={css.employees__block}>
                        {x.icon}
                        <Link target={'_blank'} href={x.link} className={css.employees__title}>{x.title}</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResumeRight;