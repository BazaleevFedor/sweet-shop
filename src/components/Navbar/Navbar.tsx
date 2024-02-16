import styles from './styles.module.scss'
import { configuration } from "@/configuration";
import {usePathname} from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
    const pathname = usePathname()

    return (
        <div className={ styles.main }>
            { configuration.navbarTitles.map((title, index) => (
                <Link key={index} className={ `${styles.main} ${pathname === title.href ? styles.active : ''}` } href={ title.href }>{ title.text }</Link>
            )) }
        </div>
    );
}
