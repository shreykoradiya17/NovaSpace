import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "NovaSpace | Pioneering the Future of Space Exploration",
    template: "%s | NovaSpace"
  },
  description: "NovaSpace is a leading aerospace consulting firm specializing in mission coordination, orbital logistics, and cutting-edge space technology. Explore our missions and technologies.",
  keywords: ["space exploration", "aerospace consulting", "orbital logistics", "satellite technology", "NovaSpace", "space missions"],
  authors: [{ name: "NovaSpace Team" }],
  creator: "NovaSpace",
  publisher: "NovaSpace",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novaspace7.vercel.app/",
    title: "NovaSpace | Pioneering the Future of Space Exploration",
    description: "Expert coordination and technology for modern space missions.",
    siteName: "NovaSpace",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaSpace | Space Exploration & Technology",
    description: "Pioneering the future of space exploration through expert consulting and innovation.",
    creator: "@NovaSpace",
  },
};

import LenisProvider from "@/components/LenisProvider";
import QueryProvider from "@/components/QueryProvider";

export default function RootLayout({ children }) {
  // console.log(children, 'children in layout');
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <LenisProvider>
            <Navbar />
            {children}
            <Footer />
          </LenisProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
