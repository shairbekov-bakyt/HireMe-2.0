import { URL_IMG } from '@/api/key';
import { VacansyId } from '@/interface';
import en from '@/locales/en';
import ru from '@/locales/ru';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import css from './LeftVacansy.module.scss'

interface Props {
    apply: boolean,
    item: VacansyId,
    onApply: any
}

const LeftVacansy = ({ apply, onApply, item }: Props) => {
    const [mode, setMode] = useState(1)
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;

    return (
        <div className={css.detail__card}>
            <div className={css.detail__logo}>
                <div className={css.block__logo}>
                    {item.company.image ?
                        <img
                            src={`${URL_IMG}${item.company.image}`}
                            alt="bold__icon"
                            className={css.icon}
                        /> :
                        <p className={css.icon}
                            style={{
                                background: '#ffbb00'
                            }}
                        >
                            {item.company.name.charAt(0).toUpperCase()}
                        </p>
                    }
                    <p className={css.logo__name__mobile}>{item.position}</p>
                </div>
                <div className={css.logo__between}>
                    <div className={css.logo__block}>
                        <p className={css.logo__name}>{item.position}</p>
                        <ul className={css.logo__type}>
                            {item.job_type.map((x, i) =>
                                <li key={i}>{x}</li>
                            )}
                            <li>{item.from_experience} {t.card.exp}</li>
                            <li>{item.from_salary} $</li>
                        </ul>
                    </div>
                    <Link
                        target={'_blank'}
                        href={'https://t.me/israilov02'}
                        style={{
                            background: apply ? "#19f600" : "",
                        }}
                        className={css.apply}
                        onClick={() => onApply()}
                    >
                        {t.detailCard.apply}
                    </Link>
                </div>
            </div>
            <div className={css.table__btns}>
                <button
                    onClick={() => setMode(1)}
                    className={mode === 1 ? css.act : ''}>
                    {t.detailCard.jobDescription}</button>
                <button
                    className={mode === 2 ? css.act : ''}
                    onClick={() => setMode(2)}>{t.detailCard.requirements}</button>
            </div>
            <div
                style={{
                    display: mode === 1 ? 'block' : 'none'
                }}
            >
                <p className={css.descr}>{item.description}</p>
                <div className={css.experiance}>
                    <p className={css.experiance__title}>{t.detailCard.responsibilities}</p>
                    <ul className={css.experiance__descr}>
                        {item.responsibility.split("\n").map((line: string, index: number) => (
                            <li key={index}>
                                {line}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={css.experiance}>
                    <p className={css.experiance__title}>{t.detailCard.give}</p>
                    <ul className={css.experiance__descr}>
                        {item.expectation.split("\n").map((line: string, index: number) => (
                            <li key={index}>
                                {line}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div
                style={{
                    display: mode === 2 ? 'block' : 'none'
                }}
            >
                <div className={css.experiance}>
                    <p className={css.experiance__title}>{t.detailCard.personalQualities}</p>
                    <ul className={css.experiance__descr}>
                        {item.soft_skill.map((x, i) =>
                            <li key={i}>{x}</li>
                        )}
                    </ul>
                </div>
                <div className={css.experiance}>
                    <p className={css.experiance__title}>{t.detailCard.stacks}</p>
                    <ul className={css.experiance__descr}>
                        {item.job_stack.map((x, i) =>
                            <li key={i}> {x}</li>
                        )}
                    </ul>
                </div>
                <div className={css.experiance}>
                    <p className={css.experiance__title}>{t.detailCard.bePlus}</p>
                    <ul className={css.experiance__descr}>
                        {item.will_be_plus.map((x, i) =>
                            <li key={i}>{x}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeftVacansy;