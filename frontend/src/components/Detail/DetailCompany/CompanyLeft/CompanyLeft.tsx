import en from '@/locales/en';
import ru from '@/locales/ru';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import css from './CompanyLeft.module.scss'
import webs from '@/media/icons/site.svg'
import { URL_IMG } from '@/api/key';
import { ComapnyId } from '@/interface';

interface Props {
    company: ComapnyId
}
const CompanyLeft = ({ company }: Props) => {
    const [mode, setMode] = useState(1)
    const [subscribe, setSubscribe] = useState(false)
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;

    return (
        <div className={css.detail__card}>
            <div className={css.detail__logo}>
                <div className={css.block__logo}>
                    <img src={`${URL_IMG}${company.image}`} alt="logo" className={css.icon} />
                    <p className={css.logo__name__mobile}>{company.name}</p>
                </div>
                <div className={css.logo__between}>
                    <div className={css.logo__btns}>
                        <p className={css.logo__name}>{company.name}</p>
                        <button
                            style={{
                                background: subscribe ? "#19f600" : ""
                            }}
                            className={css.apply} onClick={() => setSubscribe(true)}>{t.detailCard.subscribe}</button>
                    </div>
                    <ul className={css.logo__type}>
                        <li>{company.occupation}</li>
                    </ul>
                    <button
                        style={{
                            background: subscribe ? "#19f600" : ""
                        }}
                        className={css.apply_mobile} onClick={() => setSubscribe(true)}>{t.detailCard.subscribe}</button>
                </div>
            </div>
            <div className={css.table__btns}>
                <button
                    onClick={() => setMode(1)}
                    className={mode === 1 ? css.act : ""}>
                    {t.detailCard.companyDescription}</button>
                <button
                    className={mode === 2 ? css.act : ""}
                    onClick={() => setMode(2)}>{t.detailCard.openVacancies}</button>
            </div>
            <div
                style={{
                    display: mode === 1 ? 'block' : 'none'
                }}
            >
                <p className={css.descr}>{company.about_company}</p>

                <div className={css.experiance}>
                    <p className={css.experiance__title}>{t.detailCard.values}</p>
                    <ul className={css.experiance__descr}>
                        {company.values.map((x: any, i: any) =>
                            <li key={i}>{x}</li>
                        )}
                    </ul>
                </div>
                <div className={css.experiance}>
                    <p className={css.experiance__title}>{t.detailCard.links}</p>
                    <div className={css.company__employees}>
                        <Link target={'_blank'} href={company.company_website} className={css.employees__block}>
                            <Image src={webs} alt={'web__icon'} />
                            <p className={css.employees__title}>{company.name}</p>
                        </Link>
                    </div>
                </div>

            </div>
            <div
                style={{
                    display: mode === 2 ? 'block' : 'none'
                }}
            >
                <div className={css.cards}>
                    {company.vacancies.map((x: any) =>
                        <div className={css.block} key={x.id}>
                            <p className={css.company__title}>{x.position}</p>
                            <p className={css.company__descr}>{x.description}</p>
                            <ul className={css.condition}>
                                {x.job_type.map((a: string, o: number) =>
                                    <li className={css.remote} key={o}>{a}</li>
                                )}
                                {x.job_stack.map((a: string, o: number) =>
                                    <li className={css.type} key={o}>{a}</li>
                                )}
                                <li className={css.sale}>{x.from_salary} $</li>
                                <li className={css.year}>{x.from_experience} yers exp.</li>
                            </ul>
                            <Link href={`/vacancy/${x.id}`} className={css.view}>More...</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompanyLeft;