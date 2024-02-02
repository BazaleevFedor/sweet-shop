import {FunctionComponent} from "react";
import Link from "next/link";
import styles from './styles.module.css'

interface NavbarItemProps {
    isActive: boolean,
    text: string,
    href: string,
}

export const NavbarItem: FunctionComponent<NavbarItemProps> = ({
    isActive,
    text,
    href,
}) => {
    return (
        <Link className={styles.main} href={ href }>{ text }</Link>
    );
}
