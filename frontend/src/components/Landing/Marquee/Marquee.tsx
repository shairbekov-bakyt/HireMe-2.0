import React, { useEffect, useState } from 'react';
import css from './marquee.module.scss'
import Marquee from "react-fast-marquee";
import cx from 'classnames'

interface Logo {
    name: string
}

const arr: Logo[] = [
    {
        name: "JavaScript"
    },
    {
        name: "Google"
    },
    {
        name: "Python"
    },
    {
        name: "Microsoft"
    },
    {
        name: "C++"
    },
    {
        name: "YouTube"
    },
    {
        name: "Java"
    },
    {
        name: "Linkedin"
    },
    {
        name: "GitHub"
    },
    {
        name: "Facebook"
    },
    {
        name: "Rust"
    },
    {
        name: "C#"
    },
    {
        name: "Kotlin"
    },
    {
        name: "Swift"
    },
    {
        name: "Go"
    },
    {
        name: "Dart"
    },
    {
        name: "Chat GPT"
    },
    {
        name: "Ruby"
    },
    {
        name: "AWS"
    },
    {
        name: "SQL"
    }
]

const Marquees = ({ left }: any) => {


    return (
        <Marquee className={css.marqueee} speed={20} direction={left} >
            <ul className={css.marquee}>
                {arr.map((item, i) =>
                    <li key={i}>{item.name}</li>
                )}
            </ul>
        </Marquee >
    );
};

export default Marquees;