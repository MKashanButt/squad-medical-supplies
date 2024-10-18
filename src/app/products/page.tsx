import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styles from "@/assets/css/Products.module.css"

import HeroBg from "@/assets/images/hero-bg.jpg"
import Image from "next/image";

export default function Product() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className={styles.stage}>
                    <div className={styles.content}>
                        <h2>Welcome to Health Med</h2>
                        <p>Where your health and comfort are our top priorities. Since our
                            founding in 2020, we've had the privilege of serving over 1,000 patients, offering a wide range
                            of
                            durable medical equipment designed to improve your quality of life.</p>
                        <button>Contact Us</button>
                    </div>
                    <form action="/form.php" method="post" id="contactUs">
                        <h2>Get your desired Medical equipment at little or no cost</h2>
                        <p>Enter your information below in this quick profile to check your eligibility.</p>
                        <div className={styles.stage}>
                            <div className={styles.field}>
                                <label htmlFor="fname">First Name:</label>
                                <input type="text" name="fname" id="fname" />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="lname">Last Name:</label>
                                <input type="text" name="lname" id="lname" />
                            </div>
                        </div>
                        <div className={styles.stage}>
                            <div className={styles.field} style={{ alignItems: "baseline" }}>
                                <label htmlFor="name">Gender:</label>
                                <select name="gender" id="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className={styles.field} style={{ alignItems: "baseline" }}>
                                <label htmlFor="saddress">Street Address:</label>
                                <textarea name="saddress" id="saddress"></textarea>
                            </div>
                        </div>
                        <div className={styles.stage}>
                            <div className={styles.field}>
                                <label htmlFor="city">City:</label>
                                <input type="text" name="city" id="city" />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="state">State:</label>
                                <input type="text" name="state" id="state" />
                            </div>
                        </div>
                        <div className={styles.stage}>
                            <div className={styles.field}>
                                <label htmlFor="zip">Zip:</label>
                                <input type="text" name="zip" id="zip" />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="number">Phone no:</label>
                                <input type="text" name="number" id="number" />
                            </div>
                        </div>
                        <div className={styles.stage}>
                            <div className={styles.field}>
                                <label htmlFor="dob">Date Of Birth:</label>
                                <input type="date" name="dob" id="dob" />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="bestTimeToContact">Best Time To Contact:</label>
                                <input type="text" name="bestTimeToContact" id="bestTimeToContact" />
                            </div>
                        </div>
                        <div className={styles.field} style={{ alignItems: "baseline" }}>
                            <input type="checkbox" name="consent" id="consent" />
                            <p>
                                By tapping the "Submit" button, I expressly endorse healthmed and Backpain Discount
                                Club,Pain
                                Center to call me or send me recorded messages or messages about their Solid wellbeing,
                                Diabetic
                                Supplies, or other Clinical things using electronic advancement to my telephone/cell number
                                I
                                entered already. I understand that I am not supposed to give my consent as a condition of
                                any
                                purchase.
                            </p>
                        </div>
                        <button name="submit">See If I Qualify</button>
                    </form>
                </div>
                <Image src={HeroBg} alt="" />
                <div className={styles.overlay}></div>
            </section >
            <Footer />
        </main>
    )
}