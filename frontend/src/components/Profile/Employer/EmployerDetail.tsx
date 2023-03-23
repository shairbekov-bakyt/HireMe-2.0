import React, { useState } from 'react';
import css from '../RecruiterDetail.module.scss'
import edit from '@/media/icons/edit.svg'
import Image from 'next/image';
import Portal from '@/components/Portal/Portal';
import EditEmployer from '@/components/Portal/EditEmployer/EditEmployer';
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';
import { UserId } from '@/interface';
import dayjs from 'dayjs';

interface Props {
    item: any,
    mode: number,
    setModeOne: () => void
    setModeTwo: () => void
}

const EmployerDetail = ({ item, mode, setModeOne, setModeTwo }: Props) => {
    const [modal, setModal] = useState(false)
    const [step, setStep] = useState(1)

    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    const hadnlerOpen = (e: any) => {
        setModal(true)
        document.body.addEventListener("wheel", e.preventDefault(), { passive: false })
    }
    return (
        <>
            <div className={css.detail__card}>
                <div className={css.detail__logo}>
                    <img src={`http://ec2-54-205-99-166.compute-1.amazonaws.com${item.photo}`} alt="recruiter_logo" className={css.icon} />
                    <div className={css.logo__between}>
                        <p className={css.logo__name}>{item.full_name}</p>
                        <p className={css.logo__type}>{item.position}</p>
                    </div>
                    <button onClick={(e) => hadnlerOpen(e)} className={css.edit}>{t.detailCard.edit}</button>
                    <Image src={edit} onClick={() => setModal(true)} alt="edit" className={css.edit__mobile} />
                </div>
                <div className={css.table__btns}>
                    <button
                        className={css.btn}
                        onClick={setModeOne}
                        style={{
                            borderBottom: mode === 1 ? '3px solid #6a38c2' : 'none'
                        }}>
                        {t.detailCard.personalData}</button>
                    <button
                        className={css.btn}
                        style={{
                            borderBottom: mode === 2 ? '3px solid #6a38c2' : 'none'
                        }}
                        onClick={setModeTwo}>{t.detailCard.experience}</button>
                </div>
                <div style={{ display: mode === 1 ? 'block' : 'none' }} >
                    <div className={css.experiance}>
                        <p className={css.experiance__title}>{t.detailCard.description}</p>
                        <ul className={css.experiance__list}>
                            <li>{t.detailCard.fio}: {item.full_name}</li>
                            <li>{t.detailCard.post}: {item.position}</li>
                            <li>{t.detailCard.number}: {item.phone_number}</li>
                            <li>{t.detailCard.email}: {item.email}</li>
                            <li>{t.detailCard.experience}: {item.experience_year} лет</li>
                            <li>{t.detailCard.salaryExpectation}: {item.salary_expectation} $</li>
                        </ul>
                    </div>
                    <div className={css.experiance}>
                        <p className={css.experiance__title}>{t.detailCard.stacks}</p>
                        <ul className={css.stack}>
                            {item.stacks.map((x: string, i: number) =>
                                <li key={i}>{x}</li>
                            )}
                        </ul>
                    </div>
                    <div className={css.experiance}>
                        <p className={css.experiance__title}>{t.detailCard.expectations}</p>
                        <ul className={css.experiance__list}>
                            <li>
                                {item.user_ambition.expectation}
                            </li>
                        </ul>
                    </div>
                    <div className={css.experiance}>
                        <p className={css.experiance__title}>{t.detailCard.achievements}</p>
                        <ul className={css.experiance__list}>
                            <li>
                                {item.user_ambition.achievement}
                            </li>
                        </ul>
                    </div>

                </div>
                <div style={{ display: mode === 2 ? 'block' : 'none' }}>
                    <div className={css.experiance}>
                        <p className={css.experiance__title}>{t.detailCard.experience}</p>
                        {item.worked_companies.map((x: any, i: number) =>
                            <div key={i} className={css.work_experience}>
                                <div className={css.detail__logo}>
                                    <img src={`http://ec2-54-205-99-166.compute-1.amazonaws.com${x.company.image}`} alt="detail__logo" className={css.icon} />
                                    <div className={css.logo__between}>
                                        <p className={css.logo__name}>{x.company.name}</p>
                                        <p className={css.logo__descr}>{x.company.occupation}</p>
                                    </div>
                                </div>
                                <p className={css.logo__descr__mobile}>{x.company.occupation}</p>
                                <p className={css.detail__title}>{dayjs(x.start_date).locale('ru').format('DD MMM YYYY')} - {dayjs(x.end_date).format('DD MMM YYYY')} </p>
                                <p className={css.detail__descr}>{x.responsibilities}</p>
                                <ul className={css.stack}>
                                    {x.stacks.map((x: string, i: number) =>
                                        <li key={i}>{x}</li>
                                    )}
                                </ul>
                            </div>
                        )}
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
                            onClick={() => setStep(2)}>{t.detailCard.about}</button>
                        <button
                            className={css.btn}
                            style={{
                                borderBottom: step === 3 ? '3px solid #6a38c2' : 'none'
                            }}
                            onClick={() => setStep(3)}>{t.detailCard.experience}</button>
                    </div>
                    <EditEmployer step={step} item={item} />
                </div>
            </Portal>
        </>

    );
};

export default EmployerDetail;