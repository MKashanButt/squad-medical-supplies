import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/assets/css/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import WhatsappButton from "@/components/WhatsappBtn";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Squad Medical Supplies",
  description: "Your Go To Medical Supplier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Head>
          <title>Squad Medical Supplies</title>
          <meta name="description" content="Your Go To Medical Supplier" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {children}
        <Footer />
        <WhatsappButton/>
      </body>
    </html>
  );
}
