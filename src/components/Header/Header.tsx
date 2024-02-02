'use client'

import styles from './styles.module.css'
import Image from "next/image";
import {Navbar} from "@/components/Navbar/Navbar";

export default function Header() {
    return (
        <div className={styles.main}>
            <Navbar></Navbar>
            <Image src='img/header_line.svg' alt={'123'} width={100} height={3} layout='responsive'/>
        </div>
    );
}
