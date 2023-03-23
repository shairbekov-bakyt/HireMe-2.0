import React from 'react';
import css from './StepSign.module.scss'
import cx from 'classnames'
const StepSign = ({ step }: any) => {
    return (
        <div className={css.steps}>
            <div
                className={cx(css.stepNumber, step >= 1 ? css.act : "")}>
                1
            </div>
            <div className={cx(css.line, step >= 2 ? css.act1 : "")} />
            <div
                className={cx(css.stepNumber, step >= 2 ? css.act : "")}>
                2
            </div>
        </div >
    );
};

export default StepSign;
{/* <div className={css.steps}>
                            <div
                                style={{
                                    background: step >= 1 ? "#ffbb00" : '#D6DAF2',
                                    color: step >= 1 ? "white" : 'black',
                                }}
                                className={css.stepNumber}>
                                1
                            </div>
                            <div className={css.line}
                                style={{
                                    background: step >= 2 ? "#ffbb00" : '#D6DAF2'
                                }}
                            />
                            <div
                                style={{
                                    color: step >= 2 ? "white" : 'black',
                                    background: step >= 2 ? "#ffbb00" : '#D6DAF2'
                                }}
                                className={css.stepNumber}>
                                2
                            </div>
                        </div> */}