import axios from 'axios';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import css from '../EditEmployer.module.scss'

import { FormInputGenerous } from '@/interface';
import en from '@/locales/en';
import ru from '@/locales/ru';
import { useForm } from 'react-hook-form';
import telegram from '@/media/icons/telegram.svg'
import github from '@/media/icons/github.svg'
import linkedin from '@/media/icons/in.svg'
import { useUserGetId } from '@/api/user/employer/getUserId';
import { URL } from '@/api/key';

interface Props {
    item: any
}
const FromGenerouse = ({ item }: Props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputGenerous>({
        defaultValues: {
            first_name: item.first_name,
            last_name: item.last_name,
            phone_number: item.phone_number,
            salary_expectation: item.salary_expectation,
            linkedIn: item.linkedIn,
            telegram: item.telegram,
            github: item.github,
            position: item.position,
            experience_year: item.experience_year
        }
    });
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;

    const { getUserById } = useUserGetId();
    const [btnGenerouse, setBtnGenerouse] = useState(false)

    const watchValue = [
        watch('first_name') === item.first_name &&
        watch('last_name') === item.last_name &&
        watch('phone_number') === item.phone_number &&
        watch('salary_expectation') === item.salary_expectation &&
        watch('linkedIn') === item.linkedIn &&
        watch('telegram') === item.telegram &&
        watch('github') === item.github &&
        watch('position') === item.position &&
        watch('experience_year') === item.experience_year
    ]

    useEffect(() => {
        setBtnGenerouse(watch('first_name') === item.first_name &&
            watch('last_name') === item.last_name &&
            watch('phone_number') === item.phone_number &&
            watch('salary_expectation') === item.salary_expectation &&
            watch('linkedIn') === item.linkedIn &&
            watch('telegram') === item.telegram &&
            watch('github') === item.github &&
            watch('position') === item.position &&
            watch('experience_year') === item.experience_year
        )
    }, [watch('first_name'),
    watch('last_name'),
    watch('phone_number'),
    watch('salary_expectation'),
    watch('linkedIn'),
    watch('telegram'),
    watch('github'),
    watch('position'),
    watch('experience_year')
    ])

    const onSubmit = async (data: any) => {
        const token = Cookies.get('token')
        try {
            await axios.put(`${URL}users/general/`, data, {
                headers: { Authorization: `Token ${token}` },
            });
            getUserById();
            setBtnGenerouse(true)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={css.blockInput}>
                <p>{t.edit.first_name}:</p>
                <input className={css.input} type="text" placeholder={t.edit.first_name}
                    {...register("first_name")} />
            </div>
            <div className={css.blockInput}>
                <p>{t.edit.last_name}:</p>
                <input className={css.input} type="text" placeholder={t.edit.last_name}
                    {...register("last_name")} />
            </div>
            <div className={css.blockInput}>
                <p>{t.edit.position}:</p>
                <input className={css.input} type="text" placeholder={t.edit.position}
                    {...register("position")} />
            </div>
            <div className={css.blockInput}>
                <p>{t.edit.phone_number}:</p>
                <input className={css.input} type="number" placeholder={t.edit.phone_number}
                    {...register("phone_number", {
                        pattern: /^[0-9+]*$/,
                    })}
                />
            </div>
            <div className={css.blockInput}>
                <p>{t.edit.experience_year}:</p>
                <input className={css.input} type="number" placeholder={t.edit.experience_year}
                    {...register("experience_year")}
                />
            </div>
            <div className={css.blockInput}>
                <p>{t.edit.salary_expectation}:</p>
                <input className={css.input} type="number" placeholder={t.edit.salary_expectation}
                    {...register("salary_expectation")} />
            </div>
            <div className={css.employees__block}>
                <Image
                    src={telegram}
                    alt="telegram"
                />
                <input className={css.input} type="text" placeholder={t.edit.telegram}
                    {...register("telegram")} />

            </div>
            <div className={css.employees__block}>
                <Image
                    src={github}
                    alt="github"
                />
                <input className={css.input} type="text" placeholder={t.edit.gitHub}
                    {...register("github")} />
            </div>
            <div className={css.employees__block}>
                <Image
                    src={linkedin}
                    alt="linkedin"
                />
                <input className={css.input} type="text" placeholder={t.edit.linkedin}
                    {...register("linkedIn")} />
            </div>
            <button onClick={() => handleSubmit(onSubmit)}
                style={{
                    background: btnGenerouse ? watchValue[0] === false ? "#19f600" : '' : ""
                }}
                disabled={watchValue[0]}
                className={css.btn}>{t.edit.save}</button>
        </form>
    );
};

export default FromGenerouse;