import { A } from "@solidjs/router";
import * as Example from "./example.mdx";

export default function () {
  return (
    <>
      <A href="./example.mdx">{Example.title}</A>
      <h1>The content can still be rendered inline using `.default`</h1>
      <Example.default />
    </>
  );
}
