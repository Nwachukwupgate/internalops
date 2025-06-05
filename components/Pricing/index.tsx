"use client";

import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const africanCountries = [
  "DZ","AO","BJ","BW","BF","BI","CM","CV","CF","TD","KM","CD","DJ","EG",
  "GQ","ER","SZ","ET","GA","GM","GH","GN","GW","KE","LS","LR","LY","MG",
  "MW","ML","MR","MU","YT","MA","MZ","NA","NE","NG","RW","RE","SH","ST",
  "SN","SC","SL","SO","ZA","SS","SD","TZ","TG","TN","UG","EH","ZM","ZW"
];

const Pricing = () => {
  const [isAfricanVisitor, setIsAfricanVisitor] = useState<boolean | null>(null);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const countryCode = data.country_code;
        setIsAfricanVisitor(africanCountries.includes(countryCode));
      } catch (error) {
        console.error("Failed to detect location", error);
        setIsAfricanVisitor(false);
      }
    }
    fetchCountry();
  }, []);

  if (isAfricanVisitor === null) return <p>Loading pricing...</p>;

  const prices = {
    lite: isAfricanVisitor ? "₦2,500,000" : "$1,800",
    basic: isAfricanVisitor ? "₦4,000,000" : "$3,500",
    plus: isAfricanVisitor ? "₦5,500,000" : "$5,000"
  };

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Choose the plan that fits your business needs."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox packageName="Lite" price={prices.lite} subtitle="For startups and small teams">
            <OfferList text="All Core Features (Requests, Circulars)" status="active" />
            <OfferList text="Unlimited Departments & Roles" status="active" />
            <OfferList text="Role-based Access Control" status="active" />
            <OfferList text="Request Workflow Management" status="active" />
            <OfferList text="Email Notification System" status="active" />
            <OfferList text="Firebase Image Uploads" status="active" />
            <OfferList text="Lifetime Access" status="inactive" />
            <OfferList text="Free Lifetime Updates" status="inactive" />
            <OfferList text="Priority Email Support" status="inactive" />
            <OfferList text="Up to 10 Staff Users" status="active" />
            <OfferList text="Basic Reporting" status="active" />
          </PricingBox>

          <PricingBox packageName="Basic" price={prices.basic} subtitle="For growing businesses">
            <OfferList text="All Core Features (Requests, Circulars)" status="active" />
            <OfferList text="Unlimited Departments & Roles" status="active" />
            <OfferList text="Role-based Access Control" status="active" />
            <OfferList text="Request Workflow Management" status="active" />
            <OfferList text="Daily/Weekly Report Input" status="active" />
            <OfferList text="Admin Analytics Dashboard" status="active" />
            <OfferList text="Audit Logs & Traceability" status="active" />
            <OfferList text="Lifetime Access" status="active" />
            <OfferList text="Free Lifetime Updates" status="inactive" />
            <OfferList text="Priority Email Support" status="active" />
            <OfferList text="Up to 30 Staff Users" status="active" />
            <OfferList text="Intermediate Reporting" status="active" />
          </PricingBox>

          <PricingBox packageName="Plus" price={prices.plus} subtitle="For large organizations and integrations">
            <OfferList text="All Core Features (Requests, Circulars)" status="active" />
            <OfferList text="Unlimited Departments & Roles" status="active" />
            <OfferList text="Role-based Access Control" status="active" />
            <OfferList text="Request Workflow Management" status="active" />
            <OfferList text="Daily/Weekly Report Input" status="active" />
            <OfferList text="KPI Dashboard (Employee Grading)" status="active" />
            <OfferList text="Admin Analytics Dashboard" status="active" />
            <OfferList text="Audit Logs & Traceability" status="active" />
            <OfferList text="API Integration Support" status="active" />
            <OfferList text="Lifetime Access" status="active" />
            <OfferList text="Free Lifetime Updates" status="active" />
            <OfferList text="Priority Email Support" status="active" />
            <OfferList text="30-Day Deployment Support" status="active" />
            <OfferList text="Unlimited Staff Users" status="active" />
            <OfferList text="Advanced Reporting & Exports" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
