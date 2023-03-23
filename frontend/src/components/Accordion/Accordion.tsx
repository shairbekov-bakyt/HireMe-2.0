import React, { Fragment, useEffect, useState } from 'react';
import css from './Accordion.module.scss'
import cx from 'classnames'
import { useForm } from 'react-hook-form';

const Accordion = ({ title, item, register }: any) => {
    const [isOpen, setOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(isDarkModeEnabled);
    }, [isDarkMode]);
    return (
        <div className={cx(css.accordion_wrapper, isDarkMode ? css.dark : css.light)}>
            <div
                className={cx(css.accordion_title, isOpen ? css.open : null)}
                onClick={() => setOpen(!isOpen)}
            >
                {title}
            </div>
            <div className={cx(css.accordion_item, isOpen ? css.collapsed : null)}>
                <div className={css.accordion_content}>
                    {
                        item.map((i: any, index: number) => (
                            <Fragment key={index}>
                                <input type="checkbox" className={css.custom_checkbox} id={i.id + i.name} name={i.name} value="yes"  {...register('termsAndConditions', { required: true })} />
                                <label htmlFor={i.id + i.name}>{i.value}</label>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </div >
    );
};

export default Accordion;