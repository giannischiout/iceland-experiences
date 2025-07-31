import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";

import { Navbar } from "@/components/nav";

export const metadata = {
  description: "Reliable car rental company",
  title: "Rent a car",
};

const getNavData = async () => {
  const payload = await getPayload({ config });
  return await payload.findGlobal({
    slug: "mainMenu",
  });
};

export default async function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  const navData = await getNavData();
  return (
    <section className="m-auto w-[96%]">
      <Navbar data={navData} />
      {children}
    </section>
  );
}
