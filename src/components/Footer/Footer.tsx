import styles from './styles.module.css'
import Image from "next/image";

export default function Footer() {
    return (
        <div className={styles.main}>
            <Image className={styles.line} src='img/footer_line.svg' alt={'123'} width={100} height={3} layout='responsive'/>
            <div></div>
        </div>
    );
}
