import BlizzAPI from "blizzapi";
import access from "./apiAccess";

const blizzApi = new BlizzAPI({
  region: "us",
  clientId: access.clientId,
  clientSecret: access.clientSecret,
});
export default blizzApi;
