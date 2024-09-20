import * as React from "react";
import dynamic from "next/dynamic";

import { type FrontMatter, getMdxContentsWithFilter } from "@/lib/mdx";
import { cn } from "@/lib/utils";

const CategoryCarousel = dynamic(() => import("./category-carousel"), {
  ssr: false,
});

type Props = React.PropsWithChildren<{} & React.HTMLAttributes<HTMLDivElement>>;

const APICategorySection: React.FC<Props> = async ({ className, ...rest }) => {
  const mdxContents = await getMdxContentsWithFilter(
    10,
    "desc",
    (mdxContent) => mdxContent.frontMatter.category === "api",
  );

  const metadatas = mdxContents.map((content) => ({
    ...content.frontMatter,
    excerpt: content.excerpt,
  })) as (FrontMatter & { excerpt: string | null })[];

  return (
    <section
      {...rest}
      className={cn("mt-12 max-w-full md:mt-20 lg:mt-28", className)}
    >
      <CategoryCarousel sectionHeading="API" metadatas={metadatas} />
    </section>
  );
};

export default APICategorySection;