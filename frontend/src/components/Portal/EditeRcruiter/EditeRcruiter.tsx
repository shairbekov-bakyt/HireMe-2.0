import Image from 'next/image';
import React, { useState } from 'react';
import css from './EditeRcruiter.module.scss'
import close from '@/media/icons/plus.svg'

const EditeRcruiter = ({ step, item }: any) => {
    const [aboutStep, setAboutStep] = useState(1)
    const [companyStep, setCompanyStep] = useState(1)
    return (
        <>
            {step === 1 &&
                <>
                    <div className={css.table__btns}>
                        <button
                            className={css.btn}
                            onClick={() => setAboutStep(1)}
                            style={{
                                borderBottom: aboutStep === 1 ? '3px solid #6a38c2' : 'none'
                            }}>
                            Данные</button>
                        <button
                            className={css.btn}
                            style={{
                                borderBottom: aboutStep === 2 ? '3px solid #6a38c2' : 'none'
                            }}
                            onClick={() => setAboutStep(2)}>О себе</button>
                        <button
                            className={css.btn}
                            style={{
                                borderBottom: aboutStep === 3 ? '3px solid #6a38c2' : 'none'
                            }}
                            onClick={() => setAboutStep(3)}>Опыт работы</button>
                    </div>

                    {aboutStep === 1 &&
                        <form className={css.form}>
                            <input className={css.input} type="text" placeholder={item.recruiter.name} />
                            <input className={css.input} type="text" placeholder={item.recruiter.post} />
                            <input className={css.input} type="text" placeholder={item.recruiter.number} />
                            <input className={css.input} type="text" placeholder={item.recruiter.experience} />
                            {item.recruiter.links.map((x: any, i: any) => (
                                <div key={i} className={css.employees__block}>
                                    {x.icon}
                                    <input className={css.input} type="text" placeholder={x.link} />
                                </div>
                            ))}
                            <button className={css.btn}>Save</button>
                        </form>
                    }

                    {aboutStep === 2 &&
                        <form className={css.form}>
                            <textarea className={css.textarea} placeholder={item.recruiter.about}></textarea>
                            <textarea className={css.textarea} placeholder={item.recruiter.progress}></textarea>
                            <button className={css.btn}>Save</button>
                        </form>
                    }

                    {aboutStep === 3 &&
                        <form className={css.form}>
                            {item.recruiter.work_experience.map((x: any, i: any) =>
                                <div key={i} className={css.work_experience}>
                                    <div className={css.detail__logo}>
                                        <img src={x.logo} alt="detail__logo" className={css.icon} />
                                        <input className={css.input} type="text" placeholder={x.title} />
                                    </div>
                                    <input className={css.input} placeholder={x.date_work} />
                                    <textarea className={css.textarea} placeholder={x.descr}></textarea>
                                </div>
                            )}
                            <button className={css.btn}>Добавить компанию</button>
                            <button className={css.btn}>Save</button>
                        </form>
                    }
                </>
            }
            {
                step === 2 &&
                <>
                    <div className={css.table__btns}>
                        <button
                            className={css.btn}
                            onClick={() => setCompanyStep(1)}
                            style={{
                                borderBottom: companyStep === 1 ? '3px solid #6a38c2' : 'none'
                            }}>
                            Данные</button>
                        <button
                            className={css.btn}
                            style={{
                                borderBottom: companyStep === 2 ? '3px solid #6a38c2' : 'none'
                            }}
                            onClick={() => setCompanyStep(2)}>Описание</button>

                    </div>
                    {companyStep === 1 &&
                        <form className={css.form}>
                            <div key={1} className={css.work_experience}>
                                <div className={css.detail__logo}>
                                    <img src={item.company.logo} alt="detail__logo" className={css.icon} />
                                    <input className={css.input} type="text" placeholder={item.company.title} />
                                </div>
                                <input className={css.input} placeholder={item.company.sphere} />
                            </div>
                            <input className={css.input} placeholder={item.company.location} />
                            <input className={css.input} placeholder={item.company.employer} />
                            {item.company.links.map((x: any, i: any) => (
                                <div key={i} className={css.employees__block}>
                                    {x.icon}
                                    <input className={css.input} type="text" placeholder={x.link} />
                                </div>
                            ))}

                            <button className={css.btn}>Save</button>
                        </form>
                    }
                    {companyStep === 2 &&
                        <form className={css.form}>
                            <textarea className={css.textarea} placeholder={item.company.descr}></textarea>
                            <div className={css.block__stack}>
                                <div className={css.search__date}>
                                    {item.company.our_values.map((x: any, i: number) =>
                                        <span key={i}>
                                            <Image
                                                src={close}
                                                alt="close"
                                                className={css.close}
                                            // onClick={() => deleteItem(x.title)}
                                            />
                                            {x.title}</span>
                                    )}
                                </div>
                                <input type="text" placeholder='Benefit' className={css.input__stack} />
                            </div>
                            <button className={css.btn}>Save</button>
                        </form>
                    }


                </>

            }
        </>
    );
};

export default EditeRcruiter;