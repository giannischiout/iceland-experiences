import React from "react";
import "./styles.css";
import "simplebar-react/dist/simplebar.min.css";
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

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en">
      <body className={satoshi.variable}>{children}</body>
    </html>
  );
}
