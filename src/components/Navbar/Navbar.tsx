import styles from './styles.module.scss'
import { configuration } from "@/configuration";
import {usePathname} from "next/navigation";
import Link from "next/link";
import classnames from "classnames";

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className={ styles.navbarContainer }>
            <div className={ classnames(styles.navbar) }>
                { configuration.navbarTitles.map((title, index) => (
                    <Link key={index} className={ `${pathname === title.href ? styles.active : ''}` } href={ title.href }>{ title.text }</Link>
                )) }
            </div>

            <div className={ classnames(styles.navbarMobil) } id='navbarMobil'>
                { configuration.navbarTitles.map((title, index) => (
                    <Link key={index} className={ `${pathname === title.href ? styles.active : ''}` } href={ title.href }>{ title.text }</Link>
                )) }
            </div>

            <button className={ styles.menu } onClick={ () => document.getElementById('navbarMobil')?.classList.toggle(styles.active) }>
                <svg className={ classnames('svgThemeLine') } width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2H27" stroke="#131313" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M2 12H27" stroke="#131313" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M2 22H27" stroke="#131313" strokeWidth="4" strokeLinecap="round"/>
                </svg>
            </button>
        </div>
    );
}
