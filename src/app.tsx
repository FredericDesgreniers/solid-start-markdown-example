// @refresh reload
import { A, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <main>
          <ul>
            <li>
              <A href="/mdx-as-component">
                Importing a markdown file as a component
              </A>
            </li>
            <li>
              <A href="/mdx-as-page">Rendering a markdown file as a page</A>
            </li>
            <li>
              <A href="/mdx-frontmatter">
                Extracting frontmatter from a MDX file
              </A>
            </li>
            <li>
              <A href="/mdx-code-highlighting">
                Syntax highlighting code blocks
              </A>
            </li>
          </ul>
          <Suspense>{props.children}</Suspense>
        </main>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
