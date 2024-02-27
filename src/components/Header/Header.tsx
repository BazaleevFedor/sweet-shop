'use client'

import styles from './styles.module.scss'
import {Navbar} from "@/components/Navbar/Navbar";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import Link from "next/link";
import classnames from 'classnames';

export default function Header() {
    return (
        <div className={ styles.header }>
            <Navbar/>

            <Link className={ classnames(styles.instagramLink, 'svgTheme') } href='https://www.instagram.com/shi.shi_16' target="_blank">
                <svg className={ classnames(styles.instagramIcon, 'svgTheme') } width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.4033 7.42924C22.4033 6.50876 23.1497 5.76257 24.07 5.76257C24.9905 5.76257 25.7367 6.50876 25.7367 7.42924C25.7367 8.34971 24.9905 9.09591 24.07 9.09591C23.1497 9.09591 22.4033 8.34971 22.4033 7.42924Z"
                          fill="#E7E7E7"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M15.7367 7.84595C11.3645 7.84595 7.82007 11.3903 7.82007 15.7625C7.82007 20.1349 11.3645 23.6792 15.7367 23.6792C20.109 23.6792 23.6533 20.1349 23.6533 15.7625C23.6533 11.3903 20.109 7.84595 15.7367 7.84595ZM10.3201 15.7625C10.3201 12.771 12.7452 10.3459 15.7367 10.3459C18.7283 10.3459 21.1533 12.771 21.1533 15.7625C21.1533 18.7542 18.7283 21.1792 15.7367 21.1792C12.7452 21.1792 10.3201 18.7542 10.3201 15.7625Z"
                          fill="#E7E7E7"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M24.5006 0.4843C18.7229 -0.161433 12.7507 -0.161433 6.97308 0.4843C3.61965 0.8591 0.912429 3.50078 0.518163 6.87167C-0.172721 12.7789 -0.172721 18.7464 0.518163 24.6535C0.912429 28.0244 3.61965 30.6662 6.97308 31.0409C12.7507 31.6867 18.7229 31.6867 24.5006 31.0409C27.8539 30.6662 30.5612 28.0244 30.9554 24.6535C31.6464 18.7464 31.6464 12.7789 30.9554 6.87167C30.5612 3.50078 27.8541 0.8591 24.5006 0.4843ZM7.25076 2.96883C12.8439 2.34372 18.6297 2.34372 24.2229 2.96883C26.4397 3.2166 28.2156 4.96595 28.4724 7.16208C29.1407 12.8764 29.1407 18.6489 28.4724 24.3632C28.2156 26.5592 26.4397 28.3087 24.2229 28.5564C18.6297 29.1815 12.8439 29.1815 7.25076 28.5564C5.03391 28.3087 3.2581 26.5592 3.00125 24.3632C2.33291 18.6489 2.33291 12.8764 3.00125 7.16208C3.2581 4.96595 5.03391 3.2166 7.25076 2.96883Z"
                          fill="#E7E7E7"/>
                </svg>
                <span className={ styles.instagramText }>@shi.shi_16</span>
            </Link>

            <Link className={ styles.phone } href='tel:+79099944961'>
                <svg className={ classnames(styles.phoneIcon, 'svgTheme') } width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4641 13.6661L14.9565 13.1765L13.8131 12.0266L13.3208 12.5162L14.4641 13.6661ZM16.6101 12.9714L18.6755 14.0942L19.45 12.6696L17.3846 11.5468L16.6101 12.9714ZM19.0731 16.3257L17.5373 17.8527L18.6807 19.0027L20.2164 17.4757L19.0731 16.3257ZM16.6016 18.3444C15.0341 18.4905 10.9789 18.3603 6.58823 13.9945L5.44486 15.1445C10.2362 19.9086 14.7964 20.1412 16.7521 19.959L16.6016 18.3444ZM6.58823 13.9945C2.40303 9.83311 1.70976 6.33302 1.62346 4.81456L0.00448505 4.90657C0.113088 6.8177 0.971526 10.6966 5.44486 15.1445L6.58823 13.9945ZM8.07503 7.31328L8.38508 7.00497L7.24175 5.85508L6.93169 6.16338L8.07503 7.31328ZM8.63189 3.07509L7.26873 1.25415L5.9706 2.22596L7.33375 4.04691L8.63189 3.07509ZM2.68393 0.857814L0.987093 2.54501L2.13047 3.69492L3.8273 2.00772L2.68393 0.857814ZM7.50337 6.73833C6.93169 6.16338 6.93092 6.16415 6.93014 6.16492C6.92988 6.16518 6.9291 6.16597 6.92857 6.1665C6.92751 6.16757 6.92643 6.16865 6.92534 6.16977C6.92314 6.172 6.92087 6.17433 6.91854 6.17675C6.91386 6.1816 6.90891 6.18686 6.90369 6.19252C6.89326 6.20384 6.88181 6.21679 6.86955 6.23142C6.84505 6.26066 6.81727 6.29667 6.78809 6.33975C6.72957 6.42612 6.66581 6.54031 6.6117 6.68392C6.50129 6.97694 6.4421 7.36321 6.51631 7.84153C6.66143 8.77695 7.30564 10.0126 8.95588 11.6534L10.0992 10.5035C8.55492 8.96793 8.18703 8.03346 8.11871 7.59293C8.08617 7.38328 8.1199 7.28009 8.1292 7.25566C8.13482 7.24055 8.13752 7.239 8.1306 7.24932C8.12714 7.25437 8.12141 7.26228 8.11244 7.27292C8.10801 7.27825 8.10271 7.28429 8.09655 7.29101C8.09341 7.29437 8.09017 7.29791 8.08649 7.30162C8.08476 7.30348 8.08293 7.30537 8.08098 7.30731C8.08001 7.30829 8.07903 7.30927 8.07806 7.31026C8.07763 7.31076 8.07687 7.31152 8.07655 7.31177C8.07579 7.31252 8.07503 7.31328 7.50337 6.73833ZM8.95588 11.6534C10.6067 13.2948 11.848 13.9336 12.785 14.0774C13.2638 14.1508 13.6498 14.0922 13.9427 13.9831C14.0863 13.9296 14.2006 13.8666 14.2871 13.8086C14.3304 13.7796 14.3665 13.7521 14.3958 13.7277C14.4105 13.7156 14.4235 13.7043 14.4348 13.6939C14.4405 13.6887 14.4458 13.6839 14.4507 13.6792C14.4532 13.6768 14.4555 13.6746 14.4577 13.6724C14.4588 13.6713 14.4599 13.6702 14.461 13.6691C14.4615 13.6686 14.4624 13.6679 14.4626 13.6676C14.4633 13.6669 14.4641 13.6661 13.8924 13.0911C13.3208 12.5162 13.3215 12.5154 13.3223 12.5147C13.3225 12.5145 13.3233 12.5137 13.3238 12.5132C13.3248 12.5122 13.3257 12.5112 13.3267 12.5103C13.3288 12.5084 13.3306 12.5066 13.3324 12.5047C13.3362 12.5012 13.3398 12.4979 13.3432 12.4948C13.3499 12.4887 13.3559 12.4834 13.3613 12.4791C13.3719 12.4703 13.3798 12.4646 13.3847 12.4613C13.3947 12.4546 13.3927 12.4576 13.3767 12.4635C13.3502 12.4734 13.2441 12.5072 13.0309 12.4745C12.5841 12.406 11.6431 12.0385 10.0992 10.5035L8.95588 11.6534ZM7.26873 1.25415C6.16679 -0.217809 3.99993 -0.450723 2.68393 0.857814L3.8273 2.00772C4.40208 1.43619 5.4229 1.49436 5.9706 2.22596L7.26873 1.25415ZM1.62346 4.81456C1.60219 4.44039 1.7738 4.04955 2.13047 3.69492L0.987093 2.54501C0.406218 3.12259 -0.0504436 3.9402 0.00448505 4.90657L1.62346 4.81456ZM17.5373 17.8527C17.2403 18.1482 16.9218 18.3146 16.6016 18.3444L16.7521 19.959C17.5462 19.8849 18.1969 19.4837 18.6807 19.0027L17.5373 17.8527ZM8.38508 7.00497C9.44939 5.9467 9.52852 4.27279 8.63189 3.07509L7.33375 4.04691C7.76996 4.62958 7.7051 5.39437 7.24175 5.85508L8.38508 7.00497ZM18.6755 14.0942C19.5596 14.5749 19.6973 15.705 19.0731 16.3257L20.2164 17.4757C21.6654 16.0349 21.2186 13.631 19.45 12.6696L18.6755 14.0942ZM14.9565 13.1765C15.3717 12.7638 16.0399 12.6615 16.6101 12.9714L17.3846 11.5468C16.2132 10.91 14.7593 11.0858 13.8131 12.0266L14.9565 13.1765Z"
                          fill="#E9E9E9"/>
                </svg>
                <span className={ styles.phoneText }>8-909-994-49-61</span>
            </Link>

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
