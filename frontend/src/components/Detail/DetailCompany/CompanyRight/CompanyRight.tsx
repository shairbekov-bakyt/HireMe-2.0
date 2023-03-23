import Image from 'next/image';
import React, { useState } from 'react';
import css from './CompanyRight.module.scss'
import bold__user from '@/media/icons/bold/bold__user.svg'
import bold__location from '@/media/icons/bold/bold__location.svg'
import bold__like from '@/media/icons/bold/bold__like.svg'
import bold__dislike from '@/media/icons/bold/bold__dislike.svg'
import cx from 'classnames'
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';
import { ComapnyId } from '@/interface';

const reviewArr = [
    {
        mode: true,
        value: 'Мне понравилась компания, все четко)'
    },
    {
        mode: false,
        value: 'Компания ужасная проводил собес мужчина молодой, без опыта так холодно общался.'
    },
    {
        mode: false,
        value: 'Дала ТЗ на 2 дня и через 1 день не уведомив меня просто написала вы не подходите'
    }
]
interface Props {
    company: ComapnyId
}
const CompanyRight = ({ company }: Props) => {
    const [value, setValue] = useState('')
    const [reviews, setReviews] = useState(reviewArr)
    const [like, setLike] = useState(true)
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;

    const addCommit = (e: any) => {
        e.preventDefault()
        const data = {
            mode: like,
            value: value
        }
        setReviews([...reviews, data])
        setValue("")
        setLike(true)
    }

    return (
        <div className={css.company__card}>
            <div>
                <>
                    <p className={css.company__title}>{t.detailCard.overview}</p>
                    <div className={css.company__employees}>
                        <div className={css.employees__block}>
                            <Image src={bold__user} alt="bold__user" className={css.employees__icon} />
                            <p className={css.employees__title}>{company.employer} {t.detailCard.employees}</p>
                        </div>
                        <div className={css.employees__block}>
                            <Image src={bold__location} alt="bold__location" className={css.employees__icon} />
                            <p className={css.employees__title}>{company.location}</p>
                        </div>
                    </div>
                </>
                <>
                    <p className={css.company__title__benefit}>{t.detailCard.review}</p>
                    <div className={cx(css.company__employees, css.column)}>
                        {reviews.map((item, index) =>
                            <div className={css.employees__block} key={index}>
                                <Image
                                    src={item.mode ? bold__like : bold__dislike} alt="like"
                                    className={css.employees__icon} />
                                <p className={css.employees__title}>{item.value}</p>
                            </div>
                        )}
                    </div>
                </>
            </div>

            <form onSubmit={addCommit}>
                <textarea placeholder={t.detailCard.eg}
                    className={css.textarea}
                    value={value} onChange={(e) => setValue(e.target.value)}
                />
                <div className={css.submit__block}>
                    <button type='submit' disabled={!value}>{t.detailCard.send}</button>
                    <div className={css.like}>
                        <Image
                            src={bold__like} alt="like"
                            style={{
                                transform: like === true ? 'scale(0.9)' : '',
                            }}
                            onClick={() => setLike(true)}
                            className={css.form__icon} />
                        <p>or</p>
                        <Image
                            src={bold__dislike} alt="like"
                            style={{
                                transform: like === false ? 'scale(0.9)' : '',
                            }}
                            onClick={() => setLike(false)}
                            className={css.form__icon} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CompanyRight;