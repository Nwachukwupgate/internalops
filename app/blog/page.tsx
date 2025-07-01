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
    title: "InternalOps Pro – Simplify Staff Requests, Secure Approvals, and Eliminate Email Chaos",
    description:
      "Streamline internal communication, request approvals, and circular broadcasting with Internalop Pro — built for real estate and enterprise teams.",
    url: "https://www.internalops.pro/about",
    type: "website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/5e634882-6c1c-42e7-b922-95e1a805ff88.png?token=QTIz1ZkR9FBMgD9Tb9wYGaScLKmtF7pDbs7fgXtYBo8&height=630&width=1200&expires=33287389123",
        width: 1200,
        height: 630,
        alt: "InternalOps Pro Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InternalOps Pro – Simplify Staff Requests, Secure Approvals, and Eliminate Email Chaos",
    description:
      "Streamline internal communication, request approvals, and circular broadcasting with Internalop Pro — built for real estate and enterprise teams.",
    site: "@Internalop90341", // Optional: replace with actual Twitter handle if you have one
    images: [
      "https://opengraph.b-cdn.net/production/images/5e634882-6c1c-42e7-b922-95e1a805ff88.png?token=QTIz1ZkR9FBMgD9Tb9wYGaScLKmtF7pDbs7fgXtYBo8&height=630&width=1200&expires=33287389123",
    ],
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
