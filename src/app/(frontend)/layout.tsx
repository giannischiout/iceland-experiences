import React from "react";
import "./styles.css";
import "simplebar-react/dist/simplebar.min.css";
import { satoshi } from "src/app/fonts/satoshi";
import { Navbar } from "@/components/nav";
import { getPayload } from "payload";
import config from "@payload-config";

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
        <section className="m-auto">
          <Navbar data={navData} />
          {children}
        </section>
      </body>
    </html>
  );
}
