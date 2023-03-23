import en from '@/locales/en';
import ru from '@/locales/ru';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import css from './StepSignBtn.module.scss'

interface Props {
    step: number
    setStep: (value: number) => void
    submit: any
    register: any
    setError: () => void,
    onRadioMode: any
}

const StepSignBtn = ({ register, submit, step, setStep, setError, onRadioMode }: Props) => {
    const router = useRouter()
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    
    return (
        <div className={css.buttonsStep}>
            <button className={css.login}
                style={{ display: step === 1 ? "flex" : 'none' }}
                onClick={() => router.push('/auth/sign-in')}>{t.form.login}</button>
            <button className={css.login}
                style={{ display: step >= 2 ? "flex" : 'none' }}
                onClick={() => { setStep(step - 1), setError(), onRadioMode() }}>{t.form.prev}</button>
            <button className={css.next}
                style={{ display: step === 2 ? "none" : 'flex' }}
                onClick={() => { submit(), setError() }}> {t.form.next}</button>
            <button className={css.next}
                style={{ display: step === 2 ? "flex" : 'none' }}
                onClick={() => register()}> {t.form.register}</button>
        </div >
    );
};

export default StepSignBtn;