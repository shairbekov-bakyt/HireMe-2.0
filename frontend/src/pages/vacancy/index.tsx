import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import css from '@/styles/pages/index.module.scss'

import CardVacancy from '@/components/Card/Vacancy/CardVacancy';
import arrow_search from '@/media/icons/filter.svg'
import box from '@/media/icons/box.svg'
import Filter from '@/components/Filter/FilterVacancy/FilterVacancy';
import { useStoreVacancy } from '@/api/vacansys';
import { Loader } from '@/components/Loader/Loader';

const step = [
    {
        id: 0,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 1,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 2,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 3,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 4,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 5,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 6,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 7,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 8,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 9,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 10,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
    {
        id: 11,
        company: {
            img: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
            name: 'Figma',
            location: 'USA'
        },
        title: "Senior Product Designer",
        descr: "Your job would be to work alangsige UK reserchers, product managers, and fellow product designers, and fellow product designers, and fellow product designers,",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '12 000 ',
            year: '2'
        }
    },
]

const Vacansy = () => {
    const [isOpen, setIsOpen] = useState(true)
    const { data, isLoading, isError, fetchData } = useStoreVacancy();
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
                        <CardVacancy item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Vacansy;
