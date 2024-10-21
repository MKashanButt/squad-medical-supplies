import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styles from "@/assets/css/Products.module.css"

import HeroBg from "@/assets/images/product-hero.jpg"
import Image from "next/image";

export default function Product() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className={styles.content}>
                    <h2>Take a look at our listing</h2>
                    <p>Where your health and comfort are our top priorities. Since our
                        founding in 2020, we've had the privilege of serving over 1,000 patients, offering a wide range
                        of
                        durable medical equipment designed to improve your quality of life.</p>
                    <a href="#listing">
                        <button>View Listing</button>
                    </a>
                </div>
            </section >
            <section id="listing" className={styles.listing}>
                <form action="">
                    <h3>Filters</h3>
                    <div className={styles.filters}>
                        <div className={styles.item}>
                            <label htmlFor="">Filter</label>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="">Filter</label>
                            <input type="checkbox" name="" id="" />
                        </div>
                    </div>
                </form>
                <div className={styles.stage}>
                    <div className={styles.item}>
                        <img src="https://placehold.co/150" alt="Product Images" />
                        <h3>Product</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.</p>
                        <div className={styles.actions}>
                            <button>View</button>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}