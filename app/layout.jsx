import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

export const metadata = {
  title: "Pick My University",
  description: "Study MBBS internationally-budget friendly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
      />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
