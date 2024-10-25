import styles from "@/assets/css/About.module.css"
import Image from "next/image"

import doctor from "@/assets/images/doctor.jpg"

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
        </main>
    )
}