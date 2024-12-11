"use client"

import Image from "next/image"
import Reviews from "@/components/Reviews"

import styles from "@/assets/css/Caregivers.module.css"

import cta from "@/assets/images/caregivers-cta.jpg"
import hero from "@/assets/images/caregivers-hero.png"
import whyGetCaregiver from "@/assets/images/whyGetCaregiver.png"
import whyChooseUs from "@/assets/images/whychooseus.png"

export default function caregivers() {
    return (
        <main>
            <section className={styles.hero}>
                <Image src={hero} alt="dme-equipment-hero" />
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <span>Services</span>
                    <h1>Caregivers</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam adipisci laborum dicta nihil tempore, cum, unde quia numquam quam omnis doloremque nulla. Et velit ipsa repellendus eos impedit, dicta vero minima voluptates optio quis maiores. Delectus eligendi laudantium suscipit itaque.</p>
                </div>
            </section>
            <section className={`${styles.whyGetDmeServies} container`}>
                <div className={styles.content}>
                    <h2><hr />Why Get A Caregiver?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit repudiandae molestias nihil quaerat aliquid iure tenetur ipsam, earum facilis autem odit maiores possimus nesciunt culpa in soluta dolore molestiae quibusdam asperiores ut corporis. Eos, fugiat laboriosam! Blanditiis, iure obcaecati.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit repudiandae molestias nihil quaerat aliquid iure tenetur ipsam, earum facilis autem odit maiores possimus nesciunt culpa in soluta dolore molestiae quibusdam asperiores ut corporis. Eos, fugiat laboriosam! Blanditiis, iure obcaecati.</p>
                    <div className={styles.stage}>
                        <div className={styles.item}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v160M336 256H176" />
                            </svg>
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus voluptatem deserunt provident adipisci magni similique expedita perferendis ullam doloremque.</p>
                        </div>
                        <div className={styles.item}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v160M336 256H176" />
                            </svg>
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus voluptatem deserunt provident adipisci magni similique expedita perferendis ullam doloremque.</p>
                        </div>
                        <div className={styles.item}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v160M336 256H176" />
                            </svg>
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est necessitatibus voluptatem deserunt provident adipisci magni similique expedita perferendis ullam doloremque.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <Image src={whyGetCaregiver} alt="" />
                </div>
            </section>
            <section className={styles.chossingSquadMedSupplies}>
                <h2>Choosing Squad Medical Supplies</h2>
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
            </section>
            <section className={`${styles.someKeyBenefits} container`}>
                <div className={styles.image}>
                    <Image src={whyChooseUs} alt="why-choose-us" />
                </div>
                <div className={styles.content}>
                    <h2><hr />Some Key Benefits</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi dolore qui eligendi asperiores doloribus necessitatibus porro perferendis dolor ipsum itaque sapiente eum ea placeat est, veritatis ex provident animi. Similique accusantium perferendis necessitatibus vel nobis vitae. Eos, delectus eaque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi dolore qui eligendi asperiores doloribus necessitatibus porro perferendis dolor ipsum itaque sapiente eum ea placeat est, veritatis ex provident animi. Similique accusantium perferendis necessitatibus vel nobis vitae. Eos, delectus eaque.</p>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke-miterlimit="10" stroke-width="32" />
                                <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 192L256.13 320l-47.95-48M191.95 320L144 272M305.71 192l-51.55 59" />
                            </svg>
                            Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke-miterlimit="10" stroke-width="32" />
                                <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 192L256.13 320l-47.95-48M191.95 320L144 272M305.71 192l-51.55 59" />
                            </svg>
                            Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke-miterlimit="10" stroke-width="32" />
                                <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 192L256.13 320l-47.95-48M191.95 320L144 272M305.71 192l-51.55 59" />
                            </svg>
                            Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke-miterlimit="10" stroke-width="32" />
                                <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 192L256.13 320l-47.95-48M191.95 320L144 272M305.71 192l-51.55 59" />
                            </svg>
                            Lorem ipsum dolor sit amet.
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.cta}>
                <Image src={cta} alt="caregivers-cta-image" />
                <div className={styles.overlay}></div>
                <span>Stay Healthy. Find a Caregiver</span>
                <h2>Lorem Ipsum Dior</h2>
                <button>Find A Caregiver</button>
            </section>
            <Reviews />
            <section className={`${styles.someOtherServices} container`}>
                <div className={styles.content}>
                    <h2><hr />Some of Our Other Services</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis facilis dignissimos repudiandae consequuntur non, quod eos. Ipsam sunt beatae modi nemo, voluptates dolores impedit adipisci culpa distinctio qui veritatis deserunt doloremque, hic itaque quos quisquam. Quisquam harum ratione nihil, dolor dolores ex ducimus laboriosam doloribus cum repellendus pariatur error eveniet!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis facilis dignissimos repudiandae consequuntur non, quod eos. Ipsam sunt beatae modi nemo, voluptates dolores impedit adipisci culpa distinctio qui veritatis deserunt doloremque, hic itaque quos quisquam. Quisquam harum ratione nihil, dolor dolores ex ducimus laboriosam doloribus cum repellendus pariatur error eveniet!</p>
                </div>
                <div className={styles.services}>
                    <div className={styles.item}>
                        {/* <Image/> */}
                        <div className={styles.overlay}></div>
                        <div className={styles.content}>
                            <h3>DME Equipments</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, id molestiae. Eligendi nulla magnam quaerat laborum doloribus quasi dicta vero!</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        {/* <Image/> */}
                        <div className={styles.overlay}></div>
                        <div className={styles.content}>
                            <h3>Healthplans</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, id molestiae. Eligendi nulla magnam quaerat laborum doloribus quasi dicta vero!</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}