import React, { useState } from 'react';
import FormLogin from './FormLogin/FormLogin';
import OtherLinkLogin from '../OtherLinkLogin/OtherLinkLogin';
import css from './login.module.scss'
import Link from 'next/link';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken'
import { URL } from '@/api/key';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';


const Login = () => {

    return (
        <div className={css.login}>
            <Link href={'/'} className={css.logo}>HireMe.</Link>
            <div className={css.formBlock}>
                <FormLogin />
                <OtherLinkLogin />
            </div>
        </div>
    );
};

export default Login;