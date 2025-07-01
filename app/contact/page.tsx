import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Internalops Pro – Streamline Internal Operations",
  description:
    "Get in touch with the Internalops Pro team. Whether you have questions about features, pricing, support, or partnerships, Internalops Pro is here to help you streamline internal workflows and approvals.",
  keywords: [
    "contact Internalops Pro",
    "Internalops Pro support",
    "workflow software contact",
    "operations management contact",
    "approval system help",
    "team collaboration platform",
    "contact internal tools provider",
    "request management system support",
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


const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with the Internalops Pro team. Whether you have questions about features, pricing, support, or partnerships, Internalops Pro is here to help you streamline internal workflows and approvals."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
