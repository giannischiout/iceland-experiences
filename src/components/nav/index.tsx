import { getPayload } from "payload";
import config from "@payload-config";
import { Navbar } from "@/components/nav/navbar";

const getNavData = async () => {
  const payload = await getPayload({ config });
  return await payload.findGlobal({
    slug: "navigation",
    depth: 3,
  });
};

export async function Nav() {
  const navChildren = await getNavData();
  return <Navbar data={navChildren} />;
}
