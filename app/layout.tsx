import "./globals.css";
import { ReactNode } from "react";
import localFont from "next/font/local";
import QueryProvider from "@/providers/queryProvider";
import AuthProvider from "@/providers/authProvider";
import { Toaster } from "react-hot-toast";
import Header from "./components/partials/header/header";
import Footer from "./components/partials/footer/footer";

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
    <html lang="en" >
      <body>

        <QueryProvider>
          <AuthProvider>
            <Toaster position="top-center" reverseOrder={false} />
            <Header />
            <main>{children}</main>
            <Footer />
          </AuthProvider>
        </QueryProvider>
      </body>

    </html>
  );
}
