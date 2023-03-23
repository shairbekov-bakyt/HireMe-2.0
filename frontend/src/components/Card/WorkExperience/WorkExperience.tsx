import React from 'react';
import css from './WorkExperience.module.scss'

const WorkExperience = ({ x, i }: any) => {
    return (
        <div key={i} className={css.work_experience}>
            <div className={css.detail__logo}>
                <img src={x.logo} alt="detail__logo" className={css.icon} />
                <div className={css.logo__between}>
                    <p className={css.logo__name}>{x.title}</p>
                    <p className={css.logo__descr}>{x.sphere}</p>
                </div>
            </div>
            <p className={css.logo__descr__mobile}>{x.sphere}</p>
            <p className={css.detail__title}>{x.date_work}</p>
            <p className={css.detail__descr}>{x.descr}</p>
            <ul className={css.stack}>
                {x.stack.map((a: any, o: any) =>
                    <li key={o}>{a.title}</li>
                )}
            </ul>
        </div>
    );
};

export default WorkExperience;