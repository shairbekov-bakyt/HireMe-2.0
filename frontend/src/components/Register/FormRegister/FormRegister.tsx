import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import StepSignBtn from '../StepRegister/StepSignBtn/StepSignBtn';
import css from './FormRegister.module.scss'
import eye_close from '@/media/icons/eye_close.svg'
import eye from '@/media/icons/eye.svg'
import { useForm } from "react-hook-form";
import cx from 'classnames'
import axios from 'axios';
import Cookies from 'js-cookie';
import { ILoginData, SignInData } from '@/interface';
import { useRouter } from 'next/router';
import { URL } from '@/api/key';
import en from '@/locales/en';
import ru from '@/locales/ru';

interface Props {
    mode: boolean
    step: number
    setMode: () => void
    setCandidate: () => void
    setStep: (value: number) => void
}

interface IFormInput {
    email: string;
    password: string;
}

const signUserUpUrl = `${URL}users/sign_up/`;
const verifyUserUrl = ` ${URL}users/verify/ `;
const signUserInUrl = `${URL}users/sign_in/`;

const signSalesUpUrl = `${URL}/sales-managers/sign-up/`;
const verifySalesUrl = ` ${URL}/sales-managers/verify/ `;
const signInSalesUrl = `${URL}/sales-managers/sign-in/`;

const FormRegister = ({ step, setStep }: any) => {
    const [isMode, setIsMode] = useState<boolean>(true)
    const [numberVerify, setNumberVerify] = useState('')
    const [error, setError] = useState('');
    const [radio, setRadio] = useState(true)
    const [modeRadio, setModeRadio] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const router = useRouter()
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    function saveTokenToCookie(token: string, expires: number) {
        Cookies.set('hireMe', token, { expires });
    }

    const onSubmit = async (data: IFormInput) => {
        if (radio === true) {
            try {
                await axios.post(signUserUpUrl, data)
                setStep(step + 1)
                setModeRadio(false)
            } catch (e) {
                if (e.response.status === 500) {
                    setError(t.form.errorEmail);
                }
            }
        } else {
            try {
                await axios.post(signSalesUpUrl, data)
                setStep(step + 1)
                setModeRadio(false)
            } catch (e) {
                if (e.response.status === 500) {
                    setError(t.form.errorEmail);
                }
            }
        }
        setStep(step + 1)
    }

    const onVerify = async (data: IFormInput) => {
        const verifyData = {
            email: data.email,
            temporary_password: numberVerify
        }
        const loginDate: ILoginData = {
            email: data.email,
            password: data.password,
        }
        if (radio === true) {
            try {
                await axios.post(verifyUserUrl, verifyData)
                const { token } = await axios.post<ILoginData, any>(signUserInUrl, loginDate)
                saveTokenToCookie(token, 7);
                router.push('/profile/employer')
            } catch (error) {
                if (error.response.status === 400) {
                    setError(t.form.errorverify);
                }
            }
        } else {
            try {
                await axios.post(verifySalesUrl, verifyData)
                const { token } = await axios.post<ILoginData, any>(signInSalesUrl, loginDate)
                saveTokenToCookie(token, 7);
                router.push('/profile/recruiter')
            } catch (error) {
                if (error.response.status === 400) {
                    setError(t.form.errorverify);
                }
            }
        }
    }

    return (
        <>
            <form className={css.form} >
                <div
                    style={{ display: step === 1 ? "block" : 'none' }}
                    className={css.blockEmail}>

                    {errors?.email?.type === "pattern" ?
                        <p style={{ color: 'red' }} className={css.title}>{t.form.emailValid} </p>
                        :
                        <p className={css.title}>{t.form.email}</p>
                    }
                    <input type="text" placeholder={t.form.email}
                        className={cx(css.inputEmail, errors?.email?.type === "required" && css.errorInput)}
                        {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i
                        })}
                    />

                    {errors?.password?.type === "minLength" ?
                        <p style={{ color: 'red' }} className={css.title}>{t.form.passwordValid}</p>
                        :
                        <p className={css.title}>{t.form.password}</p>
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
                </div>
                <div
                    style={{ display: step === 2 ? "block" : 'none' }}
                    className={css.blockEmail}>
                    <p className={css.title}>{t.form.confirmEmail}</p>
                    <input type="number" className={css.inputNumber}
                        value={numberVerify}
                        onChange={(e) => setNumberVerify(e.target.value)}
                    />
                </div>
                <p className={css.error__message}>{error}</p>
                {modeRadio &&
                    <div className={css.radio}>
                        <input onChange={(e) => console.log(e)} value="yes" type="radio" className={css.customCheckbox} name="mode" id="emploeyr" checked={radio} />
                        <label onClick={() => setRadio(true)} htmlFor="emploeyr"> {t.form.employer} </label>
                        <input onChange={(e) => console.log(e)} type="radio" className={css.customCheckbox} name="mode" id="Recruter" />
                        <label onClick={() => setRadio(false)} htmlFor="Recruter"> {t.form.recruter} </label>
                    </div>
                }
            </form>
            <StepSignBtn
                step={step}
                submit={handleSubmit(onSubmit)}
                register={handleSubmit(onVerify)}
                setStep={setStep}
                setError={() => setError('')}
                onRadioMode={() => setModeRadio(true)}
            />
        </>
    );
};

export default FormRegister;