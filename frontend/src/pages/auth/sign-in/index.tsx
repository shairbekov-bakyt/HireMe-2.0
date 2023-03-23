import React, { useEffect, useState } from 'react';

import css from '../auth.module.scss'

import Animation from '@/components/Animation/Animation';
import Login from '@/components/Login/Login';

const Auth = () => {

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <Animation />
                <Login />
            </div>
        </div>
    );
};

export default Auth;