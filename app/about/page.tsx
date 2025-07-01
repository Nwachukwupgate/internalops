import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | InternalOps Pro – Simplify Staff Requests, Secure Approvals, and Eliminate Email Chaos",
  description:
    "Streamline internal communication, request approvals, and circular broadcasting with Internalop Pro — built for real estate and enterprise teams.",
  metadataBase: new URL("https://www.internalops.pro"),
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
  keywords: [
    "internal operations",
    "workflow management",
    "circular system",
    "request approval",
    "internal communication",
    "SaaS for companies",
    "Internalops Pro",
    "role-based access control",
    "team collaboration",
    "enterprise communication tool",
  ],
};


const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Internalops Pro is a modern SaaS solution built for companies to efficiently manage circulars, internal requests, and approval workflows with role-based access and secure communication."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
