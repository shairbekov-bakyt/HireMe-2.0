import Image from 'next/image';
import React from 'react';
import css from './RightVacansy.module.scss'
import bold__user from '@/media/icons/bold/bold__user.svg'
import bold__location from '@/media/icons/bold/bold__location.svg'
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';
import { VacansyId } from '@/interface';
import Link from 'next/link';

interface Props {
    item: VacansyId
}

const RightVacansy = ({ item }: Props) => {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    console.log(item)

    return (
        <div className={css.company__card}>
            <Link href={`/company/${item.company.id}`} className={css.company__title__benefit}>{item.company.name}</Link>
            <p className={css.company__descr}>{item.company.about_company}</p>
            <div className={css.company__employees}>
                <div className={css.employees__block}>
                    <Image src={bold__user} alt="bold__user" className={css.employees__icon} />
                    <p className={css.employees__title}>10 000+ {t.detailCard.employees}</p>
                </div>
                <div className={css.employees__block}>
                    <Image src={bold__location} alt="bold__location" className={css.employees__icon} />
                    <p className={css.employees__title}>{item.company.location}</p>
                </div>
            </div>
            <p className={css.company__title__benefit}>{t.detailCard.benefits}</p>
            <ul className={css.company__benefit}>
                {item.job_benefits.map((x, i) =>
                    <li key={i}>{x}</li>
                )}
            </ul>
        </div>
    );
};

export default RightVacansy;