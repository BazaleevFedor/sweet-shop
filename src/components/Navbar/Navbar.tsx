import styles from './styles.module.scss'
import { configuration } from "@/configuration";
import {usePathname} from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className={ styles.navbarContainer }>
            <div className={ styles.navbar }>
                { configuration.navbarTitles.map((title, index) => (
                    <Link key={index} className={ `${styles.navbar} ${pathname === title.href ? styles.active : ''}` } href={ title.href }>{ title.text }</Link>
                )) }
            </div>

            <div className={ styles.menu }>
                <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2H27" stroke="#131313" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M2 12H27" stroke="#131313" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M2 22H27" stroke="#131313" strokeWidth="4" strokeLinecap="round"/>
                </svg>
            </div>
        </div>
    );
}
