import styles from "@/assets/css/About.module.css"
import Image from "next/image"

import doctor from "@/assets/images/doctor.jpg"
import ProductSlider from "@/components/ProductSlider"

import wellcare from "@/assets/images/wellcare-insurance.png"
import humana from "@/assets/images/humana-insurance.jpg"
import aetna from "@/assets/images/aetna-insurance.png"
import cigna from "@/assets/images/cigna-insurance.jpg"
import uhc from "@/assets/images/uhc-insurance.jpg"

import KneeBraces from "@/assets/images/knee-braces.jpg"
import LymphedemaPumpMassagers from "@/assets/images/lymphedema-pump-massagers.jpg"
import CgmMonitors from "@/assets/images/cgm-monitors.jpg"
import Wheelchairs from "@/assets/images/wheelchairs.jpg"
import HipBraces from "@/assets/images/hip-braces.jpg"

interface Product {
    id: number,
    image: any,
    title: string,
    description: string,
    link: string
}

export default function About() {
    const data: Product[] = [
        {
            id: 1,
            image: Wheelchairs,
            title: "Wheelchairs",
            description: "Discover our range of comfortable and durable wheelchairs, designed for ease of use and enhanced mobility. Choose the perfect model to fit your lifestyle and needs.",
            link: "#contactUs"
        },
        {
            id: 2,
            image: CgmMonitors,
            title: "CGM Monitors",
            description: "Stay on top of your health with our continuous glucose monitors, providing real-time blood sugar data for optimal diabetes management. Easy to use and highly accurate.",
            link: "#contactUs"
        },
        {
            id: 3,
            image: KneeBraces,
            title: "Knee Braces",
            description: "Support and stabilize your joints with our high-quality braces, designed for maximum comfort and effectiveness. Ideal for injury recovery and daily use.",
            link: "#contactUs"
        },
        {
            id: 4,
            image: HipBraces,
            title: "Hip Braces",
            description: "Support and stabilize your joints with our high-quality braces, designed for maximum comfort and effectiveness. Ideal for injury recovery and daily use.",
            link: "#contactUs"
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
                        <h3>Operating in 2 states</h3>
                    </div>
                </div>
            </section>
            <section className={styles.missionVision}>
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
            <ProductSlider heading="Some of Our Products" data={data} />
            <section className={styles.about}>
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
            <section className={styles.insurances}>
                <h2>Insurance We Provide</h2>
                <p>Know if you are covered by our ever growing list of Health Plans</p>
                <div className={styles.stage}>
                    <Image src={wellcare} alt="wellcare-insurance-logo" />
                    <Image src={humana} alt="humana-insurance-logo" />
                    <Image src={aetna} alt="aetna-insurance-logo" />
                    <Image src={cigna} alt="cigna-insurance-logo" />
                    <Image src={uhc} alt="uhc-insurance-logo" />
                </div>
            </section>
        </main >
    )
}