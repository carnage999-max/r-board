import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "R-Board® | Structural. Quiet. Insulating.",
    template: "%s | R-Board®",
  },
  description:
    "R-Board® converts end-of-life tires into high-performance structural panels for walls, floors, and roofs. Data-driven performance for acoustic, thermal, moisture, and impact resilience.",
  applicationName: "R-Board®",
  keywords: [
    "R-Board",
    "recycled rubber panels",
    "structural panels",
    "acoustic insulation",
    "thermal insulation",
    "moisture resistant sheathing",
    "sustainable construction materials",
  ],
  authors: [{ name: "R-Board®" }],
  creator: "R-Board®",
  publisher: "R-Board®",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "R-Board® | Structural. Quiet. Insulating.",
    description:
      "R-Board® converts end-of-life tires into high-performance structural panels for walls, floors, and roofs.",
    type: "website",
    url: "/",
    siteName: "R-Board®",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "R-Board® structural panels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "R-Board® | Structural. Quiet. Insulating.",
    description:
      "R-Board® converts end-of-life tires into high-performance structural panels for walls, floors, and roofs.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "construction",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0f14",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
