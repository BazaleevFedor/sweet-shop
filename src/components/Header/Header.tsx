'use client'

import styles from './styles.module.scss'
import {Navbar} from "@/components/Navbar/Navbar";
import "../../app/globals.scss";
import ThemeToggle from "@/contexts/ThemeToggle";

export default function Header() {

    return (
        <div className={styles.main}>
            <Navbar></Navbar>
            <span className={styles.logo}>Shishi</span>
            <ThemeToggle/>

            <svg className={styles.line} width="100%" height="5" viewBox="0 0 100% 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_277_1947)">
                    <line x1="0%" y1="2" x2="100%" y2="2" stroke="#C7C7C7" stroke-width="2"/>
                </g>
                <defs>
                    <filter id="filter0_f_295_1354" x="0" y="0" width="100%" height="4.71996"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_295_1354"/>
                    </filter>
                </defs>
            </svg>
        </div>
    );
}
