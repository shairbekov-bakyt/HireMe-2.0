import React from 'react';
import Countless from './Countless/Countless';
import FindJob from './FindJob/FindJob';
import Job from './Job/Job';
import Marquees from './Marquee/Marquee';
import Offer from './Offer/Offer';
import Steps from './Steps/Steps';
import css from './Landing.module.scss'
const Landing = () => {

    return (
        <div className={css.wrapper}>
            <FindJob />
            <Marquees left="left" />
            <Marquees left="right" />
            <Steps />
            <Countless />
            <Job />
            <Offer />
        </div>
    );
};

export default Landing;