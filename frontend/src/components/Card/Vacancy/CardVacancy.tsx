import Link from 'next/link';
import React, { useState } from 'react';
import css from '../card.module.scss'
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';
import { Vacansy } from '@/interface';

interface ICardVacancy {
    item: Vacansy,
}
const CardVacancy = ({ item }: ICardVacancy) => {

    const [apply, setApply] = useState(false)
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;

    return (
        <div className={css.block} key={item.id}>
            <div className={css.company}>
                {item.company.image ?
                    <img
                        src={item.company.image}
                        alt="bold__icon"
                        className={css.company__icon}
                    /> :
                    <p className={css.company__icon}
                        style={{
                            background: '#ffbb00'
                        }}
                    >
                        {item.company.name.charAt(0).toUpperCase()}
                    </p>
                }
                <div className={css.company__descr}>
                    <Link href={'/company/1'} className={css.company__name}>{item.company.name}</Link>
                    <p className={css.company__location}>{item.company.location}</p>
                </div>
            </div>
            <p className={css.company__title}>{item.position}</p>
            <p className={css.company__descr}>{item.description}</p>
            <ul className={css.condition}>
                {
                    item.job_type.map((x, i) =>
                        <li className={css.type} key={i}>{x}</li>
                    )
                }
                {
                    item.job_stack.map((x, i) =>
                        <li className={css.remote} key={i}>{x}</li>
                    )
                }
                <li className={css.sale}>{item.from_salary} $</li>
                <li className={css.year}>{item.from_experience} {t.card.exp}</li>
            </ul>
            <div className={css.btns}>
                <Link
                    target={'_blank'}
                    href={'https://t.me/israilov02'}
                    style={{
                        background: apply ? "#19f600" : ''
                    }}
                    className={css.apply}
                    onClick={() => setApply(true)}
                >

                    {t.card.apply}
                </Link>
                <Link href={`/vacancy/${item.id}`} className={css.view}>{t.card.more}</Link>
            </div>
        </div >
    );
};

export default CardVacancy;