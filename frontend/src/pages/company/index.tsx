import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import css from '@/styles/pages/index.module.scss'

import arrow_search from '@/media/icons/filter.svg'
import CardCompany from '@/components/Card/Company/CardCompany';
import Filter from '@/components/Filter/FilterCompany/FilterCompany';
import { useStoreCompany } from '@/api/company';
import { Loader } from '@/components/Loader/Loader';
import box from '@/media/icons/box.svg'


const step = [
    {
        id: 0,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        descr: "Программное обеспечение меняет мир. Австралийская компания Atlassian (www.atlassian.com) помогает измениться командам, создающим программное обеспечение. Мы делаем продукты Atlassian доступнее для этих команд и помогаем использовать их более эффективно.",
        others: {
            hr: "Diana Shabonova",
            employer: "100 ",
            vacancy: '20'
        }
    },
    {
        id: 1,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        descr: "Программное обеспечение меняет мир. Австралийская компания Atlassian (www.atlassian.com) помогает измениться командам, создающим программное обеспечение. Мы делаем продукты Atlassian доступнее для этих команд и помогаем использовать их более эффективно.",
        others: {
            hr: "Diana Shabonova",
            employer: "100 ",
            vacancy: '20'
        }
    },
    {
        id: 2,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        descr: "Программное обеспечение меняет мир. Австралийская компания Atlassian (www.atlassian.com) помогает измениться командам, создающим программное обеспечение. Мы делаем продукты Atlassian доступнее для этих команд и помогаем использовать их более эффективно.",
        others: {
            hr: "Diana Shabonova",
            employer: "100 ",
            vacancy: '20'
        }
    },
    {
        id: 3,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        descr: "Программное обеспечение меняет мир. Австралийская компания Atlassian (www.atlassian.com) помогает измениться командам, создающим программное обеспечение. Мы делаем продукты Atlassian доступнее для этих команд и помогаем использовать их более эффективно.",
        others: {
            hr: "Diana Shabonova",
            employer: "100 ",
            vacancy: '20'
        }
    },
]


const Comapny = () => {
    const [isOpen, setIsOpen] = useState(true)

    const { data, isLoading, isError, fetchData } = useStoreCompany();
    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <div className={css.loader}>
            <Loader />
        </div>;
    }

    if (isError) {
        return <div className={css.loader}>
            <Image className={css.box} src={box} alt='alt' />
            {isError}
        </div>;
    }

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <Image src={arrow_search} alt="arrow_search" onClick={() => setIsOpen(!isOpen)}
                    className={css.mobile__search}
                />
                <Filter isOpen={isOpen} />
                <div className={css.cards}>
                    {data.map((item) => (
                        <CardCompany item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Comapny;