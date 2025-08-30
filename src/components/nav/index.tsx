import { getPayload } from "payload";
import config from "@payload-config";
import { Navbar } from "@/components/nav/navbar";

const getNavData = async () => {
  const payload = await getPayload({ config });
  const doc = await payload.findGlobal({
    slug: "navigation",
    depth: 3,
  });
  // const navData: NavItem[] = [
  //   {
  //     id: "book_now",
  //     label: "Book now",
  //     type: "bookNow-popup",
  //   },
  //   {
  //     id: "vehicles",
  //     label: "Vehicles",
  //     children: doc.vehicles,
  //     type: "mega-menu",
  //   },
  //   {
  //     id: "road-trip",
  //     label: "Road Trips",
  //     children: doc.trip,
  //     type: "mega-menu",
  //   },
  //   {
  //     id: "adventure-cars",
  //     label: "Adventure Cars",
  //     href: "/test",
  //     type: "link",
  //   },
  // ];
  return doc;
};

export async function Nav() {
  const navChildren = await getNavData();
  return <Navbar data={navChildren} />;
}
