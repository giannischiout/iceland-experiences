import { getPayload } from "payload";
import config from "@payload-config";
const rooftopTentSamples = [
  {
    name: {
      en: "Rooftop Compact",
      es: "Tienda de Techo Compacta",
    },
    slug: "rooftop-compact",
    description: {
      en: "A compact rooftop tent perfect for quick setups and solo or duo camping.",
      es: "Una tienda de techo compacta perfecta para montajes rápidos y camping para uno o dos.",
    },
    sleeps: 2,
    icon: null, // replace with media upload ID if available
  },
  {
    name: {
      en: "Rooftop Family Deluxe",
      es: "Tienda de Techo Familiar Deluxe",
    },
    slug: "rooftop-family-deluxe",
    description: {
      en: "Large rooftop tent designed for families, includes extra space and comfort features.",
      es: "Tienda de techo grande diseñada para familias, con espacio extra y comodidades.",
    },
    sleeps: 5,
    icon: null,
  },
  {
    name: {
      en: "Rooftop Explorer",
      es: "Tienda de Techo Explorer",
    },
    slug: "rooftop-explorer",
    description: {
      en: "Rugged rooftop tent built for off-road adventures and extreme weather.",
      es: "Tienda de techo robusta para aventuras todoterreno y clima extremo.",
    },
    sleeps: 3,
    icon: null,
  },
  {
    name: {
      en: "Rooftop Lite",
      es: "Tienda de Techo Lite",
    },
    slug: "rooftop-lite",
    description: {
      en: "Lightweight rooftop tent for minimalists, easy to carry and set up.",
      es: "Tienda de techo ligera para minimalistas, fácil de transportar y montar.",
    },
    sleeps: 2,
    icon: null,
  },
  {
    name: {
      en: "Rooftop XL",
      es: "Tienda de Techo XL",
    },
    slug: "rooftop-xl",
    description: {
      en: "Extra-large rooftop tent with room for gear and up to six sleepers.",
      es: "Tienda de techo extra grande con espacio para equipo y hasta seis personas.",
    },
    sleeps: 6,
    icon: null,
  },
  {
    name: {
      en: "Rooftop Solo",
      es: "Tienda de Techo Solo",
    },
    slug: "rooftop-solo",
    description: {
      en: "Small and efficient rooftop tent designed for solo travelers.",
      es: "Tienda de techo pequeña y eficiente diseñada para viajeros solitarios.",
    },
    sleeps: 1,
    icon: null,
  },
];

async function populateTents() {
  const payload = await getPayload({ config });

  const createPromises = rooftopTentSamples.map((tent) =>
    payload.create({
      collection: "tents",
      data: tent,
    }),
  );

  const results = await Promise.all(createPromises);
  console.log(results);
}

await populateTents();
