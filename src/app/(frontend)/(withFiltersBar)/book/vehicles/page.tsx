import { VehiclesView } from "@/sections/vehicles";
import axios from "@/utills/axios";
import { getErrorMessage } from "@/utills/get-error-message";

const getFilters = async () => {
  try {
    const { data } = await axios.get("/api/getFilters");
    return data;
  } catch (e) {
    return {
      error: getErrorMessage(e),
    };
  }
};
export default async function Page() {
  const filters = await getFilters();
  return <VehiclesView filters={filters} />;
}
