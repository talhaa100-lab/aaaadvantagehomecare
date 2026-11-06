import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "9iuyuzir",
    dataset: "production",
  },
  // The client's editing page will live at https://aaa-advantage.sanity.studio
  studioHost: "aaa-advantage",
});
