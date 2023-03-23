import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import css from './Layout.module.scss'
interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={css.wrapper} >
            <Header />
            <div className={css.main}>
                {children}
            </div>
            <Footer />
        </div >
    );
};

export default Layout;