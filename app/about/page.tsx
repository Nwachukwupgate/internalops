import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Internalops Pro – Streamline Internal Operations & Approvals",
  description:
    "Internalops Pro is a modern SaaS solution built for companies to efficiently manage circulars, internal requests, and approval workflows with role-based access and secure communication.",
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
  openGraph: {
    title: "Internalops Pro – Smart Internal Ops for Modern Teams",
    description:
      "Empower your organization with Internalops Pro – a powerful platform to manage requests, circulars, and approvals with ease.",
    url: "https://yourdomain.com/about", // Replace with your actual domain
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Internalops Pro Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Internalops Pro",
    description:
      "Discover how Internalops Pro transforms internal operations, enhances collaboration, and simplifies request workflows.",
    images: ["https://yourdomain.com/twitter-og.jpg"], // Replace with actual image path
  },
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
