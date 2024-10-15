import Breadcrumb from "@/components/Common/Breadcrumb";
import Table from "@/components/Table/table";
import React from "react";
import { Column } from 'react-table';
import drug_data from '@/app/products/data.json';

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

// const data: Data[] = [
//   {name: 'John Doe', id: "25" },
//   {name: 'Jane Smith', id: "30" },
//   {name: 'Sam Green', id: "35" },
//   {name: 'Michael Johnson', id: "40" },
//   {name: 'Anna Brown', id: "28" },
// ];
const data: Data[] = drug_data

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



const ProductsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Intermediates"
        description=""
      />
      <div className="container text-base font-medium leading-relaxed text-body-color">
        <p>Active Pharmaceutical Ingredients (APIs) are the critical components of any drug, responsible for its therapeutic effects, while intermediates are chemical compounds that serve as the building blocks for APIs. Arvik Pharma excels in manufacturing both due to their advanced technology and strict adherence to quality standards. Their state-of-the-art facilities comply with international regulations, ensuring the production of high-quality APIs and intermediates. The team’s expertise in chemical synthesis boosts efficiency and cost-effectiveness in production processes. Their commitment to continuous research and development allows them to innovate and meet changing market demands, maintaining their industry leadership. With a strong reputation for reliability and compliance, they are a trusted partner in the global pharmaceutical industry.</p>
      </div>
      <section id="offering" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div>
              <Table columns={columns} data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
