import React, { useEffect, useState } from 'react';
import css from './Steps.module.scss'
import bold__user from '@/media/icons/bold/bold__user.svg'
import bold__search from '@/media/icons/bold/bold__search.svg'
import bold__cv from '@/media/icons/bold/bold__cv.svg'
import bold__case from '@/media/icons/bold/bold__case.svg'
import Image from 'next/image';
import { useRouter } from 'next/router';
import en from '@/locales/en';
import ru from '@/locales/ru';
import cx from 'classnames'


const Steps = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const { locale } = useRouter();
    const t = locale === 'en' ? en : ru;
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const step = [
        {
            img: <svg className={cx(css.monitor, css.icons)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" />
                <path d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z"  />
            </svg>,
            title: t.steps.signUp,
            descr: t.steps.signUpDescr,
        },
        {
            img: <svg className={cx(css.status, css.icons)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" />
                <path d="M21.3001 22.0001C21.1201 22.0001 20.9401 21.9301 20.8101 21.8001L18.9501 19.9401C18.6801 19.6701 18.6801 19.2301 18.9501 18.9501C19.2201 18.6801 19.6601 18.6801 19.9401 18.9501L21.8001 20.8101C22.0701 21.0801 22.0701 21.5201 21.8001 21.8001C21.6601 21.9301 21.4801 22.0001 21.3001 22.0001Z" />
            </svg>,
            title: t.steps.search,
            descr: t.steps.searchDescr,
        },
        {
            img: <svg className={cx(css.design, css.icons)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7997 2.20999C15.3897 1.79999 14.6797 2.07999 14.6797 2.64999V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.81999 20.8297 8.81999C21.3997 8.81999 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.68999 15.7997 2.20999Z" />
                <path d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75ZM13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" />
            </svg>,
            title: t.steps.upload,
            descr: t.steps.uploadDescr,
        },
        {
            img: <svg width="24" className={cx(css.volume, css.icons)} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.09 6.98002C20.24 6.04002 18.82 5.57002 16.76 5.57002H16.52V5.53002C16.52 3.85002 16.52 1.77002 12.76 1.77002H11.24C7.48004 1.77002 7.48004 3.86002 7.48004 5.53002V5.58002H7.24004C5.17004 5.58002 3.76004 6.05002 2.91004 6.99002C1.92004 8.09002 1.95004 9.57002 2.05004 10.58L2.06004 10.65L2.13749 11.4633C2.15176 11.6131 2.23242 11.7484 2.35831 11.8307C2.59812 11.9877 2.99946 12.2464 3.24004 12.38C3.38004 12.47 3.53004 12.55 3.68004 12.63C5.39004 13.57 7.27004 14.2 9.18004 14.51C9.27004 15.45 9.68004 16.55 11.87 16.55C14.06 16.55 14.49 15.46 14.56 14.49C16.6 14.16 18.57 13.45 20.35 12.41C20.41 12.38 20.45 12.35 20.5 12.32C20.8968 12.0958 21.3083 11.8195 21.6835 11.5489C21.7965 11.4673 21.8688 11.3413 21.8842 11.2028L21.9 11.06L21.95 10.59C21.96 10.53 21.96 10.48 21.97 10.41C22.05 9.40002 22.03 8.02002 21.09 6.98002ZM13.09 13.83C13.09 14.89 13.09 15.05 11.86 15.05C10.63 15.05 10.63 14.86 10.63 13.84V12.58H13.09V13.83ZM8.91004 5.57002V5.53002C8.91004 3.83002 8.91004 3.20002 11.24 3.20002H12.76C15.09 3.20002 15.09 3.84002 15.09 5.53002V5.58002H8.91004V5.57002Z" />
                <path d="M20.8733 13.7341C21.2269 13.5659 21.6342 13.8462 21.5988 14.2361L21.2398 18.19C21.0298 20.19 20.2098 22.23 15.8098 22.23H8.18984C3.78984 22.23 2.96984 20.19 2.75984 18.2L2.41913 14.4521C2.38409 14.0667 2.78205 13.7867 3.13468 13.9463C4.2741 14.4618 6.37724 15.3764 7.67641 15.7166C7.84072 15.7597 7.97361 15.8773 8.04556 16.0311C8.65253 17.3292 9.96896 18.02 11.8698 18.02C13.752 18.02 15.085 17.3026 15.694 16.0013C15.766 15.8474 15.8991 15.7298 16.0635 15.6865C17.443 15.3235 19.6816 14.3012 20.8733 13.7341Z" />
            </svg>,
            title: t.steps.getJob,
            descr: t.steps.getJobDescr,
        },
    ]

    return (
        <div className={css.wrapper}>
            <p className={css.title}>{t.steps.title__left}<span>{t.steps.title__center}</span></p>
            <p className={css.descr}>{t.steps.dsecr}</p>
            <div className={css.blocks}>
                {step.map((item, index) => (
                    <div className={css.block} key={index}
                        style={{
                            opacity: `${offsetY >= 240 ? 1 : 0}`,
                        }}
                    >
                        {item.img}
                        <p className={css.blockTitle}>{item.title}</p>
                        <p className={css.blockDescr}>{item.descr}</p>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Steps;