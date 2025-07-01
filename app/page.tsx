import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InternalOps Pro – Simplify Staff Requests, Secure Approvals, and Eliminate Email Chaos",
  description:
    "Internalop Pro is a robust internal operations platform for managing staff requests, circulars, secured role-based approvals, and department workflows. Designed to streamline communication and approvals within enterprise environments.",
  keywords: [
    "Internal operations software",
    "Request management system",
    "Circular management",
    "Workflow automation",
    "Approval workflow tool",
    "Role-based access control",
    "Internalop Pro",
    "Enterprise internal communication",
    "Real estate company tools",
  ],
  authors: [{ name: "Internalop Pro Team" }],
  creator: "Internalop",
  metadataBase: new URL("https://www.internalops.pro/"),
  openGraph: {
    title: "InternalOps Pro – Simplify Staff Requests, Secure Approvals, and Eliminate Email Chaos",
    description:
      "Streamline internal communication, request approvals, and circular broadcasting with Internalop Pro — built for real estate and enterprise teams.",
    url: "https://www.internalops.pro",
    siteName: "Internalop Pro",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/5e634882-6c1c-42e7-b922-95e1a805ff88.png?token=QTIz1ZkR9FBMgD9Tb9wYGaScLKmtF7pDbs7fgXtYBo8&height=630&width=1200&expires=33287389123",
        width: 1200,
        height: 630,
        alt: "InternalOps Pro – Simplify Staff Requests, Secure Approvals, and Eliminate Email Chaos",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Internalop Pro  Internal Request & Circular System",
    description:
      "Manage internal requests, circulars, and role-based workflows efficiently with Internalop Pro.",
    creator: "@treyp99",
    images: [
      "https://opengraph.b-cdn.net/production/images/5e634882-6c1c-42e7-b922-95e1a805ff88.png?token=QTIz1ZkR9FBMgD9Tb9wYGaScLKmtF7pDbs7fgXtYBo8&height=630&width=1200&expires=33287389123",
    ],
  },
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
