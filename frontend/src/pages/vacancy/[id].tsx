import React, { useEffect, useState } from 'react';
import cx from 'classnames'
import Image from 'next/image';

import css from '@/styles/pages/id.module.scss'


import RecommendedVacancy from '@/components/Recommended/RecommendedVacancy/RecommendedVacancy';
import Portal from '@/components/Portal/Portal';
import CoverLatter from '@/components/Portal/CoverLetter/CoverLetter';
import LeftVacansy from '@/components/Detail/DetailVacancy/LeftVacansy/LeftVacansy';
import RightVacansy from '@/components/Detail/DetailVacancy/RightVacansy/RightVacansy';
import { useRouter } from 'next/router';
import { useStoreVacancyId } from '@/api/vacansys/id';
import { Loader } from '@/components/Loader/Loader';

const step = [
    {
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

const VacansyId = () => {
    const [modal, setModal] = useState(false)
    const [disable, setDisable] = useState(false)
    const [apply, setApply] = useState(false)
    const router = useRouter();
    const { id } = router.query;
    const { data, isLoading, isError, getPostById } = useStoreVacancyId((state) => state);

    useEffect(() => {
        if (id) {
            getPostById(id);
        }
    }, [id]);

    if (isLoading) {
        return <div className={css.loader}>
            <Loader />
        </div>;
    }

    if (isError) {
        return <div className={css.loader}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 23l-8.5-4.535v-3.953l5.4 3.122 3.1-3.406v8.772zm1-.001v-8.806l3.162 3.343 5.338-2.958v3.887l-8.5 4.534zm-10.339-10.125l-2.161-1.244 3-3.302-3-2.823 8.718-4.505 3.215 2.385 3.325-2.385 8.742 4.561-2.995 2.771 2.995 3.443-2.242 1.241v-.001l-5.903 3.27-3.348-3.541 7.416-3.962-7.922-4.372-7.923 4.372 7.422 3.937v.024l-3.297 3.622-5.203-3.008-.16-.092-.679-.393v.002z" /></svg>
            {isError}
        </div>;
    }

    if (!data) {
        return null;
    }
    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <LeftVacansy item={data} apply={apply} onApply={() => setApply(true)} />
                <RightVacansy item={data} />
            </div>
            <RecommendedVacancy item={step} />
        </div >
    );
};

export default VacansyId;