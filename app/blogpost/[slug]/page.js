import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// Define the contents directory
const contentDirectory = path.join(process.cwd(), "contents");

// Generate the static paths for all available blog posts (equivalent to getStaticPaths)
export async function generateStaticParams() {
  const filenames = fs.readdirSync(contentDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(".md", ""), // Remove the .md extension for the slug
  }));
}

// This function runs on the server and fetches the data
export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const filepath = path.join(contentDirectory, `${slug}.md`);

  // If the file doesn't exist, return a 404
  if (!fs.existsSync(filepath)) {
    return {
      notFound: true,
    };
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent); // Extract the front matter and content

  // Use unified processor to convert markdown to HTML
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeDocument, { title: data.title })
    .use(rehypeFormat)
    .use(rehypeRaw)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "poimandres",
      transformers: [
        // transformerCopyButton({
        //   visibility: "always",
        //   feedbackDuration: 3_000,
        // }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="xl:w-1/2 lg:w-9/12 md:w-9/12 sm:w-11/12 w-[95%]">
      <div className="bg-cardbg p-5 rounded-lg text-center">
        <p className="text-4xl font-bold">
          <font color="#de6012">{data.title}</font>
        </p>
        <p className="text-xs sm:text-sm mt-5 text-caption">
          {data.description}
        </p>
        <p className="text-xs sm:text-sm mt-5 text-caption">{data.date}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="leading-7 bg-cardbg p-5 rounded-lg mt-7"
      ></div>
    </div>
  );
}
