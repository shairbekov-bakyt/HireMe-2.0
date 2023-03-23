import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';

import css from './header.module.scss'

import { ILink } from '@/interface';
import user from '@/media/icons/user.svg'
import cases from '@/media/icons/case.svg'
import company from '@/media/icons/company.svg'
import resume from '@/media/icons/resume.svg'
import logoName from '@/media/icons/logoName.svg'
import moon from '@/media/icons/moon.svg'
import sun from '@/media/icons/sun.svg'
import en from '@/locales/en';
import ru from '@/locales/ru';
import logoType from '@/media/icons/logoType.svg'
import cx from 'classnames'
import { useTheme } from 'next-themes'

const Header = () => {
    const { theme, setTheme } = useTheme()
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : ru;
    const changeLanguage = (e: any) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
    };
    const links: ILink[] = [
        {
            icon: cases,
            title: t.header.vacancy,
            link: '/vacancy'
        },
        {
            icon: company,
            title: t.header.company,
            link: '/company'
        },
        {
            icon: resume,
            title: t.header.resume,
            link: '/resume'
        },
    ]
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(isDarkModeEnabled);
    }, [isDarkMode]);
    return (
        <header className={cx(css.nav, isDarkMode ? css.dark : css.light)}>
            <div className={css.container}>
                <Link href="/" className={css.logo}>
                    <Image
                        src={logoName}
                        alt='HireMe'
                        className={css.logoName}
                    />
                </Link>
                <ul className={css.routers}>
                    {links.map((item, index) =>
                        <li key={index} className={router.pathname == item.link ? css.active : ""}>
                            <Link href={item.link} className={css.link__li}>
                                <Image src={item.icon} alt={item.icon} />
                                {item.title}</Link>
                        </li>
                    )}
                </ul>

                <ul className={css.btns__link}>
                    <li>
                        <Link className={css.login} href="/profile/employer">{t.header.login}</Link>
                    </li>
                    <li>
                        <Link className={css.register} href="/auth/sign-in">{t.header.register}</Link>
                    </li>
                    <select
                        onChange={changeLanguage}
                        defaultValue={locale}
                        className={css.selected}
                    >
                        <option value="en">EN</option>
                        <option value="ru">Ru</option>
                    </select>
                    <li className={css.theme}>
                        {theme === 'light' ?
                            <Image
                                src={moon}
                                alt={"sunIcon"}
                                onClick={() => setTheme('dark')}
                            /> :
                            <Image
                                src={sun}
                                alt={"sunIcon"}
                                onClick={() => setTheme('light')}
                            />
                        }
                    </li>
                </ul>
                <ul className={css.mobileRouters}>
                    <Link href="/" className={css.logot}>
                        <Image
                            src={logoType}
                            alt='HireMe'
                            className={css.logoType}
                        />
                    </Link>
                    {links.map((item, index) =>
                        <li key={index} className={router.pathname == item.link ? css.active : ""}>
                            <Link href={item.link}>
                                <Image src={item.icon} alt={item.icon} />
                            </Link>
                        </li>
                    )}
                    <li>
                        <Link href={'/auth/sign-in'} >
                            <Image src={user} alt="user" />
                        </Link>
                    </li>
                    <select
                        onChange={changeLanguage}
                        defaultValue={locale}
                        className={css.selected}
                    >
                        <option className={css.option} value="en">EN</option>
                        <option className={css.option} value="ru">Ru</option>
                    </select>
                    <div className={css.theme}>
                        {theme === 'light' ?
                            <Image
                                src={moon}
                                alt={"sunIcon"}
                                onClick={() => setTheme('dark')}
                            /> :
                            <Image
                                src={sun}
                                alt={"sunIcon"}
                                onClick={() => setTheme('light')}
                            />
                        }
                    </div>
                </ul>
            </div >
        </header >
    )
}
export default Header