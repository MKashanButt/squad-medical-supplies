import styles from '@/assets/css/components/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/assets/images/logo.png"

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={`${styles.container} container`}>
                    <div className={styles.company}>
                        <Image src={Logo} alt='Squad Medical Supplies Logo' className={styles.logo} />
                        <p>Our goal at Squad Medical Supplies is to make your life and the lives of those you care easier, healthier, and more comfortable. We are here to offer specialized solutions that support independence and well-being because we recognize the special needs of seniors.</p>
                        <span className={styles.socials}>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                    <path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                    <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                                    <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                                </svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                    <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                                </svg>
                            </a>
                        </span>
                    </div>
                    <div className={styles.links}>
                        <nav>
                            <h2>Quicklinks</h2>
                            <ul>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/products'>Products</Link></li>
                                <li><Link href='/services'>Services</Link></li>
                                <li><Link href='/about'>About</Link></li>
                                <li><Link href='/contact'>Contact</Link></li>
                            </ul>
                        </nav>
                        <nav>
                            <h2>Services</h2>
                            <ul>
                                <li><Link href='/dme-equipments'>DME Equipments</Link></li>
                                <li><Link href='/health-plans'>Healthplans</Link></li>
                                <li><Link href='/caregivers'>Caregivers</Link></li>
                            </ul>
                        </nav>
                        <nav>
                            <h2>Resources</h2>
                            <ul>
                                <li><Link href='#'>Blogs</Link></li>
                                <li><Link href='#'>Industry News</Link></li>
                                <li><Link href='#'>Covid 19</Link></li>
                                <li><Link href='#'>Service #4</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.newsletter}>
                        <h2>Subscribe To Our Newsletter</h2>
                        <form action="" method="POST">
                            <input type="email" placeholder="Email" />
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                                    <path d="M53.12 199.94l400-151.39a8 8 0 0110.33 10.33l-151.39 400a8 8 0 01-15-.34l-67.4-166.09a16 16 0 00-10.11-10.11L53.46 215a8 8 0 01-.34-15.06zM460 52L227 285" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
            <p className={styles.copyright}> Copyright Company &#169; Health Med.All Rights Reserved 2020 - {new Date().getFullYear()}</p>
        </>
    )
}