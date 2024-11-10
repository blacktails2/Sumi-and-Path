import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  apiVersion: "2024-11-07", // use current date (YYYY-MM-DD) to target the latest API version

  projectId: "uzms4ood", // can aslo be found in your Sanity Studio config file
  dataset: "production", // can aslo be found in your Sanity Studio config file
  useCdn: true,

  // if you use environment varibales, you can use below instead:
  // projectId: import.meta.env.SANITY_PROJECT_ID,
  // dataset: import.meta.env.SANITY_DATASET
};

export const client = createClient(config);
