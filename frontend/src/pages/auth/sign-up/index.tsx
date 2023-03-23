import React, { useEffect, useState } from 'react';

import css from '../auth.module.scss'

import Animation from '@/components/Animation/Animation';
import Register from '@/components/Register/Register';

const Auth = () => {

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <Animation />
                <Register />
            </div >
        </div >
    );
};

export default Auth;