import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Internalops Pro – Streamline Internal Operations",
  description:
    "Get in touch with the Internalops Pro team. Whether you have questions about features, pricing, support, or partnerships, we're here to help you streamline internal workflows and approvals.",
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
    title: "Contact Internalops Pro – Let's Simplify Your Internal Workflows",
    description:
      "Reach out to our team for support, inquiries, demos, or feedback. We're ready to help your organization streamline its operations.",
    url: "https://www.internalops.pro/contact",
    type: "website",
    images: [
      {
        url: "https://www.internalops.pro/_next/image?url=%2Fimages%2Flogo%2Flogo-transparent.jpg&w=256&q=75", // Replace with your own OG image
        width: 1200,
        height: 630,
        alt: "Contact Internalops Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Internalops Pro",
    description:
      "Have questions about Internalops Pro? Our team is here to support your organization's internal operations and workflow needs.",
    images: ["https://yourdomain.com/twitter-contact.jpg"], // Replace with your image
  },
};


const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with the Internalops Pro team. Whether you have questions about features, pricing, support, or partnerships, we're here to help you streamline internal workflows and approvals."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
