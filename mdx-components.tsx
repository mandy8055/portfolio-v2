import type { MDXComponents } from "mdx/types.js";
import type { ComponentProps } from "react";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom heading components with anchor links
    h1: ({ children, ...props }: ComponentProps<"h1">) => (
      <h1
        className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: ComponentProps<"h2">) => (
      <h2
        className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: ComponentProps<"h3">) => (
      <h3
        className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100"
        {...props}
      >
        {children}
      </h3>
    ),

    // Paragraph
    p: ({ children, ...props }: ComponentProps<"p">) => (
      <p
        className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
        {...props}
      >
        {children}
      </p>
    ),

    // Links
    a: ({ children, href, ...props }: ComponentProps<"a">) => {
      const isExternal = href?.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            {...props}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href || "#"}
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          {...props}
        >
          {children}
        </Link>
      );
    },

    // Lists
    ul: ({ children, ...props }: ComponentProps<"ul">) => (
      <ul
        className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: ComponentProps<"ol">) => (
      <ol
        className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }: ComponentProps<"li">) => (
      <li className="ml-4" {...props}>
        {children}
      </li>
    ),

    // Code blocks
    code: ({ children, ...props }: ComponentProps<"code">) => (
      <code
        className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400"
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children, ...props }: ComponentProps<"pre">) => (
      <pre
        className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm"
        {...props}
      >
        {children}
      </pre>
    ),

    // Blockquotes
    blockquote: ({ children, ...props }: ComponentProps<"blockquote">) => (
      <blockquote
        className="border-l-4 border-blue-500 pl-4 py-2 mb-4 italic text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50"
        {...props}
      >
        {children}
      </blockquote>
    ),

    // Horizontal rule
    hr: (props: ComponentProps<"hr">) => (
      <hr className="my-8 border-gray-300 dark:border-gray-700" {...props} />
    ),

    // Table
    table: ({ children, ...props }: ComponentProps<"table">) => (
      <div className="overflow-x-auto mb-4">
        <table
          className="min-w-full divide-y divide-gray-300 dark:divide-gray-700"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }: ComponentProps<"th">) => (
      <th
        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }: ComponentProps<"td">) => (
      <td
        className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
        {...props}
      >
        {children}
      </td>
    ),

    // Images
    img: ({ alt, ...props }: ComponentProps<"img">) => (
      // biome-ignore lint/a11y/useAltText: alt is provided via spread props
      <img alt={alt} className="rounded-lg my-4 max-w-full h-auto" {...props} />
    ),

    ...components,
  };
}
