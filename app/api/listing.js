import client from "./client";

const getListing = () => client.get("/listing");

export default {
  getListing,
};
