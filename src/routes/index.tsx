import { A } from "@solidjs/router";

export default function () {
  return (
    <>
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
          <A href="/mdx-frontmatter">Extracting frontmatter from a MDX file</A>
        </li>
        <li>
          <A href="/mdx-code-highlighting">Syntax highlighting code blocks</A>
        </li>
      </ul>
    </>
  );
}
