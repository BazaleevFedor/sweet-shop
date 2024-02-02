'use client'

import styles from './styles.module.css'
import {useState} from "react";
import {NavbarItem} from "@/components/NavbarItem/NavbarItem";

export const Navbar = () => {
    const [state, setState] = useState(0);

    const navbarTitle = [
        {text: 'Главная', href: '/'},
        {text: 'Дизайн', href: '#'},
        {text: 'Начинки', href: '#'},
        {text: 'Контакты', href: '#'},
        {text: 'Корзина', href: '/cart'},
    ];

    return (
        <div className={styles.main}>
            {navbarTitle.map((title, index) => (
                <NavbarItem key={index} isActive={false} text={title.text} href={title.href}></NavbarItem>
            ))}
        </div>
    );
}
