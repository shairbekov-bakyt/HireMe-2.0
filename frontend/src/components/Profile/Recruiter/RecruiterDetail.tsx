import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import css from '../RecruiterDetail.module.scss'
import edit from '@/media/icons/edit.svg'
import Portal from '@/components/Portal/Portal';
import EditeRcruiter from '@/components/Portal/EditeRcruiter/EditeRcruiter';
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';
import cx from 'classnames'
const RecruiterDetail = ({ item, mode, setModeOne, setModeTwo }: any) => {
    const [modal, setModal] = useState(false)
    const [step, setStep] = useState(1)
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;

    return (
        <>
            <div className={css.detail__card}>
                <div className={css.detail__logo}>
                    <img src={item.recruiter.logo} alt="recruiter_logo" className={css.icon} />
                    <div className={css.logo__between}>
                        <p className={css.logo__name}>{item.recruiter.name}</p>
                        <p className={css.logo__type}>{item.recruiter.post}</p>
                    </div>
                    <button onClick={() => setModal(true)} className={css.edit}>{t.detailCard.edit}</button>
                    <Image src={edit} onClick={() => setModal(true)} alt="edit" className={css.edit__mobile} />
                </div>
                <div className={css.table__btns}>
                    <button
                        onClick={setModeOne}
                        className={cx(css.btn, mode === 1 ? css.act : '')}>
                        {t.detailCard.personalData}</button>
                    <button
                        className={cx(css.btn, mode === 2 ? css.act : '')}
                        onClick={setModeTwo}>{t.detailCard.overview}</button>
                </div>
                <div style={{ display: mode === 1 ? 'block' : 'none' }} >
                    <div className={css.experiance}>
                        <p className={css.experiance__title}>{t.detailCard.description}</p>
                        <ul className={css.experiance__list}>
                            <li>{t.detailCard.fio}: {item.recruiter.name}</li>
                            <li>{t.detailCard.post}: {item.recruiter.post}</li>
                            <li>{t.detailCard.number}: {item.recruiter.number}</li>
                            <li>{t.detailCard.email}: {item.recruiter.email}</li>
                            <li>{t.detailCard.experience}: {item.recruiter.experience} {t.detailCard.years}</li>
                        </ul>
                    </div>
                    <div className={css.experiance}>
                        <p className={css.experiance__title}>{t.detailCard.achievements}</p>
                        <ul className={css.experiance__list}>
                            <li>{item.recruiter.progress}</li>
                        </ul>
                    </div>
                    <div className={css.experiance}>
                        <p className={css.experiance__title}>{t.detailCard.experience}</p>
                        {item.recruiter.work_experience.map((x: any, i: any) =>
                            <div key={i} className={css.work_experience}>
                                <div className={css.detail__logo}>
                                    <img src={x.logo} alt="detail__logo" className={css.icon} />
                                    <div className={css.logo__between}>
                                        <p className={css.logo__name}>{x.title}</p>
                                        <p className={css.logo__descr}>{x.sphere}</p>
                                    </div>
                                </div>
                                <p className={css.logo__descr__mobile}>{x.sphere}</p>
                                <p className={css.detail__title}>{x.date_work}</p>
                                <p className={css.detail__descr}>{x.descr}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div style={{ display: mode === 2 ? 'block' : 'none' }}>
                    <div className={css.experiance}>
                        <div className={css.company__logo}>
                            <img src={item.company.logo} alt="logo" className={css.icon} />
                            <div className={css.logo__between}>
                                <p className={css.logo__name}>{item.company.title}</p>
                                <p className={css.logo__descr}>{item.company.sphere}</p>
                            </div>
                        </div>
                        <p className={css.logo__sphere__mobile}>{item.company.sphere}</p>
                    </div>
                    <div className={css.experiance}>
                        <p className={css.experiance__title}>{t.detailCard.description}</p>
                        <ul className={css.experiance__list}>
                            <li>{t.detailCard.name}: {item.company.title}</li>
                            <li>{t.detailCard.city}: {item.company.location}</li>
                            <li>{t.detailCard.employer}: {item.company.employer} {t.detailCard.people}</li>
                            <li>{t.detailCard.email}: {item.company.email}</li>
                        </ul>
                    </div>
                    <div className={css.experiance}>
                        <p className={css.experiance__title}>{t.detailCard.values}</p>
                        <ul className={css.experiance__list}>
                            {item.company.our_values.map((x: any, i: any) =>
                                <li key={i}>{x.title}</li>
                            )}
                        </ul>
                    </div>
                    <div className={css.experiance}>
                        <p className={css.experiance__title}>{t.detailCard.links}</p>
                        <div className={css.company__employees}>
                            {item.company.links.map((x: any, i: any) =>
                                <div key={i} className={css.employees__block}>
                                    {x.icon}
                                    <Link target={'_blank'} href={x.link} className={css.employees__title}>{x.title}</Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={css.experiance}>
                        <p className={css.experiance__title}>{t.detailCard.vacansy}</p>
                        <ul className={css.experiance__list}>
                            {item.company.vacansy.map((x: any, i: any) =>
                                <li key={i}>
                                    <Link href={x.link}>
                                        {x.title}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <Portal show={modal} onClose={() => setModal(false)}>
                <div className={css.modal}>
                    <p className={css.modal__title}>{t.detailCard.editMyCV}</p>
                    <div className={css.table__btns}>
                        <button
                            className={css.btn}
                            onClick={() => setStep(1)}
                            style={{
                                borderBottom: step === 1 ? '3px solid #6a38c2' : 'none'
                            }}>
                            {t.detailCard.personalData}</button>
                        <button
                            className={css.btn}
                            style={{
                                borderBottom: step === 2 ? '3px solid #6a38c2' : 'none'
                            }}
                            onClick={() => setStep(2)}>{t.detailCard.overview}</button>
                    </div>
                    <EditeRcruiter step={step} item={item} />
                </div>
            </Portal>
        </>

    );
};

export default RecruiterDetail;