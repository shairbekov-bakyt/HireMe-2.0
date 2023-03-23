import React, { useState, KeyboardEvent, useEffect } from 'react';
import Accordion from '@/components/Accordion/Accordion';
import css from '../Filter.module.scss'
import Image from 'next/image';
import close from '@/media/icons/plus.svg'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';
import cx from 'classnames'

interface Item {
    title: string
}

const company = [
    {
        value: 'Product',
        id: '0',
        name: 'company'
    },
    {
        value: 'Outsource',
        id: '1',
        name: 'company'
    },
    {
        value: 'Outstaff',
        id: '2',
        name: 'company'
    },
    {
        value: 'Agency',
        id: '3',
        name: 'company'
    },
]

const location = [
    {
        value: 'USA',
        id: '0',
        name: 'location'
    },
    {
        value: 'Russia',
        id: '1',
        name: 'location'
    },
    {
        value: 'Kyrgyzstan',
        id: '2',
        name: 'location'
    },
    {
        value: 'Kazahstan',
        id: '3',
        name: 'location'
    },
    {
        value: 'Uzbekistan',
        id: '4',
        name: 'location'
    },
    {
        value: 'Ukraina',
        id: '5',
        name: 'location'
    },
]


const Filter = ({ isOpen }: any) => {
    const [searchBy, setSearchBy] = useState<Item[]>([])
    const [valueAdd, setValueAdd] = useState('')
    const { register, reset } = useForm();
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;

    const deleteItem = (title: string) => {
        setSearchBy(searchBy.filter(obj => obj.title != title));
    }

    const adeItem = (e: any, item: string) => {
        e.preventDefault()
        if (searchBy.length > 0) {
            if (searchBy.some(i => i.title === item)) {
            } else {
                setSearchBy((prev) => [...prev, { title: item }])
                setValueAdd("")
            }
        } else {
            setSearchBy((prev) => [...prev, { title: item }])
            setValueAdd("")
        }
    }

    const handleKeypressAdd = (e: any, item: string) => {
        if (e.keyCode === 13) {
            adeItem(e, item)
        }
    };

    const handleReset = (e: any) => {
        e.preventDefault()
        reset();
        setSearchBy([])
    }; const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(isDarkModeEnabled);
    }, [isDarkMode]);

    return (
        <div className={cx(css.wrapper, isDarkMode ? css.dark : css.light)}
            style={{
                left: isOpen ? "-100%" : "0"
            }}>
            <form className={css.search} onSubmit={(e) => adeItem(e, valueAdd)}>
                <div className={css.search__filter}>
                    <p className={css.title__filter}>{t.filter.title}</p>
                    <button className={css.btn__filer} onClick={(e) => handleReset(e)}>{t.filter.clear}</button>
                </div>
                <div className={css.search__input}>
                    <input type="text" placeholder={t.filter.egg}
                        onChange={(e) => setValueAdd(e.target.value)} value={valueAdd}
                        onKeyDown={(e) => { handleKeypressAdd(e, valueAdd) }}
                    />
                    <button disabled={!(valueAdd.length > 0)} type="submit">{t.filter.search}</button>
                </div>
                <div className={css.search__date}>
                    {searchBy.map((x: Item, i: number) =>
                        <span key={i}>
                            <Image
                                src={close}
                                alt="close"
                                className={css.close}
                                onClick={() => deleteItem(x.title)}
                            />
                            {x.title}</span>
                    )}
                </div>
                <Accordion title={t.filter.location} item={location} register={register} />
                <Accordion title={t.filter.type} item={company} register={register} />
            </form>
        </div >
    );
};

export default Filter;
