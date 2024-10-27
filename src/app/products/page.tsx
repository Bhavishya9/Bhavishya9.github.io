import Breadcrumb from "@/components/Common/Breadcrumb";
import Table from "@/components/Table/table";
import React from "react";
import { Column } from 'react-table';
import drug_data from '@/app/products/data.json';
import chemicals_data from '@/app/products/chemicals.json';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products of Arvik Pharma",
  description: "This is About all the products of Arvik Pharma",
  // other metadata
};

// pages/index.tsx


interface Data {
  name: string;
  id: string;
  related_name: string;
}

interface Chemicals {
  name: string
}


const data: Data[] = drug_data
const chemicals: Chemicals[] = chemicals_data

const columns: Column<Data>[] = [
  {
    Header: 'Name of Intermediate',
    accessor: 'name',
  },
  {
    Header: 'CAS No.',
    accessor: 'id',
  },
  {
    Header: 'Related API',
    accessor: 'related_name'
  }
];

const chemical_columns: Column<Chemicals>[] = [
  {
    Header: 'Name of Electronic Chemical',
    accessor: 'name'
  }
]



const ProductsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Products"
        description=""
      />
      <div className="container text-base font-medium leading-relaxed text-body-color">
        <p>We have the scientific strength, knowledge, expertise and infrastructure to manufacture any kind of intermediates. Our manufacturing facility with over 14 Reactors and supporting utility facilities at APIIC-APSEZ, Atchuthapuram, Visakhapatam , Andhra Pradesh.</p>
      </div>
      <section id="products" className="pt-8 md:pt-10 lg:pt-24">
        <div className="container">
        <div>
            <h3 className="mb-5 my-2 py-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Electronic Chemicals
            </h3>
            <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            Electronic chemicals are specialized compounds crucial for manufacturing semiconductors, integrated circuits, and printed circuit boards, requiring exceptionally high purity standards. This pharmaceutical company excels in their production due to state-of-the-art cleanroom facilities and stringent contamination controls, ensuring ultra-high purity products. Their advanced analytical technologies guarantee consistent quality, while continuous innovation in chemical formulations enhances electronic component performance. With expertise in chemical synthesis and a commitment to global manufacturing standards, they are a trusted leader in the highly competitive electronic chemicals market.
            </p>
              <Table columns={chemical_columns} data={chemicals} />
        </div>
          <div>
            <h3 className="mb-5 my-2 py-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            Active Pharmaceutical Ingredients (APIs) and Intermediates
            </h3>
            <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            Active Pharmaceutical Ingredients (APIs) are the critical components of any drug, responsible for its therapeutic effects, while intermediates are chemical compounds that serve as the building blocks for APIs. Arvik Pharma excels in manufacturing both due to their advanced technology and strict adherence to quality standards. Their state-of-the-art facilities comply with international regulations, ensuring the production of high-quality APIs and intermediates. The team’s expertise in chemical synthesis boosts efficiency and cost-effectiveness in production processes. Their commitment to continuous research and development allows them to innovate and meet changing market demands, maintaining their industry leadership. With a strong reputation for reliability and compliance, they are a trusted partner in the global pharmaceutical industry.
            </p>
              <Table columns={columns} data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
