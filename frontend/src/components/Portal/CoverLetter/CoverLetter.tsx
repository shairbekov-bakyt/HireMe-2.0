import Image from 'next/image';
import React, { useState } from 'react';
import css from './CoverLetter.module.scss'
import close from '@/media/icons/close.svg'

const questionArr = [
    {
        id: 0,
        title: 'Топовое CV',
        text: 'Hi! Your company and stack seems interesting to me. I have solid experience with Typescript, React, and econsystem'
    },
    {
        id: 1,
        title: 'CV Sardor',
        text: 'Sardor. Hi! Your company and stack seems interesting to me. I have solid experience with Typescript, React, and econsystem'
    },
    {
        id: 2,
        title: 'New CV 2023',
        text: '2023Hi! Your company and stack seems interesting to me. I have solid experience with Typescript, React, and econsystem'
    }

]

const CoverLatter = ({ onModal, onDisable }: any) => {
    const [valueQuesion, setValueQuesion] = useState("")
    const [createQuestion, setCreateQuestion] = useState(questionArr)
    
    const handleCreateTemplate = (e: any) => {
        e.preventDefault()
        const data = {
            id: 0,
            title: 'Good',
            text: valueQuesion
        }
        setCreateQuestion([...createQuestion, data])
    }
    const handleSend = (e: any) => {
        e.preventDefault()
        onModal()
        onDisable()
    }


    return (
        <div className={css.modal}>
            <p className={css.modal__title}>Cопроводительное письмо</p>
            <textarea className={css.textarea}
                value={valueQuesion}
                onChange={(e) => setValueQuesion(e.target.value)}
                placeholder="Сопроводительное письмо" />
            <div className={css.template__btns}>
                <button
                    disabled={!valueQuesion}
                    className={css.send}
                    onClick={(e) => handleSend(e)}
                >Отправить</button>
                <button className={css.save}
                    disabled={!valueQuesion}
                    onClick={(e) => handleCreateTemplate(e)}
                >Сохранить шаблон</button>
            </div>
            <div className={css.template__btns}>
                {createQuestion.map((item, index) => (
                    <button
                        key={index} className={css.tempalte}
                        onClick={() => setValueQuesion(item.text)}
                    >{item.title}</button>
                ))}
            </div>
        </div>
    );
};

export default CoverLatter;