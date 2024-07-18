import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./reset.scss";
import "./globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/molecules/Header";


const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Porto - Software Engineer",
  description: "Samuel Porto's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
