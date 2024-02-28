'use client'

import styles from "@/components/ThemeToggle/styles.module.scss";
import {configuration} from "@/configuration";
import {useEffect, useState} from "react";
import classnames from "classnames";

const getTheme = () => {
    if (typeof localStorage !== 'undefined') {
        const theme = `${localStorage?.getItem('theme')}`;
        for (let i = 0; i < configuration.themes.length; i++) {
            if (theme === configuration.themes[i].name) return configuration.themes[i];
        }
    }

    if (typeof window !== 'undefined') {
        const userMedia = window.matchMedia('(prefers-color-scheme: light)')
        if (userMedia.matches) return configuration.themes[1];  // light
    }

    return configuration.themes[0];  // dark
}

const getNextTheme = (curTheme: string) => {
    for (let i = 0; i < configuration.themes.length; i++) {
        if (curTheme === configuration.themes[i].name && i + 1 < configuration.themes.length) return configuration.themes[i + 1];
    }

    return configuration.themes[0];
}

export default function ThemeToggle() {
    const [ theme, setTheme ] = useState(getTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme.name;

        localStorage.setItem('theme', theme.name);
    }, [ theme ]);

    return (
        <button className={styles.themeButton} data-tag='blur' onClick={ () => setTheme(getNextTheme(theme.name)) } title={ getNextTheme(theme.name).title }>
            <svg className={classnames(styles.themeImg, 'svgThemeLine')} width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.9034 2.08099C36.3387 6.3741 40.2959 14.8585 38.8067 23.3141C37.3165 31.7738 30.6928 38.3975 22.2331 39.8877C13.7775 41.3769 5.29311 37.4197 1 29.9844"
                      stroke="#E7E7E7" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M29.2015 2.38022C33.8233 10.3866 32.4919 20.499 25.9552 27.0363C19.418 33.5729 9.30562 34.9043 1.29919 30.2825"
                      stroke="#E7E7E7" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.88782 3.76041V8.17707" stroke="#E7E7E7" strokeWidth="1.33333" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M2.67944 5.96875H7.09611" stroke="#E7E7E7" strokeWidth="1.33333" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M7.09607 14.8021V18.1146" stroke="#E7E7E7" strokeWidth="1.33333" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M5.43982 16.4583H8.75232" stroke="#E7E7E7" strokeWidth="1.33333" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M27.5232 10.3854V13.6979" stroke="#E7E7E7" strokeWidth="1.33333" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M25.8669 12.0417H29.1794" stroke="#E7E7E7" strokeWidth="1.33333" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M36.3566 1V4.3125" stroke="#E7E7E7" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M34.7003 2.65625H38.0128" stroke="#E7E7E7" strokeWidth="1.33333" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M2.12732 40.1979H5.43982" stroke="#E7E7E7" strokeWidth="1.33333" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M3.78357 38.5417V41.8542" stroke="#E7E7E7" strokeWidth="1.33333" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M37.4607 34.6771H40.7732" stroke="#E7E7E7" strokeWidth="1.33333" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M39.1169 33.0208L39.139 36.3333" stroke="#E7E7E7" strokeWidth="1.33333" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M7.69015 32.1501L7.89679 31.1172C7.98677 30.3523 8.03425 29.8982 7.97794 28.897L7.8025 26.6408L7.74295 25.5672C7.73625 25.4463 7.73216 25.3062 7.82569 25.2294C7.96068 25.1184 8.20551 25.2137 8.63143 25.4304C9.11663 25.7208 9.36031 25.9459 9.66797 26.2686C9.96106 26.5601 10.2323 26.9857 10.5248 27.606C10.7902 28.1689 11.4542 28.3407 12.05 28.1609C12.1332 28.1358 12.2081 28.1217 12.2761 28.1187C12.6983 28.1003 13.0833 28.4835 13.5035 28.439L15.4799 28.23C15.5282 28.2249 15.5763 28.2169 15.6226 28.2023C16.3671 27.9679 16.8157 27.1102 17.2072 25.6725C17.2238 25.6115 17.2341 25.5486 17.239 25.4855C17.2733 25.04 17.3256 24.6368 17.4391 24.0233C17.4681 23.8663 17.5318 23.7149 17.6414 23.5989C17.8831 23.3429 17.997 23.4035 18.2341 23.7051C18.7602 24.4484 19.0314 24.9386 19.3469 25.8622C19.4759 26.2397 19.5699 26.7354 19.6342 27.1891C19.7232 27.8167 19.7432 29.0055 19.7435 29.6394L19.7441 30.8121"
                      stroke="#E7E7E7"/>
                <ellipse cx="11.0611" cy="31.1617" rx="0.37703" ry="0.37703" transform="rotate(-6.03719 11.0611 31.1617)"
                         fill="#E7E7E7"/>
                <ellipse cx="16.9484" cy="30.6655" rx="0.37703" ry="0.37703" transform="rotate(-6.03719 16.9484 30.6655)"
                         fill="#E7E7E7"/>
            </svg>
        </button>
    );
}
