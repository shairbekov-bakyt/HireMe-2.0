import React, { useState } from 'react';

import css from '@/styles/pages/id.module.scss'

import ResumeLeft from '@/components/Detail/DetailResume/ResumeLeft/ResumeLeft';
import ResumeRight from '@/components/Detail/DetailResume/ResumeRight/ResumeRight';
import Portal from '@/components/Portal/Portal';
import CoverLatter from '@/components/Portal/CoverLetter/CoverLetter';
import RecommendedResume from '@/components/Recommended/RecommendedResume/RecommendedVacancy';
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';

const step = [
    {
        id: 0,
        company: {
            img: "data:image/jpeg;base64,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",
            name: 'Israilov Sardor',
            location: 'Bishkek'
        },
        title: "Senior Product Designer",
        descr: "I`m a frontend developer with 2 years of experience. My mail expertise is TypeScript, React, and its ecosystem. Worked on 2 projects for long-term: e-commerce marketplace and SaaS for tracking employees work schedule. Experienced with Redux, RTK, RTK query, each-query, things, server side rendering (Next.js). I`m practice Test Driven Development and can configure CI/CD pipelines. In terms of UI, I have solid experience with CSS-in-JS solutions, Material UI, Tailwind, CSS. Experts in responsive Web Design and analysing and fixing UI bugs quickly. Im aspired to deepen my knowledge in TypeScript, and extend my skills with React Native and backend technologies like AWS, DynamoDB, etc.",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '10 000',
            year: '2'
        }
    },
    {
        id: 1,
        company: {
            img: "data:image/jpeg;base64,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",
            name: 'Israilov Sardor',
            location: 'Bishkek'
        },
        title: "Senior Product Designer",
        descr: "I`m a frontend developer with 2 years of experience. My mail expertise is TypeScript, React, and its ecosystem. Worked on 2 projects for long-term: e-commerce marketplace and SaaS for tracking employees work schedule. Experienced with Redux, RTK, RTK query, each-query, things, server side rendering (Next.js). I`m practice Test Driven Development and can configure CI/CD pipelines. In terms of UI, I have solid experience with CSS-in-JS solutions, Material UI, Tailwind, CSS. Experts in responsive Web Design and analysing and fixing UI bugs quickly. Im aspired to deepen my knowledge in TypeScript, and extend my skills with React Native and backend technologies like AWS, DynamoDB, etc.",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '10 000',
            year: '2'
        }
    },
    {
        id: 2,
        company: {
            img: "data:image/jpeg;base64,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",
            name: 'Israilov Sardor',
            location: 'Bishkek'
        },
        title: "Senior Product Designer",
        descr: "I`m a frontend developer with 2 years of experience. My mail expertise is TypeScript, React, and its ecosystem. Worked on 2 projects for long-term: e-commerce marketplace and SaaS for tracking employees work schedule. Experienced with Redux, RTK, RTK query, each-query, things, server side rendering (Next.js). I`m practice Test Driven Development and can configure CI/CD pipelines. In terms of UI, I have solid experience with CSS-in-JS solutions, Material UI, Tailwind, CSS. Experts in responsive Web Design and analysing and fixing UI bugs quickly. Im aspired to deepen my knowledge in TypeScript, and extend my skills with React Native and backend technologies like AWS, DynamoDB, etc.",
        condition: {
            type: "Full Time",
            remote: "Remote",
            sale: '10 000',
            year: '2'
        }
    },
]

const hr =
{
    recruiter: {
        logo: "https://djinni.co/api/imgproxy/-uvoyTuU6XlKfnWog-PBWnel932YXvV-boWERB7GkvY/rs:fit:280:280:True/aHR0cHM6Ly9wLmRq/aW5uaS5jby9iZi82/NzMwYTc2MjI2M2Ix/YzI2Y2NmNjdkZTNl/NzY2OWQvMkQ4QUUx/ODgtMDZGRS00ODM3/LTg4RUYtMDk4NUMy/MTlCNzg4XzQwMC5q/cGc.jpg",
        name: "Sardor Isarilov",
        post: "Frontend Developer",
        number: "+996502772777",
        email: "sardor_09062002@mail.ru",
        about: "I`m a frontend developer with 2 years of experience. My mail expertise is TypeScript, React, and its ecosystem. Worked on 2 projects for long-term: e-commerce marketplace and SaaS for tracking employees work schedule. Experienced with Redux, RTK, RTK query, each-query, things, server side rendering (Next.js). I`m practice Test Driven Development and can configure CI/CD pipelines. In terms of UI, I have solid experience with CSS-in-JS solutions, Material UI, Tailwind, CSS. Experts in responsive Web Design and analysing and fixing UI bugs quickly. Im aspired to deepen my knowledge in TypeScript, and extend my skills with React Native and backend technologies like AWS, DynamoDB, etc.",
        experience: "7",
        salary: '1000',
        format: [
            {
                title: "Remote",
            },
            {
                title: "Full Time",
            },
            {
                title: "Office",
            }
        ],
        stack: [
            { title: "React" },
            { title: "Aws" },
            { title: "Redux" },
            { title: "MUI" },
            { title: "SCSS" },
            { title: "RTK" },
            { title: "TDD" },
            { title: "Angular" },
        ],
        expectations: "I want to be a part of a team with great engineering culture and interesting product",
        progress: "Implemented Test Driven Development with 90% test coverage and created smooth CI/CD pipeline in GitHub Actions.",
        work_experience: [
            {
                logo: 'https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000',
                title: 'Google',
                sphere: 'Продуктовая IT- компания.Драйвер автоматизации бизнес - процессов',
                date_work: 'Октябрь 2022 — Март 2023',
                descr: ' Полный цикл подбора IT специалистов: разработчики back - end, front - end, fullstack, scrum maser, верстальщики.Уровень от Junior до Lead. Взаимодействие с заказчиками, составление описания вакансии, согласование условий и публикация вакансий; Поиск кандидатов через внутренние и внешние рекомендации, прямой поиск на hh, хабр карьере, телегам, LinkedIn, использование boolean search x- pay запросов.',
                stack: [
                    { title: "React" },
                    { title: "Aws" },
                    { title: "Redux" },
                    { title: "MUI" },
                    { title: "SCSS" },
                    { title: "RTK" },
                    { title: "TDD" },
                    { title: "Angular" },
                ]
            },
            {
                logo: 'https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000',
                title: 'Figma',
                sphere: 'Продуктовая IT- компания.Драйвер автоматизации бизнес - процессов',
                date_work: 'Март 2021 — Октябрь 2022',
                descr: ' Полный цикл подбора IT специалистов: разработчики back - end, front - end, fullstack, scrum maser, верстальщики.Уровень от Junior до Lead. Взаимодействие с заказчиками, составление описания вакансии, согласование условий и публикация вакансий; Поиск кандидатов через внутренние и внешние рекомендации, прямой поиск на hh, хабр карьере, телегам, LinkedIn, использование boolean search x- pay запросов.',
                stack: [
                    { title: "React" },
                    { title: "Aws" },
                    { title: "Redux" },
                    { title: "MUI" },
                    { title: "SCSS" },
                    { title: "RTK" },
                    { title: "TDD" },
                    { title: "Angular" },
                ]
            },
        ],
        links: [
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#0a66c2" width="24" height="24" focusable="false">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>,
                link: "https://www.linkedin.com/in/sardor-israilov-9b2b2a239/",
                title: "Sardor Israilov"
            },
            {
                icon: <svg viewBox="0 0 34 34" width="133" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#2481cc" fillRule="evenodd">
                        <circle cx="17" cy="17" fill="" r="17"></circle>
                        <path d="m7.06510669 16.9258959c5.22739451-2.1065178 8.71314291-3.4952633 10.45724521-4.1662364 4.9797665-1.9157646 6.0145193-2.2485535 6.6889567-2.2595423.1483363-.0024169.480005.0315855.6948461.192827.1814076.1361492.23132.3200675.2552048.4491519.0238847.1290844.0536269.4231419.0299841.65291-.2698553 2.6225356-1.4375148 8.986738-2.0315537 11.9240228-.2513602 1.2428753-.7499132 1.5088847-1.2290685 1.5496672-1.0413153.0886298-1.8284257-.4857912-2.8369905-1.0972863-1.5782048-.9568691-2.5327083-1.3984317-4.0646293-2.3321592-1.7703998-1.0790837-.212559-1.583655.7963867-2.5529189.2640459-.2536609 4.7753906-4.3097041 4.755976-4.431706-.0070494-.0442984-.1409018-.481649-.2457499-.5678447-.104848-.0861957-.2595946-.0567202-.3712641-.033278-.1582881.0332286-2.6794907 1.5745492-7.5636077 4.6239616-.715635.4545193-1.3638349.6759763-1.9445998.6643712-.64024672-.0127938-1.87182452-.334829-2.78737602-.6100966-1.12296117-.3376271-1.53748501-.4966332-1.45976769-1.0700283.04048-.2986597.32581586-.610598.8560076-.935815z" fill="white"></path>
                    </g>
                </svg>,
                link: "https://t.me/israilov02",
                title: "Sardor Israilov"
            },
            {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>,
                link: "sardor_09062002@mail.ru",
                title: "Sardor Israilov"
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>,
                link: "https://github.com/IsrailovSardor",
                title: "Sardor Israilov"
            }
        ],
    },
    company: {
        descr: "Программное обеспечение меняет мир. Австралийская компания Atlassian (www.atlassian.com) помогает измениться командам, создающим программное обеспечение. Мы делаем продукты Atlassian доступнее для этих команд и помогаем использовать их более эффективно. Более 40 000 компаний по всему миру используют продукты Atlassian для оптимизации бизнес-процессов, поддержки эффективных коммуникаций и продуктивной совместной работы. У нас небольшой дружный коллектив и занимаемся мы продвижением на российском рынке замечательных программных продуктов австралийской компании Atlassian (www.atlassian.com). Наша деятельность покрывает весь спектр компетенций по продуктам JIRA, Confluence и Developer Tools: ",
        title: "Google",
        icon: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
        logo: "https://img.freepik.com/free-icon/search_318-265146.jpg?w=2000",
        sphere: "Продуктовая IT- компания.Драйвер автоматизации бизнес - процессов",
        location: "USA",
        employer: "100",
        our_values: [
            { title: "Качество как основной ориентир в работе над продуктом, сервисом, процессами." },
            { title: "Прозрачность и открытость бизнеса как гарантия законности и справедливости принимаемых решений." },
            { title: "Нестандартный подход к решению задач как способ развития сотрудников." },
            { title: "Экологичность - как отражение нашего отношения к коллегам, клиентам, партнерам и окружающему миру." },
            { title: "Гибкость как отражение нашего отношения к вызовам конкурентного рынка финансовых услуг и высоких технологий." },
            { title: "Индивидуальность каждого сотрудника как основной критерий для формирования команды." },
            { title: "Экономика восприятия - как отношение к сервису, который создает каждый из нас." },
        ],
        links: [
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#0a66c2" width="24" height="24" focusable="false">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>,
                link: "https://www.linkedin.com/in/sardor-israilov-9b2b2a239/",
                title: "Sardor Israilov"
            },
            {
                icon: <svg viewBox="0 0 34 34" width="133" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#2481cc" fillRule="evenodd">
                        <circle cx="17" cy="17" fill="" r="17"></circle>
                        <path d="m7.06510669 16.9258959c5.22739451-2.1065178 8.71314291-3.4952633 10.45724521-4.1662364 4.9797665-1.9157646 6.0145193-2.2485535 6.6889567-2.2595423.1483363-.0024169.480005.0315855.6948461.192827.1814076.1361492.23132.3200675.2552048.4491519.0238847.1290844.0536269.4231419.0299841.65291-.2698553 2.6225356-1.4375148 8.986738-2.0315537 11.9240228-.2513602 1.2428753-.7499132 1.5088847-1.2290685 1.5496672-1.0413153.0886298-1.8284257-.4857912-2.8369905-1.0972863-1.5782048-.9568691-2.5327083-1.3984317-4.0646293-2.3321592-1.7703998-1.0790837-.212559-1.583655.7963867-2.5529189.2640459-.2536609 4.7753906-4.3097041 4.755976-4.431706-.0070494-.0442984-.1409018-.481649-.2457499-.5678447-.104848-.0861957-.2595946-.0567202-.3712641-.033278-.1582881.0332286-2.6794907 1.5745492-7.5636077 4.6239616-.715635.4545193-1.3638349.6759763-1.9445998.6643712-.64024672-.0127938-1.87182452-.334829-2.78737602-.6100966-1.12296117-.3376271-1.53748501-.4966332-1.45976769-1.0700283.04048-.2986597.32581586-.610598.8560076-.935815z" fill="white"></path>
                    </g>
                </svg>,
                link: "https://t.me/israilov02",
                title: "Sardor Israilov"
            },
            {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                ,
                link: "sardor_09062002@mail.ru",
                title: "Sardor Israilov"
            }
        ],
        benefit: [
            { title: "Своевременная оплата труда" },
            { title: "Удаленная работа" },
            { title: "Профессиональное обучение" },
            { title: "Гибкий рабочий график" },
            { title: "Оплата больничного" },
            { title: "Удобное расположение работы" },
            { title: "Корпоративные мероприятия" },
            { title: "Система наставничества" },
            { title: "Медицинское страхование" },
            { title: "Наличие кухни, места для обеда" }
        ],
        email: "sardor_09062002@mail.ru",
        vacansy: [
            {
                title: "Senior Java",
                link: "/vacancy/1"
            },
            {
                title: "Senior UX",
                link: "/vacancy/1"
            },
            {
                title: "Senior HUR",
                link: "/vacancy/1"
            }
        ]
    }
}

const VacansyId = () => {
    const [modal, setModal] = useState(false)
    const [disable, setDisable] = useState(false)

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <ResumeLeft item={hr} />
                <ResumeRight item={hr} />
            </div>
            <RecommendedResume item={step} />
        </div >
    );
};

export default VacansyId;