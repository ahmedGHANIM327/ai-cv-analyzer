import React from 'react';
import {Link} from "react-router";
import {usePuterStore} from "~/lib/puter";

export const Navbar = () => {

    const { auth } = usePuterStore();

    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <div className={'flex items-center justify-between gap-2'}>
                <Link to="/upload" className="primary-button min-w-[155px]">
                    Upload Resume
                </Link>
                <button className={'primary-button'} onClick={auth.signOut}>
                    <p>Log Out</p>
                </button>
            </div>
        </nav>
    );
};