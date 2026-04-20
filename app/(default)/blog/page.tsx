import { BlogIndexPage } from "@/components/pages/blog-index-page"
import { buildPageMetadata } from "@/lib/metadata"
import { getBlogIndexContent } from "@/lib/marketing-content"

export const metadata = buildPageMetadata({
  locale: "en",
  path: "/blog",
  title: getBlogIndexContent("en").title,
  description: getBlogIndexContent("en").description,
  ogImageAlt: "Solora blog cover image",
})

export default function EnglishBlogIndexPage() {
  return <BlogIndexPage locale="en" />
}
