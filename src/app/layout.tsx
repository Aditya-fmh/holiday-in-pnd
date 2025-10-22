import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TravelVista - Discover Your Perfect Vacation Destination",
  description: "Explore breathtaking destinations with TravelVista. We offer outbound adventures, body rafting experiences, and city tours worldwide. Book your dream vacation today!",
  keywords: [
    "travel", "vacation", "tourism", "adventure travel", "vacation packages", 
    "outbound tours", "body rafting", "city tours", "travel agency", "holiday packages",
    "adventure sports", "travel deals", "tour packages", "travel destinations"
  ],
  authors: [{ name: "TravelVista Team" }],
  creator: "TravelVista",
  publisher: "TravelVista",
  robots: "index, follow",
  openGraph: {
    title: "TravelVista - Discover Your Perfect Vacation Destination",
    description: "Explore breathtaking destinations with TravelVista. We offer outbound adventures, body rafting experiences, and city tours worldwide.",
    url: "https://travelvista.com",
    siteName: "TravelVista",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1440,
        height: 720,
        alt: "Beautiful tropical vacation destination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelVista - Discover Your Perfect Vacation Destination",
    description: "Explore breathtaking destinations with TravelVista. We offer outbound adventures, body rafting experiences, and city tours worldwide.",
    images: ["/hero-bg.jpg"],
    creator: "@travelvista",
  },
  alternates: {
    canonical: "https://travelvista.com",
  },
  other: {
    "twitter:site": "@travelvista",
    "geo.region": "US",
    "geo.placename": "United States",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
