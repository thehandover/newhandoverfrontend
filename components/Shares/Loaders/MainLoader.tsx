import React, { useContext } from 'react'
import Image from 'next/image'
import Loader from "/public/img/loader.svg"
import Router from "next/router"
import styles from "./MainLoader.module.css"

const MainLoader = () => {

    Router.events.on('routeChangeStart', (url) => {

        document.body.classList.add('body-height')
        document.querySelector('.loader')?.classList.remove('hidden')
        document.querySelector('.loader')?.classList.add('flex')
        setTimeout(() => {
            document.querySelector('.loader')?.classList.remove('opacity-0')
        }, 100);
    })

    Router.events.on('routeChangeComplete', (url) => {
        
        document.querySelector('.loader')?.classList.add('opacity-0')
        setTimeout(() => {
            document.querySelector('.loader')?.classList.remove('flex')
            document.querySelector('.loader')?.classList.add('hidden')
            document.body.classList.remove('body-height')
        }, 300);
    })

    return (
        <div className={`loader fixed top-0 left-0 bottom-0 right-0 bg-white z-50 md:z-10 justify-center items-center transition-all duration-500 hidden opacity-0`}>
            {/* <Image src={Loader} className="delay-100" alt='loader' /> */}
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" className={`h-12 w-12 ${styles.loader}`} viewBox="0 0 1593.24 1586.2" stroke='#262250' strokeWidth={20} fill='transparent' strokeDasharray={4500} strokeDashoffset={0}><defs></defs><title>thehandover</title><path className="cls-1" d="M1025.63,1354.93H877.29V910H729v593.29h445V168.33H1025.61V1354.92ZM1322.27,316.67v744.92h148.32V168.35H1322.27V316.68ZM122.46,758.33v744.92H270.78V610H122.46V758.34ZM580.65,316.67H729v445H877.31V168.34h-445V1354.92h0v148.32H580.67V316.66Z" /></svg>

        </div>
    )
}

export default MainLoader