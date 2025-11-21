import "./globals.css";
import { ReactNode } from "react";
import localFont from "next/font/local";
import QueryProvider from "@/providers/queryProvider";
const cairo = localFont({
  src: "./fonts/cairo/Cairo-VariableFont_slnt,wght.ttf",
  weight: "200 900",
  variable: "--font-cairo",
});

const brother = localFont({
  src: "./fonts/Brother 1816/Brothers Bold.ttf",
  weight: "700",
  variable: "--font-brother",
});


// export const metadata = {
//   title: "My Restaurant",
//   description: "Restaurant project with Next.js + TS",
// };
export const metadata = {
  title: "Chilis",
  description: "Chilis Restaurant - Order online or check our menu",
  keywords: ["restaurant", "chilis", "menu", "online order"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Chilis",
    description: "Order online from Chilis Restaurant",
    url: "https://chilis-egypt.com",
    siteName: "Chilis",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${cairo.variable} ${brother.variable}`}>
      <body>
        <QueryProvider>
          {children}
        </QueryProvider></body>
    </html>
  );
}
