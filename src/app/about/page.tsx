"use client"
import { useState } from "react"
import styles from "@/assets/css/About.module.css"
import Image, { StaticImageData } from "next/image"

import doctor from "@/assets/images/doctor.jpg"

import wellcare from "@/assets/images/wellcare-insurance.png"
import humana from "@/assets/images/humana-insurance.jpg"
import aetna from "@/assets/images/aetna-insurance.png"
import cigna from "@/assets/images/cigna-insurance.jpg"
import uhc from "@/assets/images/uhc-insurance.jpg"
import bcbs from "@/assets/images/bcbs-insurance.png"
import clover from "@/assets/images/clover-insurance.png"
import medicare from "@/assets/images/medicare-insurance.png"

import KneeBraces from "@/assets/images/knee-braces.jpg"
import BraceSleves from "@/assets/images/brace-sleves.jpg"
import CgmMonitors from "@/assets/images/cgm-monitors.jpg"
import Wheelchairs from "@/assets/images/wheelchairs.jpg"
import UvbLightWands from "@/assets/images/uvb-light-wands.jpg"
import HipBraces from "@/assets/images/hip-braces.jpg"
import TenseUnit from "@/assets/images/tense-unit.jpg"
import LymphedemaPumpMassagers from "@/assets/images/lymphedema-pump-massagers.jpg"
import shopping from "@/assets/images/shoppping-icon.png"

import caregiverService from "@/assets/images/caregiver-service-info.jpg"

interface Product {
    id: number,
    image: StaticImageData,
    title: string,
}

interface ServiceTabs {
    id: number,
    title: string,
    tagline: string,
    icon: JSX.Element,
    body: any
}

export default function About() {
    const [activeTabs, setActiveTabs] = useState('dme');

    const products: Product[] = [
        {
            id: 1,
            image: KneeBraces,
            title: "Knee Braces",
        },
        {
            id: 2,
            image: BraceSleves,
            title: "Brace Sleeves",

        },
        {
            id: 3,
            image: CgmMonitors,
            title: "CGM Monitors",
        },
        {
            id: 4,
            image: Wheelchairs,
            title: "Wheelchairs",

        },
        {
            id: 5,
            image: UvbLightWands,
            title: "UVB Light Wands",

        },
        {
            id: 6,
            image: HipBraces,
            title: "Hip Braces",

        },
        {
            id: 7,
            image: TenseUnit,
            title: "TENS Unit",
        },
        {
            id: 8,
            image: LymphedemaPumpMassagers,
            title: "Lymphedema Pump Massagers",
        }
    ];

    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <h1>Accompanying you through <span>Thick & Thin</span></h1>
                </div>
                <div className={styles.overlayContent}>
                    <div className={styles.item}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                            <path d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                                stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="32" />
                            <path
                                d="M288 304c-87 0-175.3 48-191.64 138.6-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304z"
                                stroke-miterlimit="10" stroke-width="32" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="32" d="M88 176v112M144 232H32" />
                        </svg>
                        <h3>Experience of 5+ years</h3>
                    </div>
                    <div className={styles.item}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                            <rect x="32" y="112" width="448" height="352" rx="48" ry="48"
                                stroke-linejoin="round" stroke-width="32" />
                            <path d="M144 112V80a32 32 0 0132-32h160a32 32 0 0132 32v32M256 208v160M336 288H176"
                                stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="32" />
                        </svg>
                        <h3>1100 Patients Cured</h3>
                    </div>
                    <div className={styles.item}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                            <path
                                d="M313.27 124.64L198.73 51.36a32 32 0 00-29.28.35L56.51 127.49A16 16 0 0048 141.63v295.8a16 16 0 0023.49 14.14l97.82-63.79a32 32 0 0129.5-.24l111.86 73a32 32 0 0029.27-.11l115.43-75.94a16 16 0 008.63-14.2V74.57a16 16 0 00-23.49-14.14l-98 63.86a32 32 0 01-29.24.35zM328 128v336M184 48v336"
                                stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="32" />
                        </svg>
                        <h3>Operating in Multiple States</h3>
                    </div>
                </div>
            </section>
            <section className={`${styles.missionVision} container`}>
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi et facere eius iure laudantium? Beatae possimus asperiores ullam dolorem accusamus itaque quaerat accusantium quia? Ducimus, quas. Similique nostrum cupiditate laboriosam, consequatur obcaecati aspernatur sunt tempora excepturi ab omnis quaerat praesentium amet debitis sit, enim minus fuga voluptate harum ipsa aut ducimus. Voluptatibus id dicta molestiae temporibus aperiam harum cum impedit?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi et facere eius iure laudantium? Beatae possimus asperiores ullam dolorem accusamus itaque quaerat accusantium quia? Ducimus, quas. Similique nostrum cupiditate laboriosam, consequatur obcaecati aspernatur sunt tempora excepturi ab omnis quaerat praesentium amet debitis sit, enim minus fuga voluptate harum ipsa aut ducimus. Voluptatibus id dicta molestiae temporibus aperiam harum cum impedit?</p>
                <div className={styles.stage}>
                    <div className={styles.item}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                            <path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                            <path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                        </svg>
                        <div className={styles.content}>
                            <h3>Mission</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minima nemo optio dolor soluta ipsam cupiditate expedita repellat necessitatibus quibusdam!</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                            <path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                            <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                        </svg>
                        <div className={styles.content}>
                            <h3>Vision</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minima nemo optio dolor soluta ipsam cupiditate expedita repellat necessitatibus quibusdam!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${styles.about} container`}>
                <div className={styles.content}>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit laborum illo iure iusto ullam dignissimos modi dolor consectetur aut ab eligendi atque earum autem harum illum sequi dolore, eaque nemo? Explicabo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit laborum illo iure iusto ullam dignissimos modi dolor consectetur aut ab eligendi atque earum autem harum illum sequi dolore, eaque nemo? Explicabo.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div className={styles.image}>
                    <div className={styles.shape}></div>
                    <Image src={doctor} alt="doctor-standing-near-window" />
                </div>
            </section>
            <section className={styles.howToBuy}>
                <Image src={shopping} alt="shopping-icon" />
                <div className={`${styles.content} container`}>
                    <h2>How to buy?</h2>
                    <div className={styles.stage}>
                        <div className={styles.item}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                <path d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M69 153.99l187 110 187-110M256 463.99v-200" />
                            </svg>
                            <div className={styles.content}>
                                <h3>Free Delivery</h3>
                                <p>Order over $120</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                <rect x="32" y="80" width="448" height="256" rx="16" ry="16" transform="rotate(180 256 208)" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 384h384M96 432h320" />
                                <circle cx="256" cy="208" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                                <path d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80M480 256a80 80 0 00-80 80M32 256a80 80 0 0180 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                            </svg>
                            <div className={styles.content}>
                                <h3>Get Refund</h3>
                                <p>Within 30 Days Return</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                <rect x="48" y="144" width="416" height="288" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" />
                                <path d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" />
                                <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
                            </svg>
                            <div className={styles.content}>
                                <h3>Safe Payment</h3>
                                <p>100% Secure Payments</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                <path d="M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                                <path d="M108.39 270.13l-13.69 8h0c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12h0l13.69-8a16.16 16.16 0 005.78-21.87L130 276a15.74 15.74 0 00-21.61-5.87zM403.61 270.13l13.69 8h0c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12h0l-13.69-8a16.16 16.16 0 01-5.78-21.87L382 276a15.74 15.74 0 0121.61-5.87z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                            </svg>
                            <div className={styles.content}>
                                <h3>Safe Payment</h3>
                                <p>100% Secure Payments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${styles.services} container`}>
                <h2>Services We Provide</h2>
                <div className={styles.stage}>
                    <div className={styles.tabs}>
                        <div className={`${styles.item} ${activeTabs == 'dme' ? styles.active : ''}`} onClick={() => setActiveTabs('dme')}>
                            <svg width="40" height="40" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.64844 2.75C2.64844 2.33579 2.98422 2 3.39844 2H4.89844C6.14108 2 7.14844 3.00736 7.14844 4.25V6.375H16.1484C17.3911 6.375 18.3984 7.38236 18.3984 8.625V17.378C18.9068 17.5577 19.3312 17.9148 19.5974 18.375H21.2734C21.6877 18.375 22.0234 18.7108 22.0234 19.125C22.0234 19.5392 21.6877 19.875 21.2734 19.875H19.8673C19.6888 20.9391 18.7633 21.75 17.6484 21.75C16.4058 21.75 15.3984 20.7426 15.3984 19.5C15.3984 18.5203 16.0245 17.6869 16.8984 17.378V13.1304H13.7791C14.1715 13.9428 14.3915 14.8541 14.3915 15.8169C14.3915 19.2322 11.6228 22.0009 8.20748 22.0009C4.79213 22.0009 2.02344 19.2322 2.02344 15.8169C2.02344 13.3142 3.51008 11.1588 5.64844 10.1855V4.25C5.64844 3.83579 5.31265 3.5 4.89844 3.5H3.39844C2.98422 3.5 2.64844 3.16421 2.64844 2.75ZM7.14844 9.72314C7.49255 9.66376 7.8464 9.63281 8.20748 9.63281C10.008 9.63281 11.6288 10.4023 12.759 11.6304H16.8984V8.625C16.8984 8.21079 16.5627 7.875 16.1484 7.875H7.14844V9.72314ZM8.20748 11.1328C5.62056 11.1328 3.52344 13.2299 3.52344 15.8169C3.52344 18.4038 5.62056 20.5009 8.20748 20.5009C10.7944 20.5009 12.8915 18.4038 12.8915 15.8169C12.8915 13.2299 10.7944 11.1328 8.20748 11.1328ZM16.8984 19.5C16.8984 19.0858 17.2342 18.75 17.6484 18.75C18.0627 18.75 18.3984 19.0858 18.3984 19.5C18.3984 19.9142 18.0627 20.25 17.6484 20.25C17.2342 20.25 16.8984 19.9142 16.8984 19.5Z" />
                            </svg>
                            <h3>DME Equipment</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, natus?</p>
                        </div>
                        <div className={`${styles.item} ${activeTabs == 'healthcare' ? styles.active : ''}`} onClick={() => setActiveTabs('healthcare')}>
                            <svg width="40" height="40" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                                <path d="M12.0231 8.55941C11.6089 8.55941 11.2731 8.8952 11.2731 9.30941V11.9999H8.58266C8.16845 11.9999 7.83266 12.3357 7.83266 12.7499C7.83266 13.1641 8.16845 13.4999 8.58266 13.4999H11.2731V16.1909C11.2731 16.6051 11.6089 16.9409 12.0231 16.9409C12.4373 16.9409 12.7731 16.6051 12.7731 16.1909V13.4999H15.4641C15.8783 13.4999 16.2141 13.1641 16.2141 12.7499C16.2141 12.3357 15.8783 11.9999 15.4641 11.9999H12.7731V9.30941C12.7731 8.8952 12.4373 8.55941 12.0231 8.55941Z" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.77344 5.25C7.77344 4.00736 8.7808 3 10.0234 3H14.0234C15.2661 3 16.2734 4.00736 16.2734 5.25V6H19.2736C20.5163 6 21.5236 7.00736 21.5236 8.25V17.25C21.5236 18.4926 20.5163 19.5 19.2736 19.5H4.77344C3.5308 19.5 2.52344 18.4926 2.52344 17.25V8.25C2.52344 7.00736 3.5308 6 4.77344 6H7.77344V5.25ZM14.7734 5.25V6H9.27344V5.25C9.27344 4.83579 9.60922 4.5 10.0234 4.5H14.0234C14.4377 4.5 14.7734 4.83579 14.7734 5.25ZM4.77344 7.5H19.2736C19.6879 7.5 20.0236 7.83579 20.0236 8.25V17.25C20.0236 17.6642 19.6879 18 19.2736 18H4.77344C4.35922 18 4.02344 17.6642 4.02344 17.25V8.25C4.02344 7.83579 4.35922 7.5 4.77344 7.5Z" />
                            </svg>
                            <h3>Healthplans</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, natus?</p>
                        </div>
                        <div className={`${styles.item} ${activeTabs == 'caregiver' ? styles.active : ''}`} onClick={() => setActiveTabs('caregiver')}>
                            <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4423 4.05183C13.4423 3.02111 14.2779 2.18555 15.3086 2.18555C16.3393 2.18555 17.1749 3.02111 17.1749 4.05183C17.1749 5.08254 16.3393 5.91811 15.3086 5.91811C14.2779 5.91811 13.4423 5.08254 13.4423 4.05183ZM15.3086 3.68555C15.1063 3.68555 14.9423 3.84954 14.9423 4.05183C14.9423 4.25412 15.1063 4.41811 15.3086 4.41811C15.5109 4.41811 15.6749 4.25412 15.6749 4.05183C15.6749 3.84954 15.5109 3.68555 15.3086 3.68555Z" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6044 11.2659C21.0447 10.6311 20.0839 10.5508 19.4266 11.0839L16.8212 13.197C16.512 12.6632 15.9345 12.304 15.2732 12.304H12.6754C11.5119 11.8794 10.2262 11.8074 9.41278 11.8111C8.64057 11.8146 7.94114 12.1196 7.38764 12.5621L5.69546 13.9148C5.47206 13.789 5.18986 13.781 4.95173 13.9185L2.37513 15.4061C2.01641 15.6132 1.8935 16.0719 2.10061 16.4306L5.09928 21.6245C5.30638 21.9832 5.76508 22.1061 6.1238 21.899L8.7004 20.4114C9.01125 20.2319 9.14503 19.8635 9.04042 19.535L9.56527 19.0601C9.70317 18.9353 9.8825 18.8662 10.0685 18.8662H16.2417C16.8423 18.8662 17.4104 18.5933 17.7859 18.1245L21.6525 13.2959C22.1317 12.6974 22.1114 11.841 21.6044 11.2659ZM8.2864 18.1943L8.55886 17.9478C8.97255 17.5735 9.51056 17.3662 10.0685 17.3662H16.2417C16.3869 17.3662 16.5242 17.3002 16.615 17.1869L20.4816 12.3583C20.5053 12.3287 20.5043 12.2863 20.4792 12.2579C20.4515 12.2265 20.404 12.2225 20.3715 12.2489L16.5205 15.3723C16.1984 15.686 15.7583 15.8793 15.2732 15.8793H12.5383C12.1241 15.8793 11.7883 15.5435 11.7883 15.1293C11.7883 14.7151 12.1241 14.3793 12.5383 14.3793H15.2732C15.3195 14.3793 15.3633 14.3684 15.4021 14.3489C15.4102 14.3417 15.4184 14.3347 15.4269 14.3279L15.5 14.2686C15.5381 14.2198 15.5608 14.1584 15.5608 14.0917C15.5608 13.9328 15.432 13.804 15.2732 13.804H12.5912C12.4613 13.804 12.3365 13.7794 12.222 13.7358C11.296 13.3829 10.1887 13.3076 9.41955 13.3111C9.04628 13.3128 8.66549 13.4609 8.32425 13.7337L6.53627 15.163L8.2864 18.1943ZM6.02332 20.225L3.77464 16.3302L5.05221 15.5926L7.30088 19.4874L6.02332 20.225Z" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0944 6.27857C12.8582 6.27857 11.856 7.28072 11.856 8.51694V9.44718C11.856 9.86139 12.1918 10.1972 12.606 10.1972H18.0111C18.4253 10.1972 18.7611 9.86139 18.7611 9.44718V8.51694C18.7611 7.28072 17.7589 6.27857 16.5227 6.27857H14.0944ZM13.356 8.51694C13.356 8.10915 13.6866 7.77857 14.0944 7.77857H16.5227C16.9305 7.77857 17.2611 8.10915 17.2611 8.51694V8.69718H13.356V8.51694Z" />
                            </svg>
                            <h3>Caregivers</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, natus?</p>
                        </div>
                    </div>

                    {activeTabs === 'dme' && (
                        <div className={`${styles.info}`}>
                            {products.map(product => (
                                <div className={styles.item} key={product.id}>
                                    <Image src={product.image} alt={`${product.title} image`} />
                                    <h3>{product.title}</h3>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTabs === 'healthcare' && (
                        <div className={`${styles.info} ${styles.healthcareInfo}`}>
                            <div className={styles.stage}>
                                <div className={styles.item}>
                                    <Image src={wellcare} alt="wellcare-insurance-logo" />
                                </div>
                                <div className={styles.item}>
                                    <Image src={humana} alt="humana-insurance-logo" />
                                </div>
                                <div className={styles.item}>
                                    <Image src={aetna} alt="aetna-insurance-logo" />
                                </div>
                                <div className={styles.item}>
                                    <Image src={cigna} alt="cigna-insurance-logo" />
                                </div>
                                <div className={styles.item}>
                                    <Image src={uhc} alt="uhc-insurance-logo" />
                                </div>
                                <div className={styles.item}>
                                    <Image src={bcbs} alt="bcbs-insurance-logo" />
                                </div>
                                <div className={styles.item}>
                                    <Image src={clover} alt="clover-insurance-logo" />
                                </div>
                                <div className={styles.item}>
                                    <Image src={medicare} alt="medicare-insurance-logo" className={styles.molinaLogo} />
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTabs === 'caregiver' && (
                        <div className={`${styles.info} ${styles.activeInfo} ${styles.caregiverInfo}`}>
                            <div className={styles.content}>
                                <h3>Lorem Ipsum</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem impedit laboriosam fugiat asperiores earum, consectetur distinctio dignissimos sit molestiae veritatis odit odio dolorum. Explicabo magnam consequuntur saepe repudiandae molestiae nulla cupiditate quas temporibus dignissimos quibusdam consectetur doloremque laborum, praesentium debitis alias placeat enim nesciunt sed illum optio quae, commodi unde harum. Ipsa architecto deserunt quam quo, tempora doloremque incidunt? Esse, totam? Reiciendis esse odit corporis. Rem, saepe nam. Officia obcaecati modi ipsa sequi deleniti quae a, tempore tempora debitis repellendus?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem impedit laboriosam fugiat asperiores earum, consectetur distinctio dignissimos sit molestiae veritatis odit odio dolorum. Explicabo magnam consequuntur saepe repudiandae molestiae nulla cupiditate quas temporibus dignissimos quibusdam consectetur doloremque laborum, praesentium debitis alias placeat enim nesciunt sed illum optio quae, commodi unde harum. Ipsa architecto deserunt quam quo, tempora doloremque incidunt? Esse, totam? Reiciendis esse odit corporis. Rem, saepe nam. Officia obcaecati modi ipsa sequi deleniti quae a, tempore tempora debitis repellendus?</p>
                                <button className="primary">Get In Touch</button>
                            </div>
                            <div className={styles.image}>
                                <Image src={caregiverService} alt="" />
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <section className={styles.cta}>
                <div className={styles.overlay}></div>
                <div className={`${styles.container} container`}>
                    <div className={styles.content}>
                        <h2>Need Help?</h2>
                        <p>Get in touch now and get free consultation</p>
                    </div>
                    <button className="primary">+1 (404) 442-2019</button>
                </div>
            </section>
        </main >
    )
}