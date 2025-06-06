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
  title: "Internalop Pro – Request and Circular Management System",
  description:
    "Internalop Pro is a robust internal operations platform for managing staff requests, circulars, role-based approvals, and department workflows. Designed to streamline communication and approvals within enterprise environments.",
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
  metadataBase: new URL("https://www.internalops.pro/"), // Update if needed
  openGraph: {
    title: "Internalop Pro  Streamlined Internal Requests and Circulars",
    description:
      "Streamline internal communication, request approvals, and circular broadcasting with Internalop Pro — built for real estate and enterprise teams.",
    url: "https://www.internalops.pro/", // Update with real domain
    siteName: "Internalop Pro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Internalop Pro  Internal Request & Circular System",
    description:
      "Manage internal requests, circulars, and role-based workflows efficiently with Internalop Pro.",
    creator: "@treyp99", // Replace if you have a Twitter/X handle
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
