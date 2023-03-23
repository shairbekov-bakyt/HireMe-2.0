import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import cx from 'classnames'
import { useRouter } from 'next/router';
import Link from 'next/link';

import css from './FormLogin.module.scss'

import eye_close from '@/media/icons/eye_close.svg'
import eye from '@/media/icons/eye.svg'
import { URL } from '@/api/key';
import { useAuthStore } from '@/api/auth/auth';
import en from '@/locales/en';
import ru from '@/locales/ru';

interface IFormInput {
    email: string;
    password: string;
}

interface TokenData {
    userId: string;
    userEmail: string;
}


const FormLogin = () => {
    const [isMode, setIsMode] = useState<boolean>(true)
    const [mode, setMode] = useState(true)
    const [radio, setRadio] = useState(true)
    const [modeRadio, setModeRadio] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    const router = useRouter()
    const { login, error } = useAuthStore();


    const onSubmit = async (data: IFormInput) => {
        const response: any = await login(data.email, data.password)
        console.log(response)
        if (response?.status === 201) router.push("/profile/employer");
    }


    return (
        <>
            <form className={css.form} >
                {errors?.email?.type === "pattern" ?
                    <p style={{ color: 'red' }} className={css.subTitle}>{t.form.emailValid}</p>
                    :
                    <p className={css.subTitle}>{t.form.email}</p>
                }
                <input type="text" placeholder={t.form.email}
                    className={cx(css.inputEmail, errors?.email?.type === "required" && css.errorInput)}
                    {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i
                    })}
                />

                {errors?.password?.type === "minLength" ?
                    <p style={{ color: 'red' }} className={css.subTitle}>{t.form.passwordValid}</p>
                    :
                    <p className={css.subTitle}>{t.form.password}</p>
                }
                <div className={css.inputPassword}>
                    <input
                        className={cx(errors?.password?.type === "required" && css.errorInput)}
                        type={isMode ? "password" : "text"} placeholder={t.form.password}
                        {...register("password", {
                            minLength: 6,
                            required: true,
                        })}
                    />
                    {isMode ?
                        <Image
                            onClick={() => setIsMode(false)}
                            className={css.eye_close}
                            src={eye_close}
                            alt="eye_close"
                        /> :
                        <Image
                            onClick={() => setIsMode(true)}
                            className={css.eye_close}
                            src={eye}
                            alt="eye"
                        />
                    }
                </div>

                {error && <p className={css.error__message}>{error}</p>}
                <div className={css.btnsSubmit}>
                    <button className={css.loginBtn}
                        onClick={(e) => handleSubmit(onSubmit)(e)}
                    >{t.form.login}</button>
                    <Link href={'/auth/sign-up'} className={css.registerBtn}>{t.form.register}</Link>
                </div>
                <div className={css.checkboxAndForgot}>
                    <div className={css.radio}>
                        <input onChange={(e) => console.log(e)} value="yes" type="radio" className={css.customCheckbox} name="mode" id="emploeyr" checked={mode} />
                        <label onClick={() => setMode(true)} htmlFor="emploeyr"> {t.form.employer} </label>
                        <input onChange={(e) => console.log(e)} type="radio" className={css.customCheckbox} name="mode" id="Recruter" />
                        <label onClick={() => setMode(false)} htmlFor="Recruter"> {t.form.recruter} </label>
                    </div>
                    <p>{t.form.forgot}</p>
                </div>
            </form>
        </>
    );
};

export default FormLogin;