import React from "react";
import "./styles.css";
import { Noto_Sans, Poppins } from "next/font/google";
import "simplebar-react/dist/simplebar.min.css";

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
