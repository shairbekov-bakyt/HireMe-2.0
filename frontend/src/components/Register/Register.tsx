import React, { useState } from 'react';
import css from './register.module.scss'
import OtherLinkLogin from '@/components/OtherLinkLogin/OtherLinkLogin';
import StepSign from './StepRegister/StepSign/StepSign';
import Link from 'next/link';
import FormRegister from './FormRegister/FormRegister';

const Register = () => {
    const [step, setStep] = useState(1)

    return (
        <div className={css.login}>
            <Link href={'/'} className={css.logo}>HireMe.</Link>
            <div className={css.formBlock}>
                <StepSign step={step} />
                <FormRegister step={step}
                    setStep={setStep} />
                <OtherLinkLogin />
            </div>
        </div>
    );
};

export default Register;