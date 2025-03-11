import type { Metadata } from "next";
import "./globals.css";
import Header from "@components/Header/header";
import Footer from "@components/Footer/footer";

export const metadata: Metadata = {
  title: "Flix Mobility Help Center",
  description: "Flix Mobility Help Center with an integrated AI-Chatbot",
};

const backgroundImageUrl = "https://cdn-cf.cms.flixbus.com/drupal-assets/2021-10/desktop-flix-hero-q4-2021.jpg"

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
          <div className="relative w-full h-[80vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-white">
            <div
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage: `
        linear-gradient(to bottom,transparent,grey),
        url(${backgroundImageUrl})`,
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
