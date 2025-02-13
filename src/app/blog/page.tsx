import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {/* https://dribbble.com/rrsrrsrajeev */}
      <BlurFade delay={BLUR_FADE_DELAY * 2 + 0.05}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`https://dribbble.com/rrsrrsrajeev`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">Dribbble</p>
                <p className="h-6 text-xs text-muted-foreground">
                  https://dribbble.com/rrsrrsrajeev <br/> 
                  Check out my design experiments and works in progress on Dribbble.

                </p>
              </div>
            </Link>
          </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
