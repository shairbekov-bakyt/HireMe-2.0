import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import css from '../EditEmployer.module.scss'

import close from '@/media/icons/plus.svg'
import closeWhite from '@/media/icons/plus-white.svg'

import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';
import { useForm } from 'react-hook-form';
import { FormInputAmbition } from '@/interface';
import { useUserGetId } from '@/api/user/employer/getUserId';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useTheme } from 'next-themes';


interface Props {
    item: any
}


const FormAmbition = ({ item }: Props) => {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputAmbition>({
        defaultValues: {
            about_myself: item.user_ambition.about_myself,
            achievement: item.user_ambition.achievement,
            expectation: item.user_ambition.expectation
        }
    });
    const { theme, setTheme } = useTheme()
    const { getUserById } = useUserGetId();
    const [btnGenerouse, setBtnGenerouse] = useState(false)

    const watchValue = [
        watch('about_myself') === item.first_name &&
        watch('achievement') === item.last_name &&
        watch('expectation') === item.phone_number
    ]

    useEffect(() => {
        setBtnGenerouse(
            watch('about_myself') === item.last_name &&
            watch('achievement') === item.phone_number &&
            watch('expectation') === item.salary_expectation
        )
    }, [watch('about_myself'),
    watch('achievement'),
    watch('expectation'),
    ])

    const onSubmit = async (data: any) => {
        const token = Cookies.get('token')
        try {
            await axios.put(`${URL}users/ambition/`, data, {
                headers: { Authorization: `Token ${token}` },
            });
            getUserById();
            setBtnGenerouse(true)
        } catch (error) {
            console.error(error);
        }
    };
    console.log(theme)

    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>

            <div className={css.blockTextarea}>
                <p>{t.edit.stacks}</p>
                <div className={css.block__stack}>
                    <div className={css.search__date}>
                        {item.stacks.map((x: any, i: number) =>
                            <span key={i}>
                                {theme === 'dark' ?
                                    <Image
                                        src={closeWhite}
                                        alt="close"
                                        className={css.close}
                                    />
                                    :
                                    <Image
                                        src={close}
                                        alt="close"
                                        className={css.close}
                                    />
                                }
                                {x}
                            </span>
                        )}
                    </div>
                    <input type="text" placeholder={t.edit.stacks} className={css.input__stack} />
                </div>
            </div>

            <div className={css.blockTextarea}>
                <p>{t.edit.about_myself}</p>
                <textarea className={css.textarea}
                    {...register("about_myself")}
                    placeholder={t.edit.about_myself}></textarea>
            </div>
            <div className={css.blockTextarea}>
                <p>{t.edit.achievements}</p>
                <textarea className={css.textarea}
                    {...register("achievement")}
                    placeholder={t.edit.achievements}></textarea>
            </div>
            <div className={css.blockTextarea}>
                <p>{t.edit.expectations}</p>
                <textarea className={css.textarea}
                    {...register("expectation")}
                    placeholder={t.edit.expectations}></textarea>
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

export default FormAmbition;