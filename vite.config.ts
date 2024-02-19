import { defineConfig } from "@solidjs/start/config";
import pkg from "@vinxi/plugin-mdx";

import rehypeRaw from "rehype-raw";
import { nodeTypes } from "@mdx-js/mdx";

import remarkExpressiveCode from "remark-expressive-code";

const { default: mdx } = pkg;

export default defineConfig({
  start: {
    // Register the extensions with solid-start
    extensions: ["mdx", "md"],
  },
  plugins: [
    // Add and configure the `@vinxi/plugin-mdx` plugin in order to properly handle markdown files
    mdx.withImports({})({
      jsx: true,
      jsxImportSource: "solid-js",
      providerImportSource: "solid-mdx",
      rehypePlugins: [[rehypeRaw, { passThrough: nodeTypes }]],
      remarkPlugins: [
        [
          remarkExpressiveCode,
          { themes: ["min-light", "material-theme-ocean"] },
        ],
      ],
    }),
  ],
});
