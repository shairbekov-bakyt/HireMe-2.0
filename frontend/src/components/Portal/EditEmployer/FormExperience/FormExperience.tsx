import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import css from '../EditEmployer.module.scss'


import close from '@/media/icons/plus.svg'
import closeWhite from '@/media/icons/plus-white.svg'
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';
import { Controller, useForm } from 'react-hook-form';
import { FormInputAmbition, FormInputExperience } from '@/interface';
import { useUserGetId } from '@/api/user/employer/getUserId';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useTheme } from 'next-themes';
import dayjs from 'dayjs';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { URL } from '@/api/key';

interface Props {
    item: any
}

interface Stack {
    id: number;
    name: string
}

const FormExperience = ({ item }: Props) => {
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputExperience>();
    const { theme, setTheme } = useTheme()
    const { getUserById } = useUserGetId();
    const [btnGenerouse, setBtnGenerouse] = useState(false)
    const [filterText, setFilterText] = useState('');
    // const watchValue = [
    //     // watch('company') === item.company.name &&
    //     // watch('start_date') === item.company.start_date &&
    //     // watch('end_date') === item.company.end_date &&
    //     // watch('responsibilities') === item.company.responsibilities
    // ]

    // useEffect(() => {
    //     setBtnGenerouse(
    //         watch('company') === item.company.name &&
    //         watch('start_date') === item.company.start_date &&
    //         watch('end_date') === item.company.end_date &&
    //         watch('responsibilities') === item.company.responsibilities
    //     )
    // }, [watch('company'),
    // watch('start_date'),
    // watch('end_date'),
    // watch('responsibilities'),
    // ])


    const [stacks, setStacks] = useState<Stack[]>([])
    const [filter, setFilter] = useState<Stack[]>([])
    const [valueStack, setValueStack] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://ec2-54-205-99-166.compute-1.amazonaws.com/api/v1/stacks/');
            setStacks(response.data);
        };
        fetchData();
    }, [])


    const [start_date, setStart_date] = useState();
    const [end_date, setEnd_date] = useState();

    const handleCitySearchInput = (cityName: string) => {
        const find = arrStack.find((it: any) => it.toLowerCase().includes(cityName.toLowerCase()))
        if (find) {
            setFilter([])
        } else {
            setFilter(stacks.filter(name => name.name.toLowerCase().includes(cityName.toLowerCase())))
        }
    };
    const [arrStack, setArrStack] = useState<any>(item.worked_companies[0].stacks)
    const [idStack, setIdStack] = useState<any>([])

    const addItem = (x: any) => {
        const find = arrStack.find((it: any) => it === x.name)
        console.log(find);
        if (!find) {
            setArrStack((prev: any) => [...prev, x.name])
            setIdStack((prev: any) => [...prev, x.id])
        }
        setValueStack("")
    }
    const heandleDeleteStack = (x: any) => {
        setArrStack((prev: any) => prev.filter((it: any) => it !== x))
    }

    const onSubmit = async (data: any) => {
        const token = Cookies.get('token')
        const companyData = [{
            company: data.company,
            responsibilities: data.responsibilities,
            start_date: dayjs(start_date).locale('ru').format('YYYY-MM-DD'),
            end_date: dayjs(end_date).locale('ru').format('YYYY-MM-DD'),
            stacks: idStack
        }]
        // alert(JSON.stringify(companyData))
        try {
            await axios.put(`${URL}users/experience/`, companyData, {
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
            {item.worked_companies.map((x: any, i: any) =>
                <div key={i} className={css.work_experience}>
                    <div className={css.blockInput}>
                        <p>Название компании:</p>
                        <input className={css.input}  {...register("company")} type="text" defaultValue={x.company.name} placeholder={x.company.name} />
                    </div>
                    <div className={css.block__data}>
                        <div className={css.blockData}>
                            <p>Начало: </p>
                            <DatePicker className={css.datePicker} selected={start_date} onChange={(date: any) => setStart_date(date)} />
                        </div>
                        <p>-</p>
                        <div className={css.blockData}>
                            <p>Конец: </p>
                            <DatePicker className={css.datePicker} selected={end_date} onChange={(date: any) => setEnd_date(date)} />
                        </div>
                    </div>
                    <div className={css.blockTextarea}>
                        <p>Обязаности:</p>
                        <textarea className={css.textarea}
                            {...register("responsibilities")}
                            defaultValue={x.responsibilities}
                            placeholder={x.responsibilities}></textarea>
                    </div>
                    <div className={css.blockTextarea}>
                        <p>{t.edit.stacks}</p>
                        <div className={css.block__stack}>
                            <div className={css.search__date}>
                                {arrStack?.map((a: any, o: number) =>
                                    <span key={o}>
                                        {theme === 'dark' ?
                                            <Image
                                                onClick={() => heandleDeleteStack(a)}
                                                src={closeWhite}
                                                alt="close"
                                                className={css.close}
                                            />
                                            :
                                            <Image
                                                onClick={() => heandleDeleteStack(a)}
                                                src={close}
                                                alt="close"
                                                className={css.close}
                                            />
                                        }
                                        {a}</span>
                                )}
                            </div>
                            <input type="text" value={valueStack} onChange={e => { handleCitySearchInput(e.target.value), setValueStack(e.target.value) }} placeholder='Stack' className={css.input__stack} />
                        </div>
                        <div className={css.stack__date}>
                            {valueStack.length > 0 &&
                                filter.map((x) => (
                                    <p className={css.stacks} onClick={(e) => addItem(x)} key={x.id} >{x.name}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )}
            <button className={css.btn}>Добавить компанию</button>
            <button onClick={() => handleSubmit(onSubmit)}
                style={{
                    background: btnGenerouse ? "#19f600" : ''
                }}

                className={css.btn}>{t.edit.save}</button>
        </form >
    );
};

export default FormExperience;