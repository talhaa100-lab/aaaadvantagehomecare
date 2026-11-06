import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "AAA Advantage Home Care",
  projectId: "9iuyuzir",
  dataset: "production",
  // Only the Content area — no Vision / extra tools to confuse the client.
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
