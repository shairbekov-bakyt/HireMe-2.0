import React, { useState, useEffect } from 'react';
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

const salary = [
    {
        value: '$1500',
        id: '0',
        name: 'salary'
    },
    {
        value: '$2500',
        id: '1',
        name: 'salary'
    },
    {
        value: '$4500',
        id: '2',
        name: 'salary'
    },
    {
        value: '$5500',
        id: '3',
        name: 'salary'
    },
    {
        value: '$6500',
        id: '4',
        name: 'salary'
    },
    {
        value: '$7500',
        id: '5',
        name: 'salary'
    }
]

const experience = [
    {
        value: 'No experience',
        id: '0',
        name: 'experience'
    },
    {
        value: '1 year ',
        id: '1',
        name: 'experience'
    },
    {
        value: '2 years',
        id: '2',
        name: 'experience'
    },
    {
        value: ' 3 years',
        id: '3',
        name: 'experience'
    },
    {
        value: '5 years',
        id: '4',
        name: 'experience'
    },

]

const employment = [
    {
        value: 'Remote',
        id: '0',
        name: 'employment'
    },
    {
        value: 'Part-time',
        id: '1',
        name: 'employment'
    },
    {
        value: 'Office',
        id: '2',
        name: 'employment'
    },
]

const english = [
    {
        value: 'No English',
        id: '0',
        name: 'english'
    },
    {
        value: 'Beginner / Elementary',
        id: '1',
        name: 'english'
    },
    {
        value: 'Pre-Intermediate',
        id: '2',
        name: 'english'
    },
    {
        value: 'Intermediate',
        id: '3',
        name: 'english'
    },
    {
        value: 'Upper-Intermediate',
        id: '4',
        name: 'english'
    },
    {
        value: ' Advanced / Fluent',
        id: '5',
        name: 'english'
    },


]

const development = [
    {
        value: 'Rust',
        id: '12',
        name: 'development'
    },
    {
        value: 'Scala',
        id: '11',
        name: 'development'
    },
    {
        value: 'Ruby',
        id: '10',
        name: 'development'
    },
    {
        value: 'Flutter',
        id: '9',
        name: 'development'
    },
    {
        value: 'C / C++ / Embedded',
        id: '8',
        name: 'development'
    },
    {
        value: 'Android',
        id: '7',
        name: 'development'
    },
    {
        value: 'iOS',
        id: '6',
        name: 'development'
    },
    {
        value: 'Node.js',
        id: '5',
        name: 'development'
    },
    {
        value: ' PHP',
        id: '4',
        name: 'development'
    },
    {
        value: 'Python',
        id: '3',
        name: 'development'
    },
    {
        value: 'C# / .NET',
        id: '2',
        name: 'development'
    },
    {
        value: 'Java',
        id: '1',
        name: 'development'
    },
    {
        value: 'JavaScript / Front - End',
        id: '0',
        name: 'development'
    },
]

const tech = [
    {
        value: 'Scrum Master / Agile Coach',
        id: '16',
        name: 'tech'
    },
    {
        value: 'Data Engineer',
        id: '15',
        name: 'tech'
    },
    {
        value: 'Security',
        id: '14',
        name: 'tech'
    },
    {
        value: 'SQL / DBA ',
        id: '13',
        name: 'tech'
    },
    {
        value: 'Gamedev / Unity',
        id: '12',
        name: 'tech'
    },
    {
        value: 'Sysadmin',
        id: '11',
        name: 'tech'
    },
    {
        value: ' Data Analyst',
        id: '10',
        name: 'tech'
    },
    {
        value: 'Data Science',
        id: '9',
        name: 'tech'
    },
    {
        value: 'Business Analyst',
        id: '8',
        name: 'tech'
    },
    {
        value: 'DevOps',
        id: '7',
        name: 'tech'
    },
    {
        value: 'Architect / CTO',
        id: '6',
        name: 'tech'
    },
    {
        value: 'Product Manage',
        id: '5',
        name: 'tech'
    },
    {
        value: 'Project Manager',
        id: '4',
        name: 'tech'
    },
    {
        value: '2D / 3D Artist / Illustrator',
        id: '3',
        name: 'tech'
    },
    {
        value: 'Design / UI / UX',
        id: '2',
        name: 'tech'
    },
    {
        value: 'QA Automation',
        id: '1',
        name: 'tech'
    },
    {
        value: 'QA Manual',
        id: '0',
        name: 'tech'
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
    };

    const [isDarkMode, setIsDarkMode] = useState(false);
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
                    <input type="text" placeholder={t.filter.eg}
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
                <Accordion title={t.filter.development} item={development} register={register} />
                {/* <Accordion title={t.filter.other} item={tech} register={register} /> */}
                <Accordion title={t.filter.salary} item={salary} register={register} />
                <Accordion title={t.filter.employment} item={employment} register={register} />
                {/* <Accordion title={t.filter.english} item={english} register={register} /> */}
                <Accordion title={t.filter.experience} item={experience} register={register} />
                <Accordion title={t.filter.type} item={company} register={register} />
            </form>
        </div >
    );
};

export default Filter;