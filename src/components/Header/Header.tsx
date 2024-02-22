'use client'

import styles from './styles.module.scss'
import {Navbar} from "@/components/Navbar/Navbar";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import Link from "next/link";
import classnames from 'classnames';

export default function Header() {
    return (
        <div className={styles.main}>
            <Navbar/>

            <svg className={classnames(styles.instagramIcon, 'svgTheme')} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.4033 7.42924C22.4033 6.50876 23.1497 5.76257 24.07 5.76257C24.9905 5.76257 25.7367 6.50876 25.7367 7.42924C25.7367 8.34971 24.9905 9.09591 24.07 9.09591C23.1497 9.09591 22.4033 8.34971 22.4033 7.42924Z"
                      fill="#E7E7E7"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.7367 7.84595C11.3645 7.84595 7.82007 11.3903 7.82007 15.7625C7.82007 20.1349 11.3645 23.6792 15.7367 23.6792C20.109 23.6792 23.6533 20.1349 23.6533 15.7625C23.6533 11.3903 20.109 7.84595 15.7367 7.84595ZM10.3201 15.7625C10.3201 12.771 12.7452 10.3459 15.7367 10.3459C18.7283 10.3459 21.1533 12.771 21.1533 15.7625C21.1533 18.7542 18.7283 21.1792 15.7367 21.1792C12.7452 21.1792 10.3201 18.7542 10.3201 15.7625Z"
                      fill="#E7E7E7"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M24.5006 0.4843C18.7229 -0.161433 12.7507 -0.161433 6.97308 0.4843C3.61965 0.8591 0.912429 3.50078 0.518163 6.87167C-0.172721 12.7789 -0.172721 18.7464 0.518163 24.6535C0.912429 28.0244 3.61965 30.6662 6.97308 31.0409C12.7507 31.6867 18.7229 31.6867 24.5006 31.0409C27.8539 30.6662 30.5612 28.0244 30.9554 24.6535C31.6464 18.7464 31.6464 12.7789 30.9554 6.87167C30.5612 3.50078 27.8541 0.8591 24.5006 0.4843ZM7.25076 2.96883C12.8439 2.34372 18.6297 2.34372 24.2229 2.96883C26.4397 3.2166 28.2156 4.96595 28.4724 7.16208C29.1407 12.8764 29.1407 18.6489 28.4724 24.3632C28.2156 26.5592 26.4397 28.3087 24.2229 28.5564C18.6297 29.1815 12.8439 29.1815 7.25076 28.5564C5.03391 28.3087 3.2581 26.5592 3.00125 24.3632C2.33291 18.6489 2.33291 12.8764 3.00125 7.16208C3.2581 4.96595 5.03391 3.2166 7.25076 2.96883Z"
                      fill="#E7E7E7"/>
            </svg>
            <Link className={classnames(styles.instagramLink, 'svgTheme')} href='https://www.instagram.com/shi.shi_16' target="_blank">@shi.shi_16</Link>
            <ThemeToggle/>

            <svg className={classnames(styles.line, 'svgThemeLine')} width="100%" height="5" viewBox="0 0 100% 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_277_1947)">
                    <line x1="0%" y1="2" x2="100%" y2="2" stroke="#C7C7C7" strokeWidth="2"/>
                </g>
                <defs>
                    <filter id="filter0_f_295_1354" x="0" y="0" width="100%" height="4.71996"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_295_1354"/>
                    </filter>
                </defs>
            </svg>
        </div>
    );
}
