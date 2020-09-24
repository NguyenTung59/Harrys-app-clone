import React from "react";
import Link from 'next/link'
import ProductTable from "./tables/ProductTable";
import Layout from '../components/Layout'
import { Button, Row } from "antd";

const Admin = ({ products }) => {

  return (
    <Layout>
      {/* <Form /> */}
      <Row className="header-cms">
          <Link href="/addProduct">
            <Button type="primary">Add products</Button>
          </Link>
        </Row>
      {/* form cms */}
      <div className="cms">
        <div className="cms-products">
          <ProductTable products={products}/>
        </div>
      </div>
    </Layout>
  );
};

Admin.getInitialProps = async () => {
  const res = await fetch("https://harrys-app-clone.vercel.app/api/products");
  const { data } = await res.json();
  return { products: data };
};

export default Admin;