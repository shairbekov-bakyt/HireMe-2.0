import Image from "next/image";
import { useState, useEffect } from "react";
import * as ReactDOM from 'react-dom';
import css from './modal.module.scss'
import close from '@/media/icons/close.svg'
export default function Portal({ show, onClose, children }: any) {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    const handleClose = (e: any) => {
        e.preventDefault()
        onClose()
        document.body.style.overflow = 'auto'
        document.body.style.position = 'static'
    }

    const modalContent = show ? (
        <div className={css.overlay}>
            <div className={css.modal}>
                <Image
                    alt="closeIcon"
                    src={close}
                    onClick={(e) => handleClose(e)}
                    className={css.closeIcon}
                />
                <div className={css.body}>
                    {children}
                </div>
            </div>
        </div>
    ) : null

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("__next") as HTMLElement
        )
    } else {
        return null
    }
}