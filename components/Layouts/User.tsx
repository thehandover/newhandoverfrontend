import React from 'react'
import UserPanelSideBar from '../Dashboard/SideBar/SideBar';
import Header from '../Includes/Header';

const UserLayout = ({pageProps, children}: any) => {
    return (
        <>
            <Header />
            <div className="flex">
                <UserPanelSideBar />
                <div className="mx-auto lg:w-5/6 w-full">
                    <main className="w-full p-4">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

export default UserLayout