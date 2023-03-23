import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import css from './EditEmployer.module.scss'
import close from '@/media/icons/plus.svg'
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';
import FromGenerouse from './FomrGenerous/FromGenerouse';
import FormAmbition from './FormAmbition/FormAmbition';
import FormExperience from './FormExperience/FormExperience';


const EditEmployer = ({ step, item }: any) => {
    console.log(item)
    return (
        <>
            {
                step === 1 &&
                <FromGenerouse item={item} />
            }
            {
                step === 2 &&
                <FormAmbition item={item} />
            }
            {
                step === 3 &&
                <FormExperience item={item} />
            }
        </>
    );
};

export default EditEmployer;