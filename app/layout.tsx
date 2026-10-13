import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { coupleNames, wedding } from "@/config/wedding";
import "./globals.css";

const headings = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const description = `Join us for the Nuptial Mass of ${coupleNames} on ${wedding.date.display} at St. Paul's Church, Waragoda, Kelaniya, followed by our wedding reception in Negombo, Sri Lanka.`;

export const metadata: Metadata = {
  metadataBase: new URL(wedding.siteUrl),
  title: `${coupleNames} | Our Wedding Invitation`,
  description,
  applicationName: "Our Wedding Invitation",
  openGraph: {
    title: `We're getting married! | ${coupleNames}`,
    description,
    url: wedding.siteUrl,
    siteName: "Wedding Invitation",
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: "/couple.jpg",
        width: 1000,
        height: 1350,
        alt: `Wedding portrait for ${coupleNames}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${coupleNames} | Our Wedding Invitation`,
    description,
    images: ["/couple.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcfbf5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headings.variable} ${body.variable}`}>
      <body className="bg-ivory font-sans text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
