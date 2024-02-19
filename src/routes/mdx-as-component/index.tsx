import MDExample from "~/routes/mdx-as-component/md.md";
import MDXExample from "~/routes/mdx-as-component/mdx.mdx";

export default function () {
  return (
    <>
      <h1>MDX as a component</h1>
      <b>This is an MD component imported inside a solid page:</b>
      <MDExample />
      <b>This is an MDX component imported inside a solid page:</b>
      <MDXExample />
    </>
  );
}
