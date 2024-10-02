import { getSupportLogos } from "@/content/queries";
import Clients from "./clients";

export const ClientsWrapper = async () => {
  const data = await getSupportLogos();
  return <Clients content={data.assetCollection.items} />;
};
