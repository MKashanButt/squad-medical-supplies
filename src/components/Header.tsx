'use client'
import Image from "next/image"
import ImportantAlert from "./ImportantAlert"
import styles from '@/assets/css/components/Header.module.css'

import Logo from "@/assets/images/logo.png"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()
    return (
        <>
            <ImportantAlert />
            <header className={styles.header}>
                <Link href="/">
                    <Image src={Logo} alt="" className={styles.logo} />
                </Link>
                <nav>
                    <ul>
                        <li className={pathname == '/' ? 'active-link' : ''}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={pathname == '/products' ? 'active-link' : ''}>
                            <Link href="/products">Products</Link>
                        </li>
                        <li className={pathname == '/services' ? 'active-link' : ''}>
                            <Link href="/services">Services</Link>
                        </li>
                        <li className={pathname == '/about' ? 'active-link' : ''}>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                    <a href="#contactUs">
                        <button className={styles.headerBtn}>Contact Us</button>
                    </a>
                </nav>
            </header>
        </>
    )
}