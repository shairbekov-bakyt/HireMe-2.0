import { useUserGetId } from "@/api/user/employer/getUserId";
import { Loader } from "@/components/Loader/Loader";
import Portal from "@/components/Portal/Portal";
import EmployerCard from "@/components/Profile/Employer/EmployerCard";
import EmployerDetail from "@/components/Profile/Employer/EmployerDetail";
import React, { useState, useEffect } from "react";
import css from '../profile.module.scss'




// const signGetUser = `${URL}users/profile/get/`;


const Employer = () => {
    const [mode, setMode] = useState(1)

    const { data, getUserById, isLoading, isError } = useUserGetId();

    useEffect(() => {
        getUserById();
    }, []);

    if (isLoading) {
        return <div className={css.loader}>
            <Loader />
        </div>;
    }

    if (isError) {
        return <div>{isError}</div>;
    }

    if (!data) {
        return null;
    }

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <EmployerDetail item={data} mode={mode} setModeOne={() => setMode(1)} setModeTwo={() => setMode(2)} />
                <EmployerCard item={data} mode={mode} />
            </div>
        </div >
    );
};

export default Employer;