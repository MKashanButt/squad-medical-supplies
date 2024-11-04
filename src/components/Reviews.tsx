import Image from "next/image"

import quotes from "@/assets/images/quotes.png"
import styles from "@/assets/css/components/Reviews.module.css"

export default function Reviews() {
    return (
        <section className={styles.reviews}>
            <h2>Latest Reviews</h2>
            <div className={styles.stage}>
                <div className={styles.item}>
                    <Image src={quotes} alt="quote-icon" className={styles.icon} />
                    <Image src="https://placehold.co/50" alt="review-avatar" width="50" height="50" className={styles.avatar} />
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam delectus eveniet architecto voluptatibus explicabo consectetur, quia sed quaerat! Doloribus.</p>
                    <hr />
                    <span>Lorem</span>
                </div>
                <div className={styles.item}>
                    <Image src={quotes} alt="quote-icon" className={styles.icon} />
                    <Image src="https://placehold.co/50" alt="review-avatar" width="50" height="50" className={styles.avatar} />
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam delectus eveniet architecto voluptatibus explicabo consectetur, quia sed quaerat! Doloribus.</p>
                    <hr />
                    <span>Lorem</span>
                </div>
                <div className={styles.item}>
                    <Image src={quotes} alt="quote-icon" className={styles.icon} />
                    <Image src="https://placehold.co/50" alt="review-avatar" width="50" height="50" className={styles.avatar} />
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam delectus eveniet architecto voluptatibus explicabo consectetur, quia sed quaerat! Doloribus.</p>
                    <hr />
                    <span>Lorem</span>
                </div>
            </div>
        </section>
    )
}