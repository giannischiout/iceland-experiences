import React from "react";
import "./styles.css";
import { Noto_Sans } from "next/font/google";
import "simplebar-react/dist/simplebar.min.css";
import { Navbar } from "@/components/nav";
import { getPayload } from "payload";
import config from "@payload-config";
import { satoshi } from "src/app/fonts/satoshi";

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
  icons: [
    {
      rel: "icon",
      url: `/favicon.ico`,
    },
  ],
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: "400", // Special Elite has only one weight
  variable: "--font-noto",
});

const getNavData = async () => {
  const payload = await getPayload({ config });
  return await payload.findGlobal({
    slug: "mainMenu",
  });
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  const navData = await getNavData();
  return (
    <html lang="en">
      <body className={satoshi.variable}>
        <Navbar data={navData} />
        {children}
      </body>
    </html>
  );
}
