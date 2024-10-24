import styles from "@/assets/css/Products.module.css"
import Image from "next/image"

import ProductSlider from "@/components/ProductSlider";

import "swiper/css";
import "swiper/css/navigation";

import HeroImage from "@/assets/images/doctor-group.png"
import quotes from "@/assets/images/quotes.png"

export default function Products() {
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.content}>
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati impedit dignissimos sit! Eaque tempore ducimus accusantium, reprehenderit tenetur sint voluptas.</p>
                </div>
                <Image src={HeroImage} alt="group of doctors" />
            </section>
            <form action="" className={styles.searchForm}>
                <input type="search" name="productSearch" id="productSearch" />
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                        <path d="M256 80a176 176 0 10176 176A176 176 0 00256 80z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                        <path d="M232 160a72 72 0 1072 72 72 72 0 00-72-72z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M283.64 283.64L336 336" />
                    </svg>
                </button>
            </form>
            <section className={styles.promotion}>
                <div className={styles.item}>
                    <div className={styles.overlay}></div>
                    <div className={styles.content}>
                        <span>Pump</span>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, nemo!</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.overlay}></div>
                    <div className={styles.content}>
                        <span>Braces</span>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, nemo!</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.overlay}></div>
                    <div className={styles.content}>
                        <span>Mobility</span>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, nemo!</p>
                    </div>
                </div>
            </section>
            <ProductSlider heading="Trending Products" />
            <section className={styles.info}>
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
            </section>
            <section className={styles.products}>
                <div className={styles.stage}>
                    <div className={styles.item}>
                        <Image src="https://placehold.co/170" alt="" width="170" height="170" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>mobility</span><span>mobility</span>
                    </div>
                    <div className={styles.item}>
                        <Image src="https://placehold.co/170" alt="" width="170" height="170" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>mobility</span><span>mobility</span>
                    </div>
                    <div className={styles.item}>
                        <Image src="https://placehold.co/170" alt="" width="170" height="170" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>mobility</span><span>mobility</span>
                    </div>
                    <div className={styles.item}>
                        <Image src="https://placehold.co/170" alt="" width="170" height="170" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>mobility</span><span>mobility</span>
                    </div>
                    <div className={styles.item}>
                        <Image src="https://placehold.co/170" alt="" width="170" height="170" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>mobility</span><span>mobility</span>
                    </div>
                    <div className={styles.item}>
                        <Image src="https://placehold.co/170" alt="" width="170" height="170" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>mobility</span><span>mobility</span>
                    </div>
                    <div className={styles.item}>
                        <Image src="https://placehold.co/170" alt="" width="170" height="170" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>mobility</span><span>mobility</span>
                    </div>
                    <div className={styles.item}>
                        <Image src="https://placehold.co/170" alt="" width="170" height="170" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>mobility</span><span>mobility</span>
                    </div>
                    <div className={styles.item}>
                        <Image src="https://placehold.co/170" alt="" width="170" height="170" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>mobility</span><span>mobility</span>
                    </div>
                    <div className={styles.item}>
                        <Image src="https://placehold.co/170" alt="" width="170" height="170" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>mobility</span><span>mobility</span>
                    </div>
                    <div className={styles.item}>
                        <Image src="https://placehold.co/170" alt="" width="170" height="170" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>mobility</span><span>mobility</span>
                    </div>
                    <div className={styles.item}>
                        <Image src="https://placehold.co/170" alt="" width="170" height="170" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>mobility</span><span>mobility</span>
                    </div>
                </div>
                <div className={styles.filters}>
                    <form action="" method="GET">
                        <h2>Search:</h2>
                        <div className={styles.search}>
                            <input type="search" name="fitlerSearch" id="filterSearch" />
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                    <path d="M256 80a176 176 0 10176 176A176 176 0 00256 80z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                                    <path d="M232 160a72 72 0 1072 72 72 72 0 00-72-72z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M283.64 283.64L336 336" />
                                </svg>
                            </button>
                        </div>
                        <h2>Tags:</h2>
                        <div className={styles.tags}>
                            <button>mobility</button>
                            <button>mobility</button>
                            <button>mobility</button>
                            <button>mobility</button>
                            <button>mobility</button>
                        </div>
                    </form>
                </div>
            </section>
            <section className={styles.latestReviews}>
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
        </main>
    )
}