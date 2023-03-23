import WorkExperience from '@/components/Card/WorkExperience/WorkExperience';
import en from '@/locales/en';
import ru from '@/locales/ru';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import css from './ResumeLeft.module.scss'

const ResumeLeft = ({ item, }: any) => {

    const [mode, setMode] = useState(1)
    const [apply, setApply] = useState(false)

    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    return (
        <div className={css.detail__card}>
            <div className={css.detail__logo}>
                <div className={css.block__logo}>
                    <img src={item.recruiter.logo} alt="logo" className={css.icon} />
                    <p className={css.logo__name__mobile}>{item.recruiter.name}</p>
                </div>
                <div className={css.logo__between}>
                    <div className={css.logo__block}>
                        <p className={css.logo__name}>{item.recruiter.name}</p>
                        <ul className={css.logo__type}>
                            <li>{item.recruiter.post}</li>
                        </ul>
                    </div>
                    <Link
                        target={'_blank'}
                        href={'https://t.me/israilov02'}
                        style={{
                            background: apply ? "#19f600" : "",
                        }}
                        className={css.apply}
                        onClick={() => setApply(true)}
                    >
                        {t.detailCard.apply}
                    </Link>
                </div>
            </div>
            <div className={css.table__btns}>
                <button
                    onClick={() => setMode(1)}
                    className={mode === 1 ? css.act : ""}>
                    {t.detailCard.personalData}</button>
                <button
                    className={mode === 2 ? css.act : ""}
                    onClick={() => setMode(2)}>{t.detailCard.experience}</button>
            </div>
            <div style={{ display: mode === 1 ? 'block' : 'none' }} >
                <p className={css.descr}>{item.recruiter.about}</p>
                <div className={css.experiance}>
                    <p className={css.experiance__title}>{t.detailCard.stacks}</p>
                    <ul className={css.stack}>
                        {item.recruiter.stack.map((x: any, i: any) =>
                            <li key={i}>{x.title}</li>
                        )}
                    </ul>
                </div>
                <div className={css.experiance}>
                    <p className={css.experiance__title}>{t.detailCard.expectations}</p>
                    <ul className={css.experiance__list}>
                        <li>{item.recruiter.expectations}</li>
                    </ul>
                </div>
                <div className={css.experiance}>
                    <p className={css.experiance__title}>{t.detailCard.achievements}</p>
                    <ul className={css.experiance__list}>
                        <li>{item.recruiter.progress}</li>
                    </ul>
                </div>
            </div>
            <div style={{ display: mode === 2 ? 'block' : 'none' }}>
                <div className={css.experiance}>
                    {item.recruiter.work_experience.map((x: any, i: any) =>
                        <WorkExperience x={x} i={i} key={i} />
                    )}
                </div>
            </div>
        </div >
    );
};

export default ResumeLeft;