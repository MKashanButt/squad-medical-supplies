import styles from "@/assets/css/About.module.css"
import Image from "next/image"

import doctor from "@/assets/images/doctor.jpg"
import ProductSlider from "@/components/ProductSlider"

import aetnaIsurance from "@/assets/images/aetna-insurance.png"
import humanaIsurance from "@/assets/images/humana-insurance.jpg"
import molinaIsurance from "@/assets/images/molina-insurance.png"
import wellcareIsurance from "@/assets/images/wellcare-insurance.png"

export default function About() {
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium iste sed deleniti dolorum ea recusandae natus, sequi rem.</p>
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
            <ProductSlider heading="Some of Our Products" />
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
                <h2>Insurances We Accept</h2>
                <p>Know if you are covered by our ever growing list of Health Plans</p>
                <div className={styles.stage}>
                    <Image src={aetnaIsurance} alt="aetna-insurance" />
                    <Image src={humanaIsurance} alt="humana-insurance" />
                    <Image src={molinaIsurance} alt="molina-insurance" />
                    <Image src={wellcareIsurance} alt="wellcare-insurance" />
                </div>
            </section>
        </main>
    )
}