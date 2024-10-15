"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="directors" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Leaders"
          paragraph="A team of visionary directors who are committed to steering our company towards success. With diverse expertise and a shared passion for excellence, they inspire innovation, drive strategic growth, and foster a culture of collaboration. "
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
          <PricingBox
            packageName=""
            price={isMonthly ? "N.Gangi Reddy" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Director"
          >
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            He holds an M.Sc. from Venkateshwara University and brings 35 years of experience across banking and the pharmaceutical industry. Initially spending 10 years in banking, he transitioned to the bulk drug sector for 25 years, taking key roles at Standard Organics Ltd. and SS Organics Ltd. He also led as the Director in charge at Coral Drugs, focusing on drug pellets and granules manufacturing. Currently, as the Managing Director of Ogene Systems (I) Ltd., his extensive expertise in both national and international bulk drug marketing showcases a proven track record of success.
            </p>
          </PricingBox>
          <PricingBox
            packageName=""
            price={isMonthly ? "M.Sai Krishna" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Director"
          >
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            He is a distinguished professional with an MIRPM from Nagpur University and over 20 years in the bulk drug industry. His career began at Ogene Systems India Limited, where he excelled as Plant In-Charge, overseeing purchasing and sales in domestic and international markets. His expertise spans purchasing, marketing, administration, and manufacturing, with significant experience in trade marketing. Throughout his career, he has also gained substantial experience in trade marketing, further solidifying his reputation as a versatile and knowledgeable leader in the pharmaceutical sector.
            </p>
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
