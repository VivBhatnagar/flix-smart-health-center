import type { Metadata } from "next";
import "./globals.css";
import Header from "@components/header";
import Footer from "@components/Footer/footer";

export const metadata: Metadata = {
  title: "Flix Mobility Help Center",
  description: "Flix Mobility Help Center with an integrated AI-Chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-between flex-col h-screen">
        <Header />
        <main className="flex-1">
          {/* <picture>
           <source
            srcSet="https://cdn-cf.cms.flixbus.com/drupal-assets/2021-10/desktop-flix-hero-q4-2021.jpg"
            media="(min-width: 1200px)"
          />
          <source
            srcSet="https://cdn-cf.cms.flixbus.com/drupal-assets/2021-10/tablet-flix-hero-q4-2021.jpeg"
            media="(min-width: 600px)"
          />
          <source
            srcSet="https://cdn-cf.cms.flixbus.com/drupal-assets/2021-10/mobile-flix-hero-q4-2021.jpg"
            media="(max-width: 599px)"
          />
          <img
            className="hero-image"
            alt=""
            src="https://cdn-cf.cms.flixbus.com/drupal-assets/2021-10/mobile-flix-hero-q4-2021.jpg"
          />
        </picture> */}
          <div className="relative w-full h-[80vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-white">
            {/* Background Image with Gradient Overlay */}
            <div
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage: `
        linear-gradient(to bottom,transparent,grey),
        url('https://cdn-cf.cms.flixbus.com/drupal-assets/2021-10/desktop-flix-hero-q4-2021.jpg')`,
              }}
            >
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
