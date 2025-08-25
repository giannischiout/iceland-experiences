import type { Endpoint, PayloadRequest } from "payload";

export const getFilters: Endpoint["handler"] = async (req: PayloadRequest) => {
  try {
    const payload = req.payload;

    // Fetch all in parallel
    const [categories, brands, features] = await Promise.all([
      payload.find({ collection: "categories", limit: 100 }),
      payload.find({ collection: "brands", limit: 100 }),
      payload.find({ collection: "features", limit: 100 }),
    ]);

    // Count how many vehicles per category
    const categoriesWithCounts = await Promise.all(
      categories.docs.map(async (category) => {
        const vehicleCount = await payload.count({
          collection: "vehicles",
          where: {
            category: {
              equals: category.id,
            },
          },
        });
        return {
          ...category,
          count: vehicleCount.totalDocs,
        };
      }),
    );

    return Response.json({
      categories: categoriesWithCounts,
      brands: brands.docs,
      features: features.docs,
    });
  } catch (error) {
    console.error("Error fetching filters:", error);
    return Response.json({ error: "Failed to load filters" }, { status: 500 });
  }
};
