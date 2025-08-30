import React from "react";
import "./styles.css";
import "simplebar-react/dist/simplebar.min.css";
import { satoshi } from "src/app/fonts/satoshi";
import { Nav } from "@/components/nav";

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

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={satoshi.variable}>
        <section className="m-auto">
          <Nav />
          {children}
        </section>
      </body>
    </html>
  );
}
