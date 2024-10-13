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
        pageName="Products"
        description="Arvik Pharma has the scientific strength, knowledge, expertise and infrastructure to manufacture any kind of Intermediates. It has a Manufacturing Facility with over  14 Reactors and supporting utility facilities at APIIC-APSEZ, Atchuthapuram, Visakhapatam , Andhra Pradesh."
      />
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
