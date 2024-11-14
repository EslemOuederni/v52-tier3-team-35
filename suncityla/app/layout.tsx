import Navbar from "./components/Navbar";
import "./globals.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "SunCityLA",
  description: "We\’re helping LA set up solar energy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
