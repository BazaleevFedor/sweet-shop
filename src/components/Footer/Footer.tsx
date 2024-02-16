'use client'

import styles from './styles.module.scss'
import {configuration} from "@/configuration";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={ styles.main }>

            <div className={ styles.contacts }>
                { configuration.contacts.map((item) => {
                    return (
                        <Link href={ item.link } target="_blank">
                            <label className={ styles.contacts__item }>
                                <Image src={ item.img } alt={ item.title } width={23} height={20}/>
                                <span>{ item.title }</span>
                            </label>
                        </Link>
                    );
                }) }
            </div>

            <svg className={ styles.line } width="100%" height="5" viewBox="0 0 100% 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter1_f_295_1354)">
                    <line x1="0%" y1="2" x2="calc(100% - 300px)" y2="2" stroke="#C7C7C7" stroke-width="2"/>
                    <line x1="calc(100% - 206px)" y1="2" x2="100%" y2="2" stroke="#C7C7C7" stroke-width="2"/>
                </g>
                <defs>
                    <filter id="filter0_f_295_1354" x="0" y="0" width="100%" height="4.71996"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_295_1354"/>
                    </filter>
                </defs>
            </svg>

            <svg className={ styles.catLine } width="202" height="153" viewBox="0 0 202 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_294_1350)">
                    <path d="M19.0701 110.54L21.5696 102.54C22.9217 96.5628 23.6774 93.0093 24.0697 85.04L24.5696 67.04L25.0605 57.2229C25.0665 57.102 25.0939 56.9814 25.1468 56.8725C26.205 54.6968 28.1086 55.5362 32.1417 58.1564C35.738 60.8599 37.4778 62.845 39.6421 65.6564C42.6494 69.3543 45.0575 75.2424 47.7512 84.8877C47.9186 85.4871 48.589 85.7932 49.1534 85.531C57.4704 81.6673 60.5596 81.2861 62.3122 85.3808C62.4785 85.7693 62.8517 86.04 63.2742 86.04L84.4967 86.04C84.5453 86.04 84.5941 86.0365 84.6421 86.0291C91.112 85.0353 95.5375 78.3625 100.036 66.6299C100.059 66.5708 100.076 66.5085 100.087 66.4462C100.829 62.2932 101.67 58.7861 103.498 52.7743C103.545 52.6215 103.63 52.4781 103.742 52.3644C106.825 49.2419 107.666 49.5091 109.57 52.54C113.11 58.8623 114.846 62.9678 116.57 70.54C117.971 76.6939 117.887 86.4277 117.699 89.8235C117.664 90.4563 117.507 91.6313 117.441 92.2616L115.57 110.04"
                          stroke="#C7C7C7" stroke-width="2"/>
                </g>
                <g filter="url(#filter1_f_294_1350)">
                    <path d="M150.807 96.8942C151.82 89.2687 151.868 84.5892 151.07 75.5402C150.205 70.1812 149.093 66.8933 146.07 60.5402C143.462 54.6923 142.412 51.4088 141.07 45.5402C139.05 33.3254 139.657 27.6357 143.07 19.0402C147.297 10.397 150.114 7.81126 155.385 5.13384C155.507 5.07179 155.639 5.02164 155.772 4.98699C160.554 3.73673 162.811 4.08652 165.256 7.13446C165.466 7.3965 165.599 7.71435 165.635 8.04831C165.894 10.4268 165.332 11.6001 163.07 13.0402C156.068 17.6658 154.024 20.4251 152.122 25.405C152.088 25.4942 152.06 25.5878 152.039 25.6811C151.015 30.3363 150.837 33.7097 151.57 41.5402C153.12 49.1612 154.571 53.7782 158.07 62.5402C161.621 75.2299 161.983 78.9572 161.807 83.8942"
                          stroke="#C7C7C7" stroke-width="2"/>
                </g>
                <g filter="url(#filter2_f_294_1350)">
                    <ellipse cx="46.5704" cy="105.54" rx="3" ry="3" fill="#C7C7C7"/>
                </g>
                <g filter="url(#filter3_f_294_1350)">
                    <ellipse cx="93.5704" cy="106.54" rx="3" ry="3" fill="#C7C7C7"/>
                </g>
                <defs>
                    <filter id="filter0_f_294_1350" x="17.1156" y="48.1416" width="102.687" height="63.6965"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_294_1350"/>
                    </filter>
                    <filter id="filter1_f_294_1350" x="137.915" y="2.3095" width="29.7782" height="95.7165"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_294_1350"/>
                    </filter>
                    <filter id="filter2_f_294_1350" x="42.5704" y="101.54" width="8" height="8" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_294_1350"/>
                    </filter>
                    <filter id="filter3_f_294_1350" x="89.5704" y="102.54" width="8" height="8" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_294_1350"/>
                    </filter>
                </defs>
            </svg>

        </div>
    );
}
