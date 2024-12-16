import styles from '@/assets/css/Blog.module.css';

import hero from "@/assets/images/blog-hero.jpg";
import Image from 'next/image';

export default function Blogs() {
    return (
        <main>
            <section className={styles.hero}>
                <Image src={hero} alt="" />
                <div className={styles.content}>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <hr />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque delectus itaque distinctio! Mollitia neque vero ut molestiae distinctio et rem impedit beatae suscipit, error quidem a doloremque quisquam, autem corporis.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque delectus itaque distinctio! Mollitia neque vero ut molestiae distinctio et rem impedit beatae suscipit, error quidem a doloremque quisquam, autem corporis.</p>
                    <button>Discover</button>
                </div>
            </section>
            <div className={styles.blogs}>
                <form action="">
                    <input type="search" name="blogSearch" id="blogSearch" placeholder='Search For Blogs' />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={styles.icon}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </form>
                <div className={styles.stage}>
                    <div className={styles.item}>
                        <Image src='https://placehold.co/300x250' alt='' width={300} height={250} />
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti illum nostrum a et ab numquam nam aliquam. Mollitia, perspiciatis voluptates...</p>
                        <div className={styles.tags}>
                            <button>tags</button>
                            <button>tags</button>
                            <button>tags</button>
                            <button>tags</button>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Image src='https://placehold.co/300x250' alt='' width={300} height={250} />
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti illum nostrum a et ab numquam nam aliquam. Mollitia, perspiciatis voluptates...</p>
                        <div className={styles.tags}>
                            <button>tags</button>
                            <button>tags</button>
                            <button>tags</button>
                            <button>tags</button>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Image src='https://placehold.co/300x250' alt='' width={300} height={250} />
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti illum nostrum a et ab numquam nam aliquam. Mollitia, perspiciatis voluptates...</p>
                        <div className={styles.tags}>
                            <button>tags</button>
                            <button>tags</button>
                            <button>tags</button>
                            <button>tags</button>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Image src='https://placehold.co/300x250' alt='' width={300} height={250} />
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti illum nostrum a et ab numquam nam aliquam. Mollitia, perspiciatis voluptates...</p>
                        <div className={styles.tags}>
                            <button>tags</button>
                            <button>tags</button>
                            <button>tags</button>
                            <button>tags</button>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Image src='https://placehold.co/300x250' alt='' width={300} height={250} />
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti illum nostrum a et ab numquam nam aliquam. Mollitia, perspiciatis voluptates...</p>
                        <div className={styles.tags}>
                            <button>tags</button>
                            <button>tags</button>
                            <button>tags</button>
                            <button>tags</button>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <Image src='https://placehold.co/300x250' alt='' width={300} height={250} />
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti illum nostrum a et ab numquam nam aliquam. Mollitia, perspiciatis voluptates...</p>
                        <div className={styles.tags}>
                            <button>tags</button>
                            <button>tags</button>
                            <button>tags</button>
                            <button>tags</button>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}