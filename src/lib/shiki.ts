import { createHighlighterCore } from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine-oniguruma.mjs";
import githubDark from "shiki/themes/github-dark.mjs";
import githubLight from "shiki/themes/github-light.mjs";
import javascriptLang from "shiki/langs/javascript.mjs";
import cssLang from "shiki/langs/css.mjs";
import graphqlLang from "shiki/langs/graphql.mjs";
import pythonLang from "shiki/langs/python.mjs";
import shellLang from "shiki/langs/shellscript.mjs";
import protobufLang from "shiki/langs/protobuf.mjs";
import markdownLang from "shiki/langs/markdown.mjs";
import mdxLang from "shiki/langs/mdx.mjs";
import htmlLang from "shiki/langs/html.mjs";

import wasm from "shiki/wasm";

const highlighter = await createHighlighterCore({
  themes: [githubDark, githubLight],

  langs: [
    javascriptLang,
    cssLang,
    graphqlLang,
    pythonLang,
    shellLang,
    protobufLang,
    markdownLang,
    mdxLang,
    htmlLang,
  ],
  engine: createOnigurumaEngine(wasm),
});

export default highlighter;
