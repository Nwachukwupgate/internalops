import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Internalops Pro – Insights on Workflow & Ops Management",
  description:
    "Explore expert insights, practical tips, and industry trends on internal operations, approval workflows, productivity, and organizational efficiency from the Internalops Pro team.",
  keywords: [
    "Internalops Pro blog",
    "workflow management tips",
    "internal operations insights",
    "approval process best practices",
    "circular management",
    "enterprise productivity",
    "internal communication strategies",
    "team collaboration tools",
    "role-based access systems",
    "digital transformation for companies",
  ],
  openGraph: {
    title: "Internalops Pro Blog – Boost Your Team’s Operational Efficiency",
    description:
      "Stay updated with best practices, case studies, and articles on streamlining internal processes, managing requests, and optimizing organizational workflows.",
    url: "https://yourdomain.com/blog",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-blog.jpg", // Replace with your blog OG image
        width: 1200,
        height: 630,
        alt: "Internalops Pro Blog Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Internalops Pro Blog",
    description:
      "Explore articles and resources on improving internal operations, digital transformation, and workflow optimization for modern organizations.",
    images: ["https://yourdomain.com/twitter-blog.jpg"], // Replace with your blog OG image
  },
};


const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Explore expert insights, practical tips, and industry trends on internal operations, approval workflows, productivity, and organizational efficiency from the Internalops Pro team."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {/* <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Blog;
