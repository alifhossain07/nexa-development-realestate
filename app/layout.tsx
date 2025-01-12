import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import Header from "./shared/Header";
import NexaFooter from "./shared/Footer";
import AOSWrapper from "./components/AOSWrapper";


const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Nexa Developments LTD",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${nunito.variable} antialiased`}
      >
        <Header></Header>
        <AOSWrapper>{children}</AOSWrapper>
        
        <NexaFooter></NexaFooter>
      </body>
    </html>
  );
}
